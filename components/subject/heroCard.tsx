import { colors } from '@/utils/theme';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import ThemeText from '../ui/ThemeText';
import { ProgressRing } from '../ui/progressRing';

const progress = 90.96;

export const SemesterProgressCard = () => {
    return (
        <View className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5">

            <ThemeText className="mb-5 text-center text-xl">
                Semester Progress
            </ThemeText>

            {/* Progress Ring */}
            <View className="mb-6 items-center justify-center">
                <ProgressRing
                    progress={progress}
                    linerGradient={["#C4C0FF", "#3CD7FF"]}
                    subtitle={"Complete"}
                    title={{
                        text: `${progress}`,
                        color: '#53eafd',
                    }}
                />
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