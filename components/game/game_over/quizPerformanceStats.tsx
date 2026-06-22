import ThemeText from '@/components/ui/ThemeText';
import { cn } from '@/utils/ch';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

const CARD_STYLES = {
    Correct: {
        bg: 'bg-emerald-500/[0.06]',
        border: 'border-emerald-500/15',
        iconBg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
    },
    Wrong: {
        bg: 'bg-red-500/[0.06]',
        border: 'border-red-500/15',
        iconBg: 'bg-red-500/10',
        text: 'text-red-400',
    },
    Accuracy: {
        bg: 'bg-cyan-500/[0.06]',
        border: 'border-cyan-500/15',
        iconBg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
    },
    Time: {
        bg: 'bg-violet-500/[0.06]',
        border: 'border-violet-500/15',
        iconBg: 'bg-violet-500/10',
        text: 'text-violet-400',
    },
};

const StatCard = ({
    icon,
    iconColor,
    value,
    label,
}: {
    icon: keyof typeof MaterialIcons.glyphMap;
    iconColor: string;
    value: string;
    label: string;
}) => {

    const styles = CARD_STYLES[label as keyof typeof CARD_STYLES];

    return (

        <View className={cn("flex-1 items-center rounded-2xl border p-4", styles.bg, styles.border)}>

            <View className={cn("absolute h-8 w-8 top-3 rounded-full", styles.iconBg)} />

            <MaterialIcons
                name={icon}
                size={22}
                color={iconColor}
            />

            <ThemeText className={cn("mt-2 text-xl font-poppins-semibold", styles.text)}>
                {value}
            </ThemeText>

            <ThemeText className={cn("mt-1 text-xs", styles.text)}>
                {label}
            </ThemeText>

        </View>
    );
};

export const QuizPerformanceStats = () => {
    return (
        <View className="mt-4">

            <View className="flex-row gap-3">

                <StatCard
                    icon="check-circle"
                    iconColor="#34D399"
                    value="18"
                    label="Correct"
                />

                <StatCard
                    icon="cancel"
                    iconColor="#EF4444"
                    value="2"
                    label="Wrong"
                />

            </View>

            <View className="mt-3 flex-row gap-3">

                <StatCard
                    icon="track-changes"
                    iconColor="#22D3EE"
                    value="90%"
                    label="Accuracy"
                />

                <StatCard
                    icon="schedule"
                    iconColor="#F59E0B"
                    value="08:34"
                    label="Time"
                />

            </View>

        </View>
    )
}