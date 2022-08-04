import React from 'react';

interface TierProps {
    label: string;
}

const Tier: React.FC<TierProps> = (props) => {
    return <div>{props.label}</div>;
};

export default Tier;
