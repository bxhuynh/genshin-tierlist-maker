import React from 'react';
import { initTier } from '../../constants/init-tier';
import styled from 'styled-components';
import Tier from './Tier';

const Container = styled.div`
    margin: 0 80px;
`;

const TierListContainer: React.FC = () => {
    return (
        <Container>
            {initTier.map((tier, index) => (
                <Tier key={index} label={tier.label} />
            ))}
        </Container>
    );
};

export default TierListContainer;
