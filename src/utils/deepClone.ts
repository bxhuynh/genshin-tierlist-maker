import { Tierlist } from '../constants/Interfaces';

const deepCloneTierlist = (obj: Tierlist): Tierlist => {
    return JSON.parse(JSON.stringify(obj));
};
export { deepCloneTierlist };
