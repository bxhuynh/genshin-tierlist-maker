import React from 'react';

interface CharacterProps {
    characterId: string;
}

const Character: React.FC<CharacterProps> = (props) => {
    const { characterId } = props;

    return <img src={`/assets/character_icons/${characterId}.png`} alt={characterId} />;
};

export default Character;
