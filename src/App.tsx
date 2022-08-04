import React from 'react';
import './App.css';
import Header from './components/Header';
import TierList from './components/TierList';
import CharacterList from './components/CharacterList';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <TierList />
            <CharacterList />
        </div>
    );
};

export default App;
