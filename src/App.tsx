import React, { useState } from 'react';
import AllCharacter from './components/AllCharacter';
import Header from './components/Header';
import Tier from './components/Tier';
import { initRows, initRowOrder } from './constants/initial-data';
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
    max-width: 1040px;
    margin: 9px auto;
    border-top: 1px solid black;
`;

const App: React.FC = () => {
    const [rows, setRows] = useState<Tierlist>(initRows);
    const [rowOrder, setRowOrder] = useState<string[]>(initRowOrder);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedRowId, setSelectedRowId] = useState<string>('');

    const toggleModal = () => {
        console.log('openmodal', openModal);
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

    return (
        <SCApp>
            <Header />

            <DragDropContext onDragEnd={onDragEnd}>
                <SCTierContainer>
                    {rowOrder.map((rowId: string, index: number) => {
                        const row = rows[rowId];
                        return (
                            <Tier
                                key={rowId}
                                row={row}
                                isLastItem={Boolean(
                                    index === rowOrder.length - 2
                                )}
                                onOpenModal={handleOpenModal(rowId)}
                            />
                        );
                    })}
                    <AllCharacter
                        key="all-char"
                        characters={rows['all-char'].characterIds}
                    />
                </SCTierContainer>
                <SettingModal
                    open={openModal}
                    toggleModal={toggleModal}
                    row={rows[selectedRowId]}
                    updateRow={updateRow}
                />
            </DragDropContext>
        </SCApp>
    );
};

export default App;
