import { create } from 'zustand';

type ScrollStore = {
    y: number;
    commandId: number;
};

export const useScrollStore = create<ScrollStore>(() => ({
    y: 0,
    commandId: 0,
}));

export const setScrollTo = (y: number) => {
    useScrollStore.setState((state) => ({
        y,
        commandId: state.commandId + 1,
    }));
};