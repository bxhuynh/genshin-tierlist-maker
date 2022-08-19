import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
interface CharacterProps {
    characterId: string;
    index: number;
}

const getAssetUrl = (characterId: string): string => {
    return `url(/genshin-tierlist-maker/assets/character_icons/${characterId}.png)`;
};

const SCCharacter = styled.div<{ characterId: string }>`
    height: 80px;
    width: 80px;
    background-image: ${(props) => getAssetUrl(props.characterId)};
    background-position: center;
    background-size: cover;
    cursor: pointer;
    display: inline-block;
`;

const Character: React.FC<CharacterProps> = (props) => {
    const { characterId, index } = props;

    return (
        <Draggable draggableId={characterId} index={index}>
            {(provided) => (
                <SCCharacter
                    characterId={characterId}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                />
            )}
        </Draggable>
    );
};

export default Character;
