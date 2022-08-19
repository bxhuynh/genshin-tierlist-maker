import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Character from '../Character';
import {
    SCContainer,
    SCLabel,
    SCCharacterContainer,
    SCControllerContainer,
    SCSettingButton,
    SCArrowContainer,
} from './TierSC';
import { TierInterface } from '../../constants/Interfaces';

interface Props {
    row: TierInterface;
    rowIndex: number;
    onOpenModal: () => void;
    moveTo: (direction: 'ABOVE' | 'BELOW', index: number) => () => void;
}

const Tier: React.FC<Props> = ({ row, onOpenModal, rowIndex, moveTo }) => {
    const { label, color, characterIds, id } = row;

    return (
        <SCContainer>
            <SCLabel color={color}>{label}</SCLabel>
            <Droppable droppableId={id} direction="horizontal">
                {(provided) => (
                    <SCCharacterContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {characterIds.map(
                            (characterId: string, index: number) => (
                                <Character
                                    key={characterId}
                                    index={index}
                                    characterId={characterId}
                                />
                            )
                        )}
                        {provided.placeholder}
                    </SCCharacterContainer>
                )}
            </Droppable>
            <SCControllerContainer>
                <SCSettingButton
                    onClick={onOpenModal}
                    className="material-icons"
                >
                    settings
                </SCSettingButton>
                <SCArrowContainer>
                    <SCSettingButton
                        onClick={moveTo('ABOVE', rowIndex)}
                        className="material-icons"
                    >
                        keyboard_arrow_up
                    </SCSettingButton>
                    <SCSettingButton
                        onClick={moveTo('BELOW', rowIndex)}
                        className="material-icons"
                    >
                        keyboard_arrow_down
                    </SCSettingButton>
                </SCArrowContainer>
            </SCControllerContainer>
        </SCContainer>
    );
};

export default Tier;
