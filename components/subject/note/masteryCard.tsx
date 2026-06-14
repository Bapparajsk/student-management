import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

import { ProgressRing } from '@/components/ui/progressRing';
import ThemeText from '@/components/ui/ThemeText';
import { colors } from '@/utils/theme';

interface MasteryCardProps {
    progress?: number;
    topics?: number;
    mastered?: number;
    accuracy?: number;
}

const getLevel = (progress: number) => {
    if (progress >= 90)
        return {
            label: 'Expert',
            color: '#00D5BE',
        };

    if (progress >= 75)
        return {
            label: 'Advanced',
            color: '#3B82F6',
        };

    if (progress >= 50)
        return {
            label: 'Intermediate',
            color: '#FACC15',
        };

    return {
        label: 'Beginner',
        color: '#EF4444',
    };
};

export const StudyProgressCard = ({
    progress = 74,
    topics = 24,
    mastered = 18,
    accuracy = 92,
}: MasteryCardProps) => {

    const level = getLevel(progress);

    return (
        <View className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5">

            {/* Header */}
            <View className="mb-4 flex-row items-center justify-between">
                <ThemeText className="text-xl font-poppins-semibold">
                    Study Progress
                </ThemeText>

                <View
                    className="rounded-full px-3 py-1"
                    style={{
                        backgroundColor: `${level.color}20`,
                    }}
                >
                    <ThemeText
                        style={{
                            color: level.color,
                            lineHeight: 12,
                        }}
                        className='text-[10px]'
                    >
                        {level.label}
                    </ThemeText>
                </View>
            </View>

            {/* Content */}
            <View className="flex-row items-center gap-5">
                <ProgressRing
                    size="sm"
                    progress={progress}
                    linerGradient={level.color as any}
                    subtitle={"Complete"}
                    title={{ text: `${progress}`, color: level.color }}
                />


                {/* Stats */}
                <View className="flex-1 gap-3">

                    <Stat
                        icon="menu-book"
                        label="Topics"
                        value={topics.toString()}
                        color="#818CF8"
                    />

                    <Stat
                        icon="task-alt"
                        label="Mastered"
                        value={mastered.toString()}
                        color="#00D5BE"
                    />

                    <Stat
                        icon="psychology"
                        label="Accuracy"
                        value={`${accuracy}%`}
                        color="#FACC15"
                    />
                </View>
            </View>

            {/* Footer */}
            <View className="mt-5 rounded-2xl border border-white/5 bg-white/3 p-3">
                <ThemeText className="text-xs" textColor={colors.textMuted}>
                    AI Recommendation
                </ThemeText>

                <ThemeText numberOfLines={5} className="mt-1 text-xs" textColor={colors.textSecondary}>
                    Review 2 weak topics today to reach
                    80% mastery this week.
                </ThemeText>
            </View>
        </View>
    );
};

function Stat({
    icon,
    label,
    value,
    color,
}: {
    icon: any;
    label: string;
    value: string;
    color: string;
}) {
    return (
        <View className="flex-row items-center gap-3">
            <MaterialIcons
                name={icon}
                size={18}
                color={color}
            />

            <View className="flex-1">
                <ThemeText className="text-[10px]" textColor={colors.textMuted}>
                    {label}
                </ThemeText>
            </View>

            <ThemeText className="font-semibold text-xs">
                {value}
            </ThemeText>
        </View>
    );
}