import { create } from 'zustand';

type ScrollStore = {
    y: number;
    updatedAt: number;
};

export const useScrollStore = create<ScrollStore>(() => ({
    y: 0,
    updatedAt: Date.now(),
}));

export const setScrollTo = (y: number) => {
    useScrollStore.setState({ y, updatedAt: Date.now() });
};
