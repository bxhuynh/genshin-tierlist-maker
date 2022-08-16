import styled from 'styled-components';

const SCContainer = styled.div<{ isLastItem?: boolean }>`
    background-color: #333;
    min-height: 83px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    border-style: solid;
    border-color: black;
    border-width: 0px 1px ${(props) => (props.isLastItem ? '1px' : '2px')} 1px;
`;
const SCLabel = styled.div`
    width: 80px;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    overflow: hidden;
    word-break: break-all;
    outline: none;
`;
const SCCharacterContainer = styled.div`
    flex: 1;
`;

const SCControllerContainer = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
`;

const SCSettingButton = styled.div`
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    &:hover {
        background: #333;
    }
`;

export {
    SCContainer,
    SCLabel,
    SCCharacterContainer,
    SCControllerContainer,
    SCSettingButton,
};
