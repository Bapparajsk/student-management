import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { ProgressRing } from '../ui/progressRing';
import ThemeText from '../ui/ThemeText';

const gpaData = [
    { semester: 'S1', value: 8.2 },
    { semester: 'S2', value: 8.5 },
    { semester: 'S3', value: 8.1 },
    { semester: 'S4', value: 9.0 },
    { semester: 'S5', value: 0 },
    { semester: 'S6', value: 0 },
    { semester: 'S7', value: 0 },
    { semester: 'S8', value: 0 },
];
function MiniBarChart() {
    const max = Math.max(
        ...gpaData.map(item => item.value)
    );

    return (
        <View className="mt-4">
            <View className="h-28 flex-row items-end justify-between">
                {gpaData.map(item => {
                    const height =
                        item.value > 0
                            ? (item.value / max) * 80
                            : 8;

                    return (
                        <View
                            key={item.semester}
                            className="items-center"
                        >
                            {/* GPA Value */}
                            <ThemeText
                                className={`mb-2 text-[10px] font-semibold ${item.value > 0
                                    ? 'text-cyan-400'
                                    : 'text-zinc-600'
                                    }`}
                            >
                                {item.value > 0
                                    ? item.value.toFixed(1)
                                    : '--'}
                            </ThemeText>

                            {/* Bar */}
                            <View
                                className="rounded-t-2xl"
                                style={{
                                    height,
                                    borderWidth:
                                        item.value === 0 ? 1 : 0,
                                    borderColor: '#22D3EE40',
                                    width: gpaData.length === 8 ? 35 : 45,
                                }}
                            >
                                {item.value > 0 && (
                                    <LinearGradient
                                        colors={[
                                            '#67E8F9', // Top (light)
                                            '#06B6D4', // Middle
                                            '#155E75', // Bottom (dark)
                                        ]}
                                        start={{
                                            x: 0.5,
                                            y: 0,
                                        }}
                                        end={{
                                            x: 0.5,
                                            y: 1,
                                        }}
                                        className="absolute inset-0"
                                        style={{
                                            borderTopLeftRadius: 14,
                                            borderTopRightRadius: 14,
                                        }}
                                    />
                                )}
                            </View>

                            {/* Semester */}
                            <ThemeText className="mt-2 text-[11px] text-zinc-500">
                                {item.semester}
                            </ThemeText>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

export const DegreeProgressCard = () => {
    return (
        <View className="rounded-[28px] border border-white/10 bg-white/4 p-5 mt-3">

            {/* Header */}
            <View className="flex-row items-center justify-between">
                <View>
                    <ThemeText className="text-lg font-poppins-semibold">
                        Degree Progress
                    </ThemeText>

                    <ThemeText className="text-xs text-zinc-500">
                        Academic Journey
                    </ThemeText>
                </View>

                <View className="rounded-full bg-cyan-400/10 px-3 py-1">
                    <ThemeText className="text-[12px] leading-snug font-semibold text-cyan-400">
                        68% Complete
                    </ThemeText>
                </View>
            </View>

            {/* Main Section */}
            <View className="mt-6 flex-row items-center">

                {/* Progress Ring */}
                <ProgressRing
                    size='sm'
                    progress={86}
                    linerGradient={['#22D3EE', '#818CF8']}

                />

                {/* Stats */}
                <View className="ml-6 flex-1 gap-4">

                    <View className="flex-row items-center">
                        <View className="h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15">
                            <MaterialIcons
                                name="school"
                                size={18}
                                color="#818CF8"
                            />
                        </View>

                        <View className="ml-3">
                            <ThemeText className="text-xl font-poppins-semibold">
                                4.0
                            </ThemeText>

                            <ThemeText className="text-xs text-zinc-500">
                                Current CGPA
                            </ThemeText>
                        </View>
                    </View>

                    <View className="flex-row items-center">
                        <View className="h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15">
                            <MaterialIcons
                                name="schedule"
                                size={18}
                                color="#22D3EE"
                            />
                        </View>

                        <View className="ml-3">
                            <ThemeText className="text-xl font-poppins-semibold">
                                1.5
                            </ThemeText>

                            <ThemeText className="text-xs text-zinc-500">
                                Years Left
                            </ThemeText>
                        </View>
                    </View>

                </View>
            </View>

            {/* GPA Trend */}
            <View className="mt-6">
                <View className="mb-3 flex-row items-center justify-between">
                    <ThemeText>
                        GPA Trend
                    </ThemeText>

                    <ThemeText className="text-xs text-cyan-400">
                        +0.8 this year
                    </ThemeText>
                </View>

                <MiniBarChart />
            </View>

        </View>
    );
}