import { setActiveOption, StudyActivityTimeframe, useStudyActivityStore } from '@/store/study';
import { getOptionByValue } from '@/utils/getOptionByValue';
import { colors } from '@/utils/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Fragment, useState } from 'react';
import { Dimensions, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Button, Select, Separator } from '../hero-ui';
import ThemeText from '../ui/ThemeText';
import AreaChart from '../ui/areaChart';




const screenWidth = Dimensions.get("window").width;

export const analyticsData = {
    Today: {
        studyHoursData: [
            { value: 1, label: '8 AM' },
            { value: 2, label: '10 AM' },
            { value: 3, label: '12 PM' },
            { value: 3, label: '2 PM' },
            { value: 3, label: '4 PM' },
        ],

        attendanceData: [
            { value: 0, label: '8 AM' },
            { value: 1, label: '10 AM' },
            { value: 2, label: '12 PM' },
            { value: 2, label: '2 PM' },
            { value: 3, label: '4 PM' },
        ],
    },

    'Last Week': {
        studyHoursData: [
            { value: 4, label: 'Mon' },
            { value: 5, label: 'Tue' },
            { value: 3, label: 'Wed' },
            { value: 6, label: 'Thu' },
            { value: 5, label: 'Fri' },
        ],

        attendanceData: [
            { value: 5, label: 'Mon' },
            { value: 4, label: 'Tue' },
            { value: 5, label: 'Wed' },
            { value: 4, label: 'Thu' },
            { value: 5, label: 'Fri' },
        ],
    },

    'Last Month': {
        studyHoursData: [
            { value: 22, label: 'Week 1' },
            { value: 26, label: 'Week 2' },
            { value: 24, label: 'Week 3' },
            { value: 100, label: 'Week 4' },
        ],

        attendanceData: [
            { value: 24, label: 'Week 1' },
            { value: 23, label: 'Week 2' },
            { value: 25, label: 'Week 3' },
            { value: 10, label: 'Week 4' },
        ],
    },
};

const translateXOptions = [
    { label: 'Today', value: 12 },
    { label: 'Last Week', value: 10 },
    { label: 'Last Month', value: 20 },
];


const spacingOptions = [
    { label: 'Today', value: ((screenWidth - 80) / 5) },
    { label: 'Last Week', value: ((screenWidth - 80) / 5) },
    { label: 'Last Month', value: ((screenWidth - 80) / 4) },
]

export const AttendanceStudyHoursChartCard = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const options = useStudyActivityStore(s => s.options);
    const activeOption = useStudyActivityStore(s => s.activeOption);


    return (
        <>

            <View className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-5 overflow-hidden">

                {/* Header */}
                <View className="mb-5 flex-row items-center justify-between">
                    <ThemeText className="text-xl font-poppins-semibold">
                        Study Activity
                    </ThemeText>
                    <Button variant="outline" onPress={() => setIsOpen((prev) => !prev)} >
                        <ThemeText className="text-xs text-zinc-400">
                            {activeOption}
                        </ThemeText>

                        <Animated.View>
                            <MaterialIcons
                                name="keyboard-arrow-down"
                                size={16}
                                color="#A1A1AA"
                            />
                        </Animated.View>
                    </Button>
                </View>

                {/* Stats */}
                <View className="mb-7 flex-row flex-wrap justify-start gap-x-5 gap-y-4">

                    {/* Completed */}
                    <View className="items-center">
                        <View className="mb-1 flex-row items-center gap-1">
                            <MaterialIcons
                                name="check-circle-outline"
                                size={12}
                                color="#94A3B8"
                            />

                            <ThemeText className="text-[10px] text-zinc-400">
                                Attendance
                            </ThemeText>
                        </View>

                        <ThemeText className="text-lg font-poppins-semibold">
                            24
                        </ThemeText>
                    </View>

                    {/* Study Hours */}
                    <View className="items-center">
                        <View className="mb-1 flex-row items-center gap-1">
                            <ThemeText className="text-[10px] text-yellow-400">
                                ✨
                            </ThemeText>

                            <ThemeText className="text-[10px] text-zinc-400">
                                Study Hours
                            </ThemeText>
                        </View>

                        <ThemeText className="text-lg font-poppins-semibold">
                            12.5h
                        </ThemeText>
                    </View>

                </View>

                {/* Chart */}
                <View className="w-full">
                    <Chart activeOption={activeOption} />

                    {/* Current Week */}
                    <View className="mt-3 flex-row items-center justify-between px-1">
                        <ThemeText className="text-[11px] text-zinc-500">
                            12 May - 18 May
                        </ThemeText>

                        <View className="flex-row items-center gap-1">
                            <View className="h-2 w-2 rounded-full bg-sky-400" />

                            <ThemeText className="text-[11px] text-zinc-400">
                                Current Week
                            </ThemeText>
                        </View>
                    </View>
                </View>
            </View >
            <Select
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                value={{ label: activeOption, value: activeOption }}
                onValueChange={(option) => setActiveOption(option?.label as StudyActivityTimeframe)}
                presentation="bottom-sheet"
            >
                <Select.Portal>
                    <Select.Overlay />
                    <Select.Content presentation="bottom-sheet">
                        <Select.ListLabel className="mb-2 font-poppins-medium">Choose a state</Select.ListLabel>
                        {options.map((state, index) => (
                            <Fragment key={state.label}>
                                <Select.Item value={state.label} label={state.label}>
                                    {({ value, isSelected }) => (
                                        <View className="flex-row items-center gap-2 px-3 py-1">
                                            <View style={{ height: 8, width: 8, borderRadius: 9999, backgroundColor: isSelected ? '#0ea5e9' : 'transparent' }} />

                                            <ThemeText className="text-xs">
                                                {value}
                                            </ThemeText>
                                        </View>
                                    )}
                                </Select.Item>
                                {index < options.length - 1 && <Separator />}
                            </Fragment>
                        ))}
                    </Select.Content>
                </Select.Portal>
            </Select>
        </>
    )
}

function Chart({ activeOption }: { activeOption: StudyActivityTimeframe }) {

    const studyHours = analyticsData[activeOption].studyHoursData;
    const attendance = analyticsData[activeOption].attendanceData;

    const maxStudyHours = Math.max(...studyHours.map(d => d.value));
    const maxAttendance = Math.max(...attendance.map(d => d.value));

    const maxValue = Math.max(maxStudyHours, maxAttendance) + 2;

    const dataColor = studyHours[0].value > studyHours[studyHours.length - 1].value ? colors.error : colors.graph.studyHours;
    const data2Color = attendance[0].value > attendance[attendance.length - 1].value ? colors.error : colors.graph.attendance;

    return (
        <AreaChart
            key={activeOption}
            data={
                analyticsData[activeOption]
                    .studyHoursData
            }
            data2={
                analyticsData[activeOption]
                    .attendanceData
            }

            // colors
            color={dataColor}
            color2={data2Color}

            startFillColor={dataColor}
            endFillColor={dataColor}

            startFillColor2={data2Color}
            endFillColor2={data2Color}

            dataPointsColor={dataColor}
            dataPointsColor2={data2Color}

            maxValue={maxValue}
            initialSpacing={0}
            xAxisLabelTextStyle={{
                transform: [{ translateX: getOptionByValue(translateXOptions, activeOption) ?? 10 }],
            }}
            width={screenWidth - 80}
            spacing={getOptionByValue(spacingOptions, activeOption) ?? spacingOptions[0].value}
        />
    );
}