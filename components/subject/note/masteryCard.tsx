import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import Animated, {
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

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
    const radius = 42;
    const circumference = 2 * Math.PI * radius;

    const level = getLevel(progress);

    const progressAnimated = useSharedValue(0);

    useEffect(() => {
        progressAnimated.value = withTiming(progress, {
            duration: 1200,
        });
    }, [progress]);

    const animatedProps = useAnimatedProps(() => {
        const strokeDashoffset =
            circumference -
            (circumference * progressAnimated.value) / 100;

        return {
            strokeDashoffset,
        };
    });

    return (
        <View className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5">

            {/* Header */}
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-xl font-bold text-white">
                    Study Progress
                </Text>

                <View
                    className="rounded-full px-3 py-1"
                    style={{
                        backgroundColor: `${level.color}20`,
                    }}
                >
                    <Text
                        style={{
                            color: level.color,
                            fontSize: 11,
                            fontWeight: '700',
                        }}
                    >
                        {level.label}
                    </Text>
                </View>
            </View>

            {/* Content */}
            <View className="flex-row items-center gap-5">

                {/* Progress Ring */}
                <View className="relative">
                    <Svg
                        width={100}
                        height={100}
                        viewBox="0 0 100 100"
                    >
                        <Circle
                            cx="50"
                            cy="50"
                            r={radius}
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="8"
                            fill="none"
                        />

                        <AnimatedCircle
                            cx="50"
                            cy="50"
                            r={radius}
                            stroke={level.color}
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            animatedProps={animatedProps}
                            transform="rotate(-90, 50, 50)"
                        />
                    </Svg>

                    <View className="absolute inset-0 items-center justify-center">
                        <Text className="text-2xl font-bold text-white">
                            {progress}%
                        </Text>

                        <Text className="text-[10px] text-zinc-500">
                            Mastery
                        </Text>
                    </View>
                </View>

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
            <View className="mt-5 rounded-2xl border border-white/5 bg-white/[0.03] p-3">
                <Text className="text-xs text-zinc-500">
                    AI Recommendation
                </Text>

                <Text className="mt-1 text-sm text-zinc-300">
                    Review 2 weak topics today to reach
                    80% mastery this week.
                </Text>
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
                <Text className="text-xs text-zinc-500">
                    {label}
                </Text>
            </View>

            <Text className="font-bold text-white">
                {value}
            </Text>
        </View>
    );
}