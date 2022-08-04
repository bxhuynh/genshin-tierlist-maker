interface Tier {
    label: string;
    color: string;
}

const initTier: Array<Tier> = [
    { label: 'S', color: '#FF7F7F' },
    { label: 'A', color: '#FFBF7F' },
    { label: 'B', color: '#FFDF7F' },
    { label: 'C', color: '#FFFF7F' },
    { label: 'D', color: '#BFFF7F' },
];

export { initTier };
