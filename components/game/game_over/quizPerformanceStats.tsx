import ThemeText from '@/components/ui/ThemeText';
import { useQuizResultStore } from '@/store/quizGame/quizResultStore';
import { cn } from '@/utils/cn';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

const CARD_STYLES = {
    Correct: {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        iconBg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
    },
    Wrong: {
        bg: 'bg-red-500/10',
        border: 'border-red-500/20',
        iconBg: 'bg-red-500/10',
        text: 'text-red-400',
    },
    Accuracy: {
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        iconBg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
    },
    Time: {
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
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

        <View
            className={cn(
                "flex-1 flex-row items-center rounded-xl border px-3 py-2.5",
                styles.bg,
                styles.border
            )}
        >
            <View
                className={cn(
                    "h-8 w-8 items-center justify-center rounded-full",
                    styles.iconBg
                )}
            >
                <MaterialIcons
                    name={icon}
                    size={18}
                    color={iconColor}
                />
            </View>

            <View className="ml-3 flex-1">
                <ThemeText
                    className={cn(
                        "text-lg font-poppins-semibold leading-5",
                        styles.text
                    )}
                >
                    {value}
                </ThemeText>

                <ThemeText className="text-[11px] text-zinc-300">
                    {label}
                </ThemeText>
            </View>
        </View>
    );
};

export const QuizPerformanceStats = () => {

    const score = useQuizResultStore(state => state.score);
    const totalQuestions = useQuizResultStore(state => state.totalQuestions);

    return (
        <View className="mt-3">

            <View className="flex-row gap-3">

                <StatCard
                    icon="check-circle"
                    iconColor="#34D399"
                    value={String(score)}
                    label="Correct"
                />

                <StatCard
                    icon="cancel"
                    iconColor="#EF4444"
                    value={String(totalQuestions - score)}
                    label="Wrong"
                />

            </View>

            <View className="mt-3 flex-row gap-3">

                <StatCard
                    icon="track-changes"
                    iconColor="#22D3EE"
                    value={String(Math.round((score / totalQuestions) * 100)) + '%'}
                    label="Accuracy"
                />

                <StatCard
                    icon="schedule"
                    iconColor="#F59E0B"
                    value={String(Math.floor(Math.random() * 5) + 1) + ' min'}
                    label="Time"
                />

            </View>

        </View>
    )
}