// function dec2hex(dec) {
//     return dec.toString(16).padStart(2, '0');
// }

// const getId = () => {
//     var arr = new Uint8Array(40 / 2);
//     window.crypto.getRandomValues(arr);
//     return Array.from(arr, dec2hex).join('');
// };

const dec2hex = (dec: number) => {
    return dec.toString(16).padStart(2, '0');
};

const generateId = (): string => {
    const arr = new Uint8Array(20);
    window.crypto.getRandomValues(arr);

    return Array.from(arr, dec2hex).join();
};

export default generateId;
