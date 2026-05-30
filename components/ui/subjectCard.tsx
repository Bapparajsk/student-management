import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Sparkline } from './sparkline';

type SubjectStatus =
    | 'ON_TRACK'
    | 'AHEAD'
    | 'NEEDS_FOCUS'
    | 'AT_RISK';

interface SubjectCardProps {
    subjectName: string;
    category: string;
    teacherName: string;
    teacherImage: string;
    completedLessons: number;
    totalLessons: number;
    progress: number;
}

const getSubjectStatus = (
    progress: number
): SubjectStatus => {
    if (progress >= 85) return 'AHEAD';
    if (progress >= 60) return 'ON_TRACK';
    if (progress >= 40) return 'NEEDS_FOCUS';

    return 'AT_RISK';
};

const getSubjectStatusConfig = (
    status: SubjectStatus
) => {
    switch (status) {
        case 'AHEAD':
            return {
                label: 'Ahead of Schedule',
                color: '#3B82F6',
                bg: '#3B82F620',
                border: '#3B82F640',
            };

        case 'ON_TRACK':
            return {
                label: 'On Track',
                color: '#00D5BE',
                bg: '#00D5BE20',
                border: '#00D5BE40',
            };

        case 'NEEDS_FOCUS':
            return {
                label: 'Needs Focus',
                color: '#FACC15',
                bg: '#FACC1520',
                border: '#FACC1540',
            };

        case 'AT_RISK':
            return {
                label: 'At Risk',
                color: '#EF4444',
                bg: '#EF444420',
                border: '#EF444440',
            };
    }
};

export const SubjectProgressCard = ({
    subjectName,
    category,
    teacherName,
    teacherImage,
    completedLessons,
    totalLessons,
    progress,
}: SubjectCardProps) => {
    const status = getSubjectStatusConfig(
        getSubjectStatus(progress)
    );

    console.log([...Array(20)].map(() => Math.floor(Math.random() * 100)));

    return (
        <View className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">

            {/* Header */}
            <View className="mb-4 flex-row items-start justify-between">
                <View className="flex-row items-center gap-3">

                    <View className="h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20">
                        <MaterialIcons
                            name="code"
                            size={20}
                            color="#818CF8"
                        />
                    </View>

                    <View>
                        <Text className="text-base font-bold text-white">
                            {subjectName}
                        </Text>

                        <Text className="text-[10px] uppercase tracking-widest text-zinc-500">
                            {category}
                        </Text>
                    </View>
                </View>

                {/* Status Badge */}
                <View
                    className="flex-row items-center gap-1 rounded-full px-2.5 py-1"
                    style={{
                        backgroundColor: status.bg,
                        borderWidth: 1,
                        borderColor: status.border,
                    }}
                >
                    <View
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                            backgroundColor: status.color,
                        }}
                    />

                    <Text
                        style={{
                            color: status.color,
                            fontSize: 10,
                            fontWeight: '700',
                        }}
                    >
                        {status.label.toUpperCase()}
                    </Text>
                </View>
            </View>

            {/* Teacher + Progress */}
            <View className="mb-4 flex-row items-center justify-between">

                <View className="flex-1">
                    <View className="mb-2 flex-row items-center gap-2">

                        <Image
                            source={{ uri: teacherImage }}
                            className="h-6 w-6 rounded-full border border-zinc-700"
                        />

                        <Text className="text-xs font-medium text-zinc-300">
                            {teacherName}
                        </Text>
                    </View>

                    <Text className="text-xs text-zinc-400">
                        {completedLessons}/{totalLessons} Lessons
                    </Text>
                </View>

                {/* Trend Graph */}
                <View className="h-10 w-24">
                    <Sparkline
                        color={status.color}
                        data={[...Array(20)].map(() => Math.floor(Math.random() * 100))}
                    />
                </View>
            </View>

            {/* Progress Bar */}
            <View className="mb-2 h-2 overflow-hidden rounded-full bg-zinc-700/50">
                <View
                    className="h-full rounded-full"
                    style={{
                        width: `${progress}%`,
                        backgroundColor: status.color,
                    }}
                />
            </View>

            <View className="flex-row items-center justify-between">
                <Text className="text-xs text-zinc-500">
                    Progress
                </Text>

                <Text
                    className="text-xs font-semibold"
                    style={{
                        color: status.color,
                    }}
                >
                    {progress}%
                </Text>
            </View>
        </View>
    );
};