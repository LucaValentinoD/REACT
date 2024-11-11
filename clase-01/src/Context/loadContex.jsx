import React, { useState, createContext } from 'react';

export const LoadContext = createContext();

export const LoadProvider = ({ children }) => {
    const [load, setLoad] = useState(true);

    return (
        <LoadContext.Provider value={{ load, setLoad }}>
            {children}
        </LoadContext.Provider>
    );
};
