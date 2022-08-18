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
interface TierInterface {
    id: string;
    label: string;
    color: string;
    characterIds: string[];
}

interface Props {
    row: TierInterface;
    isLastItem?: boolean;
    rowIndex: number;
    onOpenModal: () => void;
    moveTo: (direction: 'UP' | 'DOWN', index: number) => () => void;
}

const Tier: React.FC<Props> = ({
    row,
    isLastItem,
    onOpenModal,
    rowIndex,
    moveTo,
}) => {
    const { label, color, characterIds, id } = row;

    return (
        <SCContainer isLastItem={isLastItem}>
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
                        onClick={moveTo('UP', rowIndex)}
                        className="material-icons"
                    >
                        keyboard_arrow_up
                    </SCSettingButton>
                    <SCSettingButton
                        onClick={moveTo('DOWN', rowIndex)}
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
