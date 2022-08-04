import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    height: 70px;
    text-align: center;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <h1>Tierlist Maker</h1>
        </HeaderContainer>
    );
};

export default Header;
