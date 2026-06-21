import { View } from "react-native";
import { AiProductivityChartCard } from "./aiProductivityChartCard";
import { AttendanceStudyHoursChartCard } from "./attendanceStudyHoursChartCard";
import { RangingChartCard } from "./rangingChartCard";


export const StudyActivitySection = () => {
    return (
        <View>
            <AttendanceStudyHoursChartCard />
            <View className="flex-row items-center">
                <View className="w-1/2 pr-2">
                    <AiProductivityChartCard />
                </View>
                <View className="w-1/2 pr-2">
                    <RangingChartCard />
                </View>
            </View>
        </View>
    );
};