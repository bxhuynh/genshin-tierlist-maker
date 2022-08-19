import styled from 'styled-components';

const SCApp = styled.div`
    width: 100%;
    overflow-x: hidden;
`;

const SCTierContainer = styled.div`
    width: 90%;
    max-width: 1062px;
    margin: 9px auto;
    border-top: 1px solid black;
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

export { ButtonContainerSC, SCTierContainer, SCApp, SCButton, ButtomPrimarySC };
