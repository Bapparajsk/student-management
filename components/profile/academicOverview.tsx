import { View } from 'react-native';
import { HeaderTitle } from '../ui/headerTitle';
import { StatCard } from './AcademicInfoRow';


export const AcademicOverview = () => {
    return (
        <View className="mt-4">
            {/* <Text className="mb-4 text-lg font-bold text-white">
                Academic Overview
            </Text> */}
            <HeaderTitle
                leftText="Academic Overview"
            />

            <View className="flex-row gap-3">
                <StatCard icon='school' label='CGPA' value='8.7' color='#22D3EE' />
                <StatCard icon='how-to-reg' label='Attendance' value='89%' color='#818CF8' />
            </View>

            <View className="mt-3 flex-row gap-3">
                <StatCard icon='workspace-premium' label='Credits' value='112' color='#FB923C' />
                <StatCard icon='emoji-events' label='Rank' value='#14' color='#FACC15' />
            </View>
        </View>
    );
}