export interface TierInterface {
    id: string;
    label: string;
    color: string;
    characterIds: string[];
}

export interface Tierlist {
    [key: string]: TierInterface;
}

export type Direction = 'ABOVE' | 'BELOW';
