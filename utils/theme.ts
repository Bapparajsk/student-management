export const lightColors = {
    background: "#FFFFFF",
    surface: "#F8FAFC",
    card: "#FFFFFF",

    primary: "#2563EB",
    primaryLight: "#3B82F6",
    secondary: "#7C3AED",

    text: "#0F172A",
    textSecondary: "#475569",
    textMuted: "#94A3B8",

    border: "#E2E8F0",
    divider: "#CBD5E1",

    success: "#16A34A",
    warning: "#F59E0B",
    error: "#DC2626",
    info: "#0EA5E9",

    tabBar: "#FFFFFF",
    tabIcon: "#64748B",
    tabIconActive: "#2563EB",

    inputBackground: "#F1F5F9",
    placeholder: "#94A3B8",

    // BUTTONS
    primaryButton: {
        background: "#006FEE",
        pressed: "#005BC4",
        text: "#FFFFFF",
    },

    secondaryButton: {
        background: "#9353D3",
        pressed: "#7E46BA",
        text: "#FFFFFF",
    },

    tertiaryButton: {
        background: "#17C964",
        pressed: "#12A150",
        text: "#FFFFFF",
    },

    outlineButton: {
        background: "transparent",
        border: "#D4D4D8",
        pressed: "#F4F4F5",
        text: "#11181C",
    },

    ghostButton: {
        background: "transparent",
        pressed: "#F4F4F5",
        text: "#11181C",
    },

    dangerButton: {
        background: "#F31260",
        pressed: "#C20E4D",
        text: "#FFFFFF",
    },

    dangerSoftButton: {
        background: "#FFE4EC",
        pressed: "#FFD0DD",
        text: "#F31260",
    },

    disabledButton: {
        background: "#F4F4F5",
        text: "#A1A1AA",
    },

    shadow: "#000000",
};

export const darkColors = {
    background: "#020617",
    surface: "#0F172A",
    card: "#111827",

    primary: "#3B82F6",
    primaryLight: "#60A5FA",
    secondary: "#8B5CF6",

    text: "#F8FAFC",
    textSecondary: "#CBD5E1",
    textMuted: "#64748B",

    border: "#1E293B",
    divider: "#334155",

    success: "#22C55E",
    warning: "#FBBF24",
    error: "#EF4444",
    info: "#38BDF8",

    tabBar: "#0F172A",
    tabIcon: "#64748B",
    tabIconActive: "#3B82F6",

    inputBackground: "#1E293B",
    placeholder: "#64748B",

    // BUTTONS
    primaryButton: {
        background: "#006FEE",
        pressed: "#338EF7",
        text: "#FFFFFF",
    },

    secondaryButton: {
        background: "#9353D3",
        pressed: "#A16FE0",
        text: "#FFFFFF",
    },

    tertiaryButton: {
        background: "#17C964",
        pressed: "#45D483",
        text: "#FFFFFF",
    },

    outlineButton: {
        background: "transparent",
        border: "#3F3F46",
        pressed: "#18181B",
        text: "#FAFAFA",
    },

    ghostButton: {
        background: "transparent",
        pressed: "#18181B",
        text: "#FAFAFA",
    },

    dangerButton: {
        background: "#F31260",
        pressed: "#FF4D8D",
        text: "#FFFFFF",
    },

    dangerSoftButton: {
        background: "#3B0A1E",
        pressed: "#52112B",
        text: "#FF4D8D",
    },

    disabledButton: {
        background: "#18181B",
        text: "#71717A",
    },

    shadow: "#000000",
};

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "tertiary"
    | "outline"
    | "ghost"
    | "danger"
    | "danger-soft";

export type ThemeColors = typeof lightColors;

