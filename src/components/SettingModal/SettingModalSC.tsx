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
    overflow: scroll;
    background-color: #fefefe;
    border-radius: 4px;
    padding: 20px;
    width: 80%;
    max-width: 1024px;
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
    color: #aaa;
    float: right;
    font-size: 24px;
    &:hover,
    &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`;

const SCLabel = styled.div``;

const SCColor = styled.div``;

const SCInput = styled.input``;

const SCButton = styled.div``;

export { SCModalContainer, SCModalContent, SCCloseButton, SCLabel, SCColor, SCInput, SCButton };
