import { colors } from '@/utils/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Chip, PressableFeedback } from '../hero-ui';
import { HeaderTitle } from '../ui/headerTitle';
import ThemeText from '../ui/ThemeText';

const assignments = [
    {
        id: 1,
        title: 'Linear Algebra Set 4',
        subject: 'Mathematics',
        due: 'Tomorrow',
        progress: 80,
        status: 'urgent',
    },
    {
        id: 2,
        title: 'OS Project Proposal',
        subject: 'Computer Science',
        due: 'Friday',
        progress: 45,
        status: 'week',
    },
];

const getStatus = (status: string) => {
    switch (status) {
        case 'urgent':
            return {
                bg: '#EF444420',
                border: '#EF444440',
                text: '#EF4444',
                label: 'Due Tomorrow',
            };

        case 'week':
            return {
                bg: '#FACC1520',
                border: '#FACC1540',
                text: '#FACC15',
                label: 'Due This Week',
            };

        default:
            return {
                bg: '#00D5BE20',
                border: '#00D5BE40',
                text: '#00D5BE',
                label: 'Completed',
            };
    }
};

export const AssignmentsCard = () => {
    return (
        <View className="rounded-3xl border border-white/10 bg-white/5 p-4 mt-3">
            {/* Header */}

            <HeaderTitle
                leftText="Assignments"
                rightText='see all'
                rightTextColor="#22D3EE"
            />

            <View className="gap-4">
                {assignments.map(item => {
                    const status = getStatus(item.status);

                    return (
                        <View
                            key={item.id}
                            className="rounded-2xl border border-white/5 bg-zinc-900/40 p-4"
                        >
                            {/* Assignment Header */}
                            <View className="mb-3 flex-row items-start justify-between">
                                <View className="flex-1">
                                    <ThemeText className="font-poppins-medium">
                                        {item.title}
                                    </ThemeText>

                                    <ThemeText className="mt-1 text-xs" textColor={colors.textSecondary}>
                                        {item.subject}
                                    </ThemeText>
                                </View>

                                <Chip style={{
                                    backgroundColor: status.bg,
                                    borderWidth: 1,
                                    borderColor: status.border,
                                }}>
                                    <View className='flex-row gap-x-1 items-center'>
                                        <Chip.Label style={{ color: status.text, fontFamily: "PoppinsLight", fontSize: 10, lineHeight: 15 }}>
                                            {status.label.toUpperCase()}
                                        </Chip.Label>
                                    </View>
                                </Chip>
                            </View>

                            {/* Progress */}
                            <View className="mb-2">
                                <View className="mb-2 flex-row justify-between">
                                    <ThemeText className="text-xs text-zinc-400">
                                        Completion
                                    </ThemeText>

                                    <ThemeText
                                        className="text-xs font-semibold"
                                        style={{
                                            color:
                                                item.progress >= 70
                                                    ? '#00D5BE'
                                                    : '#FACC15',
                                        }}
                                    >
                                        {item.progress}%
                                    </ThemeText>
                                </View>

                                <View className="h-2 overflow-hidden rounded-full bg-zinc-800">
                                    <View
                                        className="h-full rounded-full"
                                        style={{
                                            width: `${item.progress}%`,
                                            backgroundColor:
                                                item.progress >= 70
                                                    ? '#00D5BE'
                                                    : '#FACC15',
                                        }}
                                    />
                                </View>
                            </View>

                            {/* AI Actions */}
                            <View className="mt-4 flex-row flex-wrap gap-2">
                                <PressableFeedback className="flex-row items-center gap-1 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2">
                                    <MaterialIcons
                                        name="psychology"
                                        size={14}
                                        color="#22D3EE"
                                    />

                                    <ThemeText className="text-xs font-semibold text-cyan-400">
                                        Explain
                                    </ThemeText>
                                </PressableFeedback>

                                <PressableFeedback className="flex-row items-center gap-1 rounded-xl border border-violet-400/20 bg-violet-400/10 px-3 py-2">
                                    <MaterialIcons
                                        name="description"
                                        size={14}
                                        color="#A78BFA"
                                    />

                                    <ThemeText className="text-xs font-semibold text-violet-400">
                                        Notes
                                    </ThemeText>
                                </PressableFeedback>

                                <PressableFeedback className="flex-row items-center gap-1 rounded-xl border border-amber-400/20 bg-amber-400/10 px-3 py-2">
                                    <MaterialIcons
                                        name="quiz"
                                        size={14}
                                        color="#FACC15"
                                    />

                                    <ThemeText className="text-xs font-semibold text-amber-400">
                                        Quiz
                                    </ThemeText>
                                </PressableFeedback>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};