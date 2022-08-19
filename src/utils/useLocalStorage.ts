/*
    ref: https://usehooks.com/useLocalStorage/
*/
import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') return initialValue;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStored =
                value instanceof Function ? value(storedValue) : value;

            setStoredValue(value);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStored));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue] as const;
}
export default useLocalStorage;
