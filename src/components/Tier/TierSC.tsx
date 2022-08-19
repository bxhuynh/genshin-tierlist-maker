import styled from 'styled-components';

const SCContainer = styled.div`
    background-color: #333;
    min-height: 83px;
    display: flex;
    margin: 0 auto;
    border-style: solid;
    border-color: black;
    border-width: 0px 1px 2px 2px;
`;
const SCLabel = styled.div`
    width: 100px;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    overflow: hidden;
    word-break: break-all;
    outline: none;
    box-sizing: border-box;
`;
const SCCharacterContainer = styled.div`
    flex: 1;
`;

const SCControllerContainer = styled.div`
    width: 80px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const SCArrowContainer = styled.div`
    width: min-content;
`;

const SCSettingButton = styled.div`
    cursor: pointer;
    padding: 6px;
    margin: 2px;
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
    SCArrowContainer,
};
