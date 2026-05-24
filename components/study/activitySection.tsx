import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
// import { Select } from "../hero-ui";
import ThemeText from '../ui/ThemeText';


const screenWidth = Dimensions.get("window").width;

const studyHoursData = [
    { value: 4, label: "Mon" },
    { value: 6, label: "Tue" },
    { value: 5, label: "Wed" },
    { value: 8, label: "Thu" },
    { value: 7, label: "Fri" },
];
const attendanceData = [
    { value: 2, label: "Mon" },
    { value: 1, label: "Tue" },
    { value: 5, label: "Wed" },
    { value: 2, label: "Thu" },
    { value: 1, label: "Fri" },
];

type SelectOption = {
    value: string;
    label: string;
};

const maxStudyHours = Math.max(...studyHoursData.map(d => d.value));
const maxAttendance = Math.max(...attendanceData.map(d => d.value));
const maxValue = Math.max(maxStudyHours, maxAttendance) + 2; // Adding some padding

export const StudyActivityCard = () => {

    const [value, setValue] = useState<SelectOption | undefined>();

    return (
        <View className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-5 overflow-hidden">

            {/* Header */}
            <View className="mb-5 flex-row items-center justify-between">
                <ThemeText className="text-xl font-poppins-semibold">
                    Study Activity
                </ThemeText>


                {/* <Button variant="ghost" onPress={() => setIsOpen(true)}>
                    <ThemeText className="text-xs text-zinc-400">
                        Last Week
                    </ThemeText>

                    <MaterialIcons
                        name="keyboard-arrow-down"
                        size={16}
                        color="#A1A1AA"
                    />
                </Button> */}

                {/* <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
                    <Dialog.Trigger asChild>
                        <Button variant="primary">Open Dialog</Button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                            <Dialog.Close variant="ghost" />
                            <View className="mb-5 gap-1.5">
                                <Dialog.Title>Confirm Action</Dialog.Title>
                                <Dialog.Description>
                                    Are you sure you want to proceed with this action? This cannot be
                                    undone.
                                </Dialog.Description>
                            </View>
                            <View className="flex-row justify-end gap-3">
                                <Button variant="ghost" size="sm" onPress={() => setIsOpen(false)}>
                                    Cancel
                                </Button>
                                <Button size="sm">Confirm</Button>
                            </View>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog> */}

                {/* <Select presentation='bottom-sheet'>
                    <Select.Trigger>
                        <Select.Value placeholder="Choose an option" />
                        <Select.TriggerIndicator />
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Overlay />
                        <Select.Content presentation="bottom-sheet">
                            <Select.Item value="apple" label="Apple" />
                            <Select.Item value="orange" label="Orange" />
                            <Select.Item value="banana" label="Banana" />
                        </Select.Content>
                    </Select.Portal>
                </Select> */}

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

                {/* Pending */}
                {/* <View className="items-center">
                    <View className="mb-1 flex-row items-center gap-1">
                        <MaterialIcons
                            name="calendar-month"
                            size={12}
                            color="#94A3B8"
                        />

                        <ThemeText className="text-[10px] text-zinc-400">
                            Pending
                        </ThemeText>
                    </View>

                    <Text className="text-lg font-bold text-white">
                        3
                    </Text>
                </View> */}

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

                {/* Productivity */}
                {/* <View className="items-center">
                    <View className="mb-1 flex-row items-center gap-1">
                        <MaterialIcons
                            name="trending-up"
                            size={12}
                            color="#A855F7"
                        />

                        <ThemeText className="text-[10px] text-zinc-400">
                            AI Productivity
                        </ThemeText>
                    </View>

                    <ThemeText className="text-lg font-poppins-semibold">
                        Top 5%
                    </ThemeText>
                </View> */}
            </View>

            {/* Chart */}
            <View className="w-full">
                <LineChart
                    areaChart
                    curved
                    data={studyHoursData}
                    data2={attendanceData}
                    height={130}
                    width={screenWidth - 80}
                    hideRules={false}
                    rulesColor="rgba(255,255,255,0.06)"
                    yAxisColor="transparent"
                    xAxisColor="rgba(255,255,255,0.08)"
                    color="#38BDF8"
                    color2="#22C55E"
                    dataPointsColor='#38BDF8'
                    dataPointsColor2='#22C55E'
                    startFillColor="#38BDF8"
                    endFillColor="#38BDF8"
                    startFillColor2="#22C55E"
                    endFillColor2="#22C55E"
                    startOpacity={0.22}
                    endOpacity={0.02}
                    thickness={3}
                    spacing={65}
                    initialSpacing={10}
                    endSpacing={10}
                    hideDataPoints
                    isAnimated
                    noOfSections={4}
                    yAxisTextStyle={{
                        color: "#71717A",
                        fontSize: 10,
                        fontFamily: "PoppinsMedium",
                    }}

                    xAxisLabelTextStyle={{
                        color: "#A1A1AA",
                        fontSize: 11,
                        fontFamily: "PoppinsMedium",
                    }}
                    maxValue={maxValue - 2}
                />

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
        </View>
    );
};