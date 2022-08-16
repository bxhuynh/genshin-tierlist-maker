import React, { useEffect, useState } from 'react';
import { TierInterface } from '../../constants/initial-data';
import {
    SCModalContainer,
    SCModalContent,
    SCCloseButton,
    SCLabel,
    SCColor,
    SCColorContainer,
    SCInput,
    SCButton,
    SCButtonContainer,
} from './SettingModalSC';
import { tierColors } from '../../constants/colors';

interface SettingModalProps {
    open: boolean;
    row: TierInterface;
    toggleModal: () => void;
    updateRow: (newRow: TierInterface) => void;
}

const SettingModal: React.FunctionComponent<SettingModalProps> = (props) => {
    const { open, row, toggleModal, updateRow } = props;
    const [label, setLabel] = useState<string>('');

    const handleChangeColor = (newColor: string) => {
        return () => updateRow({ ...row, color: newColor });
    };

    const handleChangeLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value);
        /* TODO: debounce, make sure it save before the modal close */
        updateRow({ ...row, label: e.target.value });
    };

    useEffect(() => {
        setLabel(row?.label);
    }, [open]);

    return (
        <SCModalContainer open={open}>
            <SCModalContent>
                <SCCloseButton className="material-icons" onClick={toggleModal}>
                    cancel
                </SCCloseButton>
                <SCLabel>Choose a Label Background Color:</SCLabel>
                <SCColorContainer>
                    {tierColors.map((color: string, index: number) => (
                        <SCColor
                            key={index}
                            backgroundColor={color}
                            isChoosed={Boolean(row?.color === color)}
                            onClick={handleChangeColor(color)}
                        />
                    ))}
                </SCColorContainer>

                <SCLabel>Edit Label Text Below:</SCLabel>
                <SCInput
                    placeholder="Enter label"
                    value={label}
                    onChange={handleChangeLabel}
                />

                <SCButtonContainer>
                    <SCButton>Delete Row</SCButton>
                    <SCButton>Clear Row Image</SCButton>
                    <SCButton>Add a Row Above</SCButton>
                    <SCButton>Add a Row Below</SCButton>
                </SCButtonContainer>
            </SCModalContent>
        </SCModalContainer>
    );
};

export default SettingModal;
