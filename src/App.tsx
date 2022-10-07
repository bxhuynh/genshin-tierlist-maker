import React, { useState, useRef } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { toPng } from 'html-to-image';

import AllCharacter from './components/AllCharacter';
import Header from './components/Header';
import Tier from './components/Tier';
import SettingModal from './components/SettingModal';

import { initRows, initRowOrder, allCharKey } from './constants/initial-data';
import { Tierlist, TierInterface, Direction } from './constants/Interfaces';
import generateId from './utils/generateId';
import getRandomColor from './utils/randomTierColor';
import { deepCloneTierlist } from './utils/deepClone';
import useLocalStorage from './utils/useLocalStorage';
import {
    SCApp,
    SCTierContainer,
    SCButtonContainer,
    SCButton,
    SCButtomPrimary,
    SCAllContainer,
} from './AppSC';

const App: React.FC = () => {
    const [rows, setRows] = useLocalStorage<Tierlist>('tierlist', initRows);
    const [rowOrder, setRowOrder] = useState<string[]>(initRowOrder);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedRowId, setSelectedRowId] = useState<string>('');
    const tierRef = useRef<HTMLDivElement>(null);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const handleOpenModal = (rowId: string) => {
        return () => {
            setSelectedRowId(rowId);
            setOpenModal(true);
        };
    };

    const updateRow = (newRow: TierInterface) => {
        setRows({ ...rows, [newRow.id]: newRow });
    };

    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination?.droppableId || !draggableId) return;

        // re-order in a tier
        if (destination.droppableId === source?.droppableId) {
            if (destination.index === source.index) return;
            const tier: TierInterface = rows[source.droppableId];
            const characterIds: string[] = Array.from(tier.characterIds);
            characterIds.splice(source.index, 1);
            characterIds.splice(destination.index, 0, draggableId);
            const newTier: TierInterface = {
                ...tier,
                characterIds,
            };
            updateRow(newTier);
            return;
        }

        // move to other tier
        const startTier: TierInterface = rows[source.droppableId];
        const endTier: TierInterface = rows[destination.droppableId];
        const startCharacterIds: string[] = Array.from(startTier.characterIds);
        startCharacterIds.splice(source.index, 1);
        const endCharacterIds: string[] = Array.from(endTier.characterIds);
        endCharacterIds.splice(destination?.index, 0, draggableId);

        const newRows: Tierlist = { ...rows };
        newRows[startTier.id] = {
            ...startTier,
            characterIds: startCharacterIds,
        };
        newRows[endTier.id] = { ...endTier, characterIds: endCharacterIds };
        setRows(newRows);
    };

    const onClearAllImage = () => {
        if (!selectedRowId) return;

        setRows({
            ...rows,
            [selectedRowId]: {
                ...rows[selectedRowId],
                characterIds: [],
            },
            [allCharKey]: {
                ...rows[allCharKey],
                characterIds: rows[allCharKey].characterIds.concat(
                    rows[selectedRowId].characterIds
                ),
            },
        });
        setOpenModal(false);
    };

    const deleteSelectedRow = () => {
        if (!selectedRowId) return;

        const newCharacterIds: string[] = Array.from(
            rows[allCharKey].characterIds.concat(
                rows[selectedRowId].characterIds
            )
        );

        const rowIndex: number = rowOrder.indexOf(selectedRowId);
        const newRowOrder: string[] = Array.from(rowOrder);
        newRowOrder.splice(rowIndex, 1);

        const newRows: Tierlist = JSON.parse(JSON.stringify(rows));
        delete newRows[selectedRowId];
        newRows[allCharKey].characterIds = newCharacterIds;

        setOpenModal(false);
        setSelectedRowId('');
        setRows(newRows);
        setRowOrder(newRowOrder);
    };

    const moveTo = (direction: Direction, index: number): (() => void) => {
        return () => {
            const unit = direction === 'ABOVE' ? -1 : 1;
            const newIndex = index + unit;
            if (newIndex < 0 || newIndex >= rowOrder.length) return;

            const newRowOrder: string[] = [...rowOrder];
            const temp: string = rowOrder[newIndex];
            newRowOrder[newIndex] = newRowOrder[index];
            newRowOrder[index] = temp;
            setRowOrder(newRowOrder);
        };
    };

    const addRow = (to: Direction): (() => void) => {
        return () => {
            if (!selectedRowId) return;
            const index = rowOrder.findIndex((id) => id === selectedRowId);
            if (index < -1) return;

            let rowIndex: number = (to === 'BELOW' ? 1 : 0) + index;
            if (rowIndex < 0) rowIndex = 0;

            const rowId = 'tier' + generateId();
            const newRow: TierInterface = {
                id: rowId,
                label: 'New Tier',
                characterIds: [],
                color: getRandomColor(),
            };
            const newRows: Tierlist = deepCloneTierlist(rows);
            newRows[rowId] = newRow;
            const newRowOrder = Array.from(rowOrder);
            newRowOrder.splice(rowIndex, 0, rowId);

            setRows(newRows);
            setRowOrder(newRowOrder);
            setOpenModal(false);
        };
    };

    const onClear = () => {
        setRows(initRows);
        setRowOrder(initRowOrder);
    };

    const onSaveImage = async () => {
        if (!tierRef || !tierRef.current) return;
        const dataUrl: string = await toPng(tierRef.current, {
            height: tierRef.current.clientHeight + 2,
            width: tierRef.current.clientWidth - 78,
        });
        const link = document.createElement('a');
        link.download = 'tierlist.png';
        link.href = dataUrl;
        link.click();
    };

    return (
        <SCApp>
            <Header />
            <DragDropContext onDragEnd={onDragEnd}>
                <SCTierContainer id="tierlist" ref={tierRef}>
                    {rowOrder.map((rowId: string, rowIndex: number) => {
                        const row = rows[rowId];
                        return (
                            <Tier
                                rowIndex={rowIndex}
                                key={rowId}
                                row={row}
                                onOpenModal={handleOpenModal(rowId)}
                                moveTo={moveTo}
                            />
                        );
                    })}
                </SCTierContainer>
                <SCButtonContainer>
                    <SCButtomPrimary onClick={onSaveImage}>
                        Save as Image
                    </SCButtomPrimary>
                    <SCButton onClick={onClear}>Clear</SCButton>
                </SCButtonContainer>
                <SCAllContainer>
                    <AllCharacter
                        key="all-char"
                        characters={rows['all-char'].characterIds}
                    />
                </SCAllContainer>
            </DragDropContext>
            <SettingModal
                open={openModal}
                toggleModal={toggleModal}
                row={rows[selectedRowId]}
                updateRow={updateRow}
                onClearAllImage={onClearAllImage}
                deleteSelectedRow={deleteSelectedRow}
                allowDelete={rowOrder.length > 1}
                addRow={addRow}
            />
        </SCApp>
    );
};

export default App;
