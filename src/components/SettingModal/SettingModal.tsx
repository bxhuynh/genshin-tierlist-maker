import * as React from 'react';
import { TierInterface } from '../../constants/initial-data';
import { SCModalContainer, SCModalContent, SCCloseButton } from './SettingModalSC';

interface SettingModalProps {
    open: boolean;
    row?: TierInterface;
    toggleModal: () => void;
}

const SettingModal: React.FunctionComponent<SettingModalProps> = (props) => {
    const { open, row, toggleModal } = props;
    return (
        <SCModalContainer open={open}>
            <SCModalContent>
                <SCCloseButton className="material-icons" onClick={toggleModal}>
                    cancel
                </SCCloseButton>
                {row?.id ?? 'This is setting modal'}
            </SCModalContent>
        </SCModalContainer>
    );
};

export default SettingModal;
