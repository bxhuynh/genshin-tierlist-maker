import React from 'react';
import styled from 'styled-components';
interface CharacterProps {
    characterId: string;
}

const SCCharacter = styled.div<CharacterProps>`
    height: 80px;
    width: 80px;
    background-image: ${(props) => `url(/assets/character_icons/${props.characterId}.png)`};
    background-position: center;
    background-size: cover;
    cursor: pointer;
    display: inline-block;
`;

const Character: React.FC<CharacterProps> = (props) => {
    const { characterId } = props;

    return <SCCharacter characterId={characterId} />;
};

export default Character;
