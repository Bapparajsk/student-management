import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import ThemeText from "../ui/ThemeText";

export const stats: StatCardProps[] = [
    {
        label: 'CGPA',
        value: '8.7',
        icon: 'school',
        color: '#22D3EE',
    },
    {
        label: 'Attendance',
        value: '89%',
        icon: 'how-to-reg',
        color: '#818CF8',
    },
    {
        label: 'Credits',
        value: '112',
        icon: 'workspace-premium',
        color: '#FB923C',
    },
    {
        label: 'Rank',
        value: '#14',
        icon: 'emoji-events',
        color: '#FACC15',
    },
];

export type StatCardProps = {
    label: string;
    value: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    color: string;
};

export const StatCard = ({ label, value, icon, color }: StatCardProps) => {
    return (
        <View className="flex-1 flex-row items-center rounded-2xl border border-white/5 bg-white/4 p-3">

            <View
                className="h-10 w-10 items-center justify-center rounded-xl"
                style={{
                    backgroundColor: `${color}15`,
                }}
            >
                <MaterialIcons
                    name={icon}
                    size={18}
                    color={color}
                />
            </View>

            <View className="ml-3 flex-1">
                <ThemeText className="text-lg font-poppins-semibold">
                    {value}
                </ThemeText>

                <ThemeText className="text-xs text-zinc-500">
                    {label}
                </ThemeText>
            </View>

        </View>
    );
}