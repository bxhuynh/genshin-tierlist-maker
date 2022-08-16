import React, { useState } from 'react';
import AllCharacter from './components/AllCharacter';
import Header from './components/Header';
import Tier from './components/Tier';
import { allCharacters, initRows, initRowOrder, Tierlist } from './constants/initial-data';
import styled from 'styled-components';

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
    const [characters, setCharaters] = useState<string[]>(allCharacters);
    const [rows, setRows] = useState<Tierlist>(initRows);
    const [rowOrder, setRowOrder] = useState<string[]>(initRowOrder);

    return (
        <SCApp>
            <Header />
            <SCTierContainer>
                {rowOrder.map((rowId: string, index: number) => {
                    const row = rows[rowId];
                    return <Tier key={row.id} row={row} isLastItem={Boolean(index === rowOrder.length - 1)} />;
                })}
                <AllCharacter characters={characters} />
            </SCTierContainer>
        </SCApp>
    );
};

export default App;
