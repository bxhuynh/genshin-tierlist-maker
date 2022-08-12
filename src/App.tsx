import React, { useState } from 'react';
import './App.css';
import AllCharacter from './components/AllCharacter';
import Header from './components/Header';
import Tier from './components/Tier';
import { allCharacters, initRows, initRowOrder, Tierlist } from './constants/initial-data';

const App: React.FC = () => {
    const [characters, setCharaters] = useState<string[]>(allCharacters);
    const [rows, setRows] = useState<Tierlist>(initRows);
    const [rowOrder, setRowOrder] = useState<string[]>(initRowOrder);

    return (
        <div className="App">
            <Header />
            <div style={{ width: '90%', maxWidth: 1040, margin: '0px auto', borderTop: '3px solid black' }}>
                {rowOrder.map((rowId: string) => {
                    const row = rows[rowId];
                    return <Tier key={row.id} row={row} />;
                })}
                <AllCharacter characters={characters} />
            </div>
        </div>
    );
};

export default App;
