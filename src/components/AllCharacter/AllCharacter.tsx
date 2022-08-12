import * as React from 'react';
import styled from 'styled-components';
import Character from '../Character';

interface AllCharacterInterface {
    characters: string[];
}

const Container = styled.div`
    margin: 40px 0 60px 0;
`;

const AllCharacter: React.FunctionComponent<AllCharacterInterface> = ({ characters }) => {
    return (
        <Container>
            {characters.map((characterId) => (
                <Character characterId={characterId} key={characterId} />
            ))}
        </Container>
    );
};

export default AllCharacter;
