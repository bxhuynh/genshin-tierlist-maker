import * as React from 'react';
import Character from '../Character';
import { SCContainer, SCLabel, SCCharacterContainer, SCControllerContainer, SCSettingButton } from './TierSC';
interface TierInterface {
    id: string;
    label: string;
    color: string;
    characterIds: string[];
}

interface Props {
    row: TierInterface;
    isLastItem?: boolean;
    onOpenModal: () => void;
}

const Tier: React.FC<Props> = ({ row, isLastItem, onOpenModal }) => {
    const { label, color, characterIds } = row;

    return (
        <SCContainer isLastItem={isLastItem}>
            <SCLabel color={color}>{label}</SCLabel>
            <SCCharacterContainer>
                {characterIds.map((characterId) => (
                    <Character key={characterId} characterId={characterId} />
                ))}
            </SCCharacterContainer>
            <SCControllerContainer>
                <SCSettingButton onClick={onOpenModal} className="material-icons">
                    settings
                </SCSettingButton>
            </SCControllerContainer>
        </SCContainer>
    );
};

export default Tier;
