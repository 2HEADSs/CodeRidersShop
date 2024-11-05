import { useState } from "react";

export default function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const persistedAuthUser = localStorage.getItem(key);
        if (!persistedAuthUser) {
            return initialState
        };

        return JSON.parse(persistedAuthUser);
    });
    const updateState = (value) => {
        localStorage.setItem(key, JSON.stringify(value))

        setState(value);
    }

    return [state, updateState];
}