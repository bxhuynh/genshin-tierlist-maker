import * as React from 'react';
import Character from '../Character';
import { SCContainer, SCLabel, SCCharacterContainer } from './TierSC';

interface TierInterface {
    id: string;
    label: string;
    color: string;
    characterIds: string[];
}

interface Props {
    row: TierInterface;
}

const Tier: React.FC<Props> = ({ row }) => {
    const { label, color, characterIds } = row;

    /*TODO: update value to rows*/
    const updateLabel = (e: React.BaseSyntheticEvent) => {
        console.log(e.currentTarget.textContent);
    };

    return (
        <SCContainer>
            <SCLabel color={color} contentEditable={true} suppressContentEditableWarning={true} onInput={updateLabel}>
                {label}
            </SCLabel>
            <SCCharacterContainer>
                {characterIds.map((characterId) => (
                    <Character key={characterId} characterId={characterId} />
                ))}
            </SCCharacterContainer>
        </SCContainer>
    );
};

export default Tier;
