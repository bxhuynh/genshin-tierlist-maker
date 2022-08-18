import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    text-align: center;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <h1>TierMaker</h1>
        </HeaderContainer>
    );
};

export default Header;
