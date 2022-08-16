import * as React from 'react';
import styled from 'styled-components';
import Character from '../Character';
import { Droppable } from 'react-beautiful-dnd';

interface AllCharacterInterface {
    characters: string[];
}

const Container = styled.div`
    margin: 40px 0 60px 0;
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
