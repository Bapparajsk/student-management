import { colors } from '@/utils/theme';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import Svg, {
    Circle,
    Defs,
    LinearGradient,
    Stop,
} from 'react-native-svg';
import ThemeText from '../ui/ThemeText';

const progress = 90.96;

const radius = 45;
const circumference = 2 * Math.PI * radius;
const strokeDashoffset =
    circumference -
    (progress / 100) * circumference;

export const SemesterProgressCard = () => {
    return (
        <View className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5">

            <ThemeText className="mb-5 text-center text-xl">
                Semester Progress
            </ThemeText>

            {/* Progress Ring */}
            <View className="mb-6 items-center justify-center">
                <View className="relative h-40 w-40 items-center justify-center">

                    <Svg
                        width={160}
                        height={160}
                        viewBox="0 0 100 100"
                    >
                        <Defs>
                            <LinearGradient
                                id="progressGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <Stop
                                    offset="0%"
                                    stopColor="#C4C0FF"
                                />
                                <Stop
                                    offset="100%"
                                    stopColor="#3CD7FF"
                                />
                            </LinearGradient>
                        </Defs>

                        {/* Background Ring */}
                        <Circle
                            cx="50"
                            cy="50"
                            r={radius}
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="8"
                            fill="none"
                        />

                        {/* Progress Ring */}
                        <Circle
                            cx="50"
                            cy="50"
                            r={radius}
                            stroke="url(#progressGradient)"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            transform="rotate(-90, 50, 50)"
                        />
                    </Svg>

                    {/* Center */}
                    <View className="absolute items-center">
                        <ThemeText className="text-3xl font-poppins-semibold" textColor='#53eafd'>
                            {progress}%
                        </ThemeText>

                        <ThemeText className="text-xs" textColor={colors.textSecondary}>
                            Complete
                        </ThemeText>
                    </View>
                </View>
            </View>

            {/* Stats */}
            <View className="flex-row flex-wrap justify-between gap-2">

                <StatCard
                    icon="school"
                    color="#818CF8"
                    value="3.84"
                    label="CGPA"
                />

                <StatCard
                    icon="how-to-reg"
                    color="#00D5BE"
                    value="88%"
                    label="Attendance"
                />

                <StatCard
                    icon="schedule"
                    color="#FACC15"
                    value="126h"
                    label="Study"
                />

                <StatCard
                    icon="emoji-events"
                    color="#EC4899"
                    value="#12"
                    label="Rank"
                />
            </View>
        </View>
    );
};

function StatCard({
    icon,
    color,
    value,
    label,
}: {
    icon: any;
    color: string;
    value: string;
    label: string;
}) {
    return (
        <View className="min-w-18 flex-1 items-center rounded-2xl border border-white/5 bg-white/3 p-3">
            <MaterialIcons
                name={icon}
                size={20}
                color={color}
            />

            <ThemeText className="mt-1 text-sm">
                {value}
            </ThemeText>

            <ThemeText className="text-[10px]" textColor={colors.textMuted}>
                {label}
            </ThemeText>
        </View>
    );
}