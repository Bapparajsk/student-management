import { createContext, useContext } from 'react';

type ScrollContextType = {
    scrollTo: (y: number) => void;
};

export const ScrollContext =
    createContext<ScrollContextType | null>(null);

export const useScrollContext = () => {
    const context =
        useContext(ScrollContext);

    if (!context) {
        throw new Error(
            'useScrollContext must be used inside ScreenContent'
        );
    }

    return context;
};