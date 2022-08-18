import { tierColors } from '../constants/colors';

const getRandomColor = (): string => {
    return tierColors[Math.floor(Math.random() * tierColors.length)];
};

export default getRandomColor;
