import { colors } from '@/utils/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, View } from 'react-native';
import { Chip, PressableFeedback } from '../hero-ui';
import { Sparkline } from './sparkline';
import ThemeText from './ThemeText';

type SubjectStatus =
    | 'ON_TRACK'
    | 'AHEAD'
    | 'NEEDS_FOCUS'
    | 'AT_RISK';

interface SubjectCardProps {
    subjectId?: string;
    subjectName: string;
    category: string;
    teacherName: string;
    teacherImage: string;
    completedLessons: number;
    totalLessons: number;
    progress: number;
    onPress?: (subjectId?: string) => void;
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
    subjectId = "abc123",
    subjectName,
    category,
    teacherName,
    teacherImage,
    completedLessons,
    totalLessons,
    progress,
    onPress,
}: SubjectCardProps) => {
    const status = getSubjectStatusConfig(
        getSubjectStatus(progress)
    );


    return (
        <PressableFeedback
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4"
            onPress={() => onPress?.(subjectId)}
        >

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
                        <ThemeText className="font-poppins-semibold">
                            {subjectName}
                        </ThemeText>

                        <ThemeText className="text-[10px] uppercase tracking-widest" textColor={colors.textMuted}>
                            {category}
                        </ThemeText>
                    </View>
                </View>

                {/* Status Badge */}
                <Chip style={{
                    backgroundColor: status.bg,
                    borderWidth: 1,
                    borderColor: status.border,
                }}>
                    <View className='flex-row gap-x-1 items-center'>
                        <View
                            className="h-1.5 w-1.5 rounded-full"
                            style={{
                                backgroundColor: status.color,
                            }}
                        />
                        <Chip.Label style={{ color: status.color, fontFamily: "PoppinsLight", fontSize: 10, lineHeight: 15 }}>
                            {status.label.toUpperCase()}
                        </Chip.Label>
                    </View>
                </Chip>
            </View>

            {/* Teacher + Progress */}
            <View className="mb-4 flex-row items-center justify-between">

                <View className="flex-1">
                    <View className="mb-2 flex-row items-center gap-2">

                        <Image
                            source={{ uri: teacherImage }}
                            className="h-6 w-6 rounded-full border border-zinc-700"
                        />

                        <ThemeText className="text-xs" textColor={"#d4d4d8"}>
                            {teacherName}
                        </ThemeText>
                    </View>

                    <ThemeText className="text-xs" textColor={"#9f9fa9"}>
                        {completedLessons}/{totalLessons} Lessons
                    </ThemeText>
                </View>

                {/* Trend Graph */}
                <View className="h-10 w-24">
                    <Sparkline
                        color={status.color}
                        data={[...Array(20)].map(() => Math.floor(Math.random() * 100))}
                        width={100}
                        height={40}
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
                <ThemeText className="text-xs" textColor={"#71717b"}>
                    Progress
                </ThemeText>

                <ThemeText
                    className="text-xs font-poppins-semibold"
                    style={{
                        color: status.color,
                    }}
                >
                    {progress}%
                </ThemeText>
            </View>
        </PressableFeedback>
    );
};