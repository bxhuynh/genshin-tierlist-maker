import * as React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import Character from '../Character';

interface AllCharacterInterface {
    characters: string[];
}

const Container = styled.div`
    margin: 40px 0 60px 0;
    min-height: 320px;
`;

const AllCharacter: React.FunctionComponent<AllCharacterInterface> = ({
    characters,
}) => {
    return (
        <Droppable droppableId={'all-char'} direction="horizontal">
            {(provided) => (
                <Container {...provided.droppableProps} ref={provided.innerRef}>
                    {characters.map((characterId: string, index: number) => (
                        <Character
                            key={characterId}
                            index={index}
                            characterId={characterId}
                        />
                    ))}
                    {provided.placeholder}
                </Container>
            )}
        </Droppable>
    );
};

export default AllCharacter;
