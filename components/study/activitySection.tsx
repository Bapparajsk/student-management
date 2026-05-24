import { colors } from "@/utils/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import ThemeText from "../ui/ThemeText";
import { AttendanceStudyHoursChartCard } from "./attendanceStudyHoursChartCard";

export const StudyActivitySection = () => {



    return (
        <View className="">
            <AttendanceStudyHoursChartCard />
            <View className="flex-row items-center">
                <View className="w-1/2 pr-2">
                    <View className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-3 overflow-hidden" >
                        <View className="items-start">
                            <View className="mb-1 flex-row items-center gap-1">
                                <MaterialIcons
                                    name="calendar-month"
                                    size={18}
                                    color={colors.warning}
                                />

                                <ThemeText className="font-poppins-semibold" style={{ color: colors.warning }}>
                                    Pending
                                </ThemeText>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="w-1/2 pr-2">
                    <View className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-3 overflow-hidden" >
                        <View className="items-start">
                            <View className="mb-1 flex-row items-center gap-1">
                                <MaterialIcons
                                    name="trending-up"
                                    size={18}
                                    color="#A855F7"
                                />

                                <ThemeText className="font-poppins-semibold" style={{ color: "#A855F7" }}>
                                    AI Productivity
                                </ThemeText>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};