import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

import ThemeText from '../ui/ThemeText';
import { ProgressRing } from '../ui/progressRing';

type QuizStatsProps = {
    iconName: React.ComponentProps<typeof MaterialIcons>["name"];
    iconColor: string;
    title: string;
    value: string | number;
}

const QuizStats = ({ iconName, iconColor, title, value }: QuizStatsProps) => {
    return (
        <View className="items-center">
            <MaterialIcons
                name={iconName}
                size={18}
                color={iconColor}
            />

            <ThemeText className="mt-1 font-poppins-semibold">
                {value}
            </ThemeText>

            <ThemeText className="text-[10px] text-zinc-500">
                {title}
            </ThemeText>
        </View>
    );
}

export const QuizPerformanceHero = () => {
    return (
        <View className="overflow-hidden rounded-[28px] border border-white/10 bg-white/4 py-4 px-3">

            {/* Glow */}
            <View className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10" />
            <View className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-violet-500/10" />

            <View className="absolute top-3 right-3 rounded-full bg-emerald-500/10 px-3 py-1">
                <ThemeText className="text-[10px] leading-0.5 text-emerald-400">
                    TOP 10%
                </ThemeText>
            </View>

            <View className="flex-row items-center">

                {/* Mastery */}
                <ProgressRing
                    progress={20}
                    size='sm'
                    subtitle={"Mastery"}
                    linerGradient={["#C4C0FF", "#3CD7FF"]}
                />

                {/* Content */}
                <View className="ml-4 flex-1">

                    {/* Header */}
                    <View className="flex-row items-center justify-between">

                        <View>
                            <ThemeText className="text-lg font-poppins-semibold">
                                Advanced Learner
                            </ThemeText>

                            <View className="mt-1 flex-row items-center">
                                <MaterialIcons
                                    name="trending-up"
                                    size={14}
                                    color="#22C55E"
                                />

                                <ThemeText className="ml-1 text-xs text-emerald-400">
                                    +7% this month
                                </ThemeText>
                            </View>
                        </View>

                    </View>

                    {/* Stats */}
                    <View className="mt-4 flex-row justify-between">
                        <QuizStats
                            iconName="stars"
                            iconColor="#FACC15"
                            title="XP"
                            value="29.5k"
                        />
                        <QuizStats
                            iconName="local-fire-department"
                            iconColor="#FB923C"
                            title="Streak"
                            value="15"
                        />

                        <QuizStats
                            iconName="emoji-events"
                            iconColor="#FACC15"
                            title="Rank"
                            value="#12"
                        />
                        <QuizStats
                            iconName="verified"
                            iconColor="#22D3EE"
                            title="Accuracy"
                            value="91%"
                        />
                    </View>

                </View>

            </View>

        </View>
    );
};