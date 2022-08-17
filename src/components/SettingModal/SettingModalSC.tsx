import styled from 'styled-components';

const SCModalContainer = styled.div<{ open: boolean }>`
    display: ${(props) => (props.open ? 'block' : 'none')};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
`;

const SCModalContent = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    padding: 20px;
    width: 80%;
    max-width: 800px;
    max-height: 80%;
    min-height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-name: animatetop;
    animation-duration: 0.5s;
    @keyframes animatetop {
        from {
            top: -300px;
            opacity: 0;
        }
        to {
            top: 50%;
            opacity: 1;
        }
    }
`;

const SCCloseButton = styled.div`
    align-self: flex-end;
    color: #aaa;
    font-size: 24px;
    &:hover,
    &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`;

const SCLabel = styled.h2`
    color: rgba(0, 0, 0, 0.75);
    border-bottom: 16px;
`;

const SCColorContainer = styled.div`
    align-content: center;
    margin-bottom: 4px;
`;

const SCColor = styled.div<{
    backgroundColor: string;
    isChoosed: boolean;
}>`
    display: inline-block;
    margin: 8px;
    background-color: ${(props) => props.backgroundColor};
    box-sizing: border-box;
    min-width: 32px;
    min-height: 32px;
    border-radius: 50%;
    border: ${(props) => (props.isChoosed ? '2px solid black' : 'none')};
    cursor: pointer;
    &:hover {
        border: 2px solid #aaa;
    }
`;

const SCInput = styled.input`
    width: 90%;
    max-width: 704px;
    height: 32px;
    outline: none;
    padding: 0 12px;
`;

const SCButtonContainer = styled.div`
    width: 100%;
    max-width: 704px;
    margin: 24px 0px;
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
`;

const SCButton = styled.div<{ disable?: boolean }>`
    cursor: pointer;
    pointer-events: ${(props) => (props.disable ? 'none' : 'auto')};
    padding: 8px 16px;
    min-height: 24px;
    border-radius: 4px;
    background-color: lightgrey;
    max-width: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s background-color;
    font-size: 0.875rem;
    &:hover {
        background-color: #e0e0e0;
        transition: 0.5s background-color;
    }
    opacity: ${(props) => (props.disable ? 0.5 : 1)};
`;

export {
    SCModalContainer,
    SCModalContent,
    SCCloseButton,
    SCLabel,
    SCColor,
    SCInput,
    SCButton,
    SCColorContainer,
    SCButtonContainer,
};
