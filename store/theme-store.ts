import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    DarkTheme,
    DefaultTheme,
} from "@react-navigation/native";

import { create } from "zustand";

import {
    createJSONStorage,
    persist,
} from "zustand/middleware";

import {
    darkColors,
    lightColors,
    ThemeColors,
} from "utils/theme";

export type ThemeMode =
    | "light"
    | "dark";

const lightNavigationTheme =
{
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...lightColors,
    },
};

const darkNavigationTheme =
{
    ...DarkTheme,

    colors: {
        ...DarkTheme.colors,
        ...darkColors,
    },
};

type ThemeStore = {
    mode: ThemeMode;
    isDark: boolean;
    colors: ThemeColors;
    navigationTheme: typeof lightNavigationTheme;
    setTheme: (theme: ThemeMode) => void;
    toggleTheme: () => void;
};

const getThemeValues = (
    mode: ThemeMode
) => {
    const isDark =
        mode === "dark";

    return {
        mode,

        isDark,

        colors: isDark
            ? darkColors
            : lightColors,

        navigationTheme:
            isDark
                ? darkNavigationTheme
                : lightNavigationTheme,
    };
};

export const useThemeStore =
    create<ThemeStore>()(
        persist(
            (set, get) => ({
                ...getThemeValues("light"),
                setTheme: (theme) => {
                    set(getThemeValues(theme));
                },
                toggleTheme: () => {
                    const current = get().mode;
                    const nextTheme =
                        current ===
                            "light"
                            ? "dark"
                            : "light";

                    set(
                        getThemeValues(
                            nextTheme
                        )
                    );
                },
            }),
            {
                name: "app-theme-storage",
                storage:
                    createJSONStorage(
                        () =>
                            AsyncStorage
                    ),

                partialize: (
                    state
                ) => ({
                    mode: state.mode,
                }),

                merge: (
                    persistedState,
                    currentState
                ) => {
                    const state =
                        persistedState as {
                            mode?: ThemeMode;
                        };
                    const mode =
                        state?.mode ??
                        "light";

                    return {
                        ...currentState,
                        ...getThemeValues(
                            mode
                        ),
                    };
                },
            }
        )
    );
