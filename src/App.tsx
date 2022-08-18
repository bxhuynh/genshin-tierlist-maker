import React, { useState } from 'react';
import AllCharacter from './components/AllCharacter';
import Header from './components/Header';
import Tier from './components/Tier';
import { initRows, initRowOrder, allCharKey } from './constants/initial-data';
import { Tierlist, TierInterface } from './constants/TierInterface';
import styled from 'styled-components';
import SettingModal from './components/SettingModal';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const SCApp = styled.div`
    width: 100%;
    overflow-x: hidden;
`;

const SCTierContainer = styled.div`
    width: 90%;
    max-width: 1062px;
    margin: 9px auto;
    border-top: 1px solid black;
`;

const App: React.FC = () => {
    const [rows, setRows] = useState<Tierlist>(initRows);
    const [rowOrder, setRowOrder] = useState<string[]>(initRowOrder);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedRowId, setSelectedRowId] = useState<string>('');

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
        console.log({ destination, source, draggableId });

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

    const moveTo = (direction: 'UP' | 'DOWN', index: number) => {
        return () => {
            const unit = direction === 'UP' ? -1 : 1;
            const newIndex = index + unit;
            if (newIndex < 0 || newIndex >= rowOrder.length) return;

            const newRowOrder: string[] = [...rowOrder];
            const temp: string = rowOrder[newIndex];
            newRowOrder[newIndex] = newRowOrder[index];
            newRowOrder[index] = temp;
            setRowOrder(newRowOrder);
        };
    };

    return (
        <SCApp>
            <Header />

            <DragDropContext onDragEnd={onDragEnd}>
                <SCTierContainer>
                    {rowOrder.map((rowId: string, rowIndex: number) => {
                        const row = rows[rowId];
                        return (
                            <Tier
                                rowIndex={rowIndex}
                                key={rowId}
                                row={row}
                                isLastItem={Boolean(
                                    rowIndex === rowOrder.length - 1
                                )}
                                onOpenModal={handleOpenModal(rowId)}
                                moveTo={moveTo}
                            />
                        );
                    })}
                    {/* <AllCharacter
                        key="all-char"
                        characters={rows['all-char'].characterIds}
                    /> */}
                </SCTierContainer>
                <SettingModal
                    open={openModal}
                    toggleModal={toggleModal}
                    row={rows[selectedRowId]}
                    updateRow={updateRow}
                    onClearAllImage={onClearAllImage}
                    deleteSelectedRow={deleteSelectedRow}
                    allowDelete={rowOrder.length > 1}
                />
            </DragDropContext>
        </SCApp>
    );
};

export default App;
