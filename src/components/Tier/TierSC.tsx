import styled from 'styled-components';

const SCContainer = styled.div`
    background-color: #333;
    min-height: 80px;
    display: flex;
    flex-wrap: true;
    margin: 0 auto;
    border-color: black;
    border-style: solid;
    border-width: 0px 3px 3px 3px;
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
    border-right: 3px solid black;
    outline: none;
`;
const SCCharacterContainer = styled.div`
    flex: 1;
`;

export { SCContainer, SCLabel, SCCharacterContainer };
