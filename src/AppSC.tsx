import styled from 'styled-components';

const SCApp = styled.div`
    width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SCTierContainer = styled.div`
    width: 90%;
    max-width: 1062px;
    border-top: 2px solid black;
`;

const SCAllContainer = styled(SCTierContainer)`
    border: none;
`;

const ButtonContainerSC = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 24px;
`;

const SCButton = styled.div`
    cursor: pointer;
    padding: 8px 16px;
    min-height: 24px;
    border-radius: 4px;
    background-color: lightgrey;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s background-color;
    font-size: 0.875rem;
    &:hover {
        background-color: #e0e0e0;
        transition: 0.5s background-color;
    }
`;

const ButtomPrimarySC = styled(SCButton)`
    background-color: #4287f5;
    color: white;
    &:hover {
        background-color: #72a7fc;
    }
`;

export {
    SCAllContainer,
    ButtonContainerSC,
    SCTierContainer,
    SCApp,
    SCButton,
    ButtomPrimarySC,
};
