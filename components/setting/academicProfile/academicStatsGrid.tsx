import { StatCard } from '@/components/profile/AcademicInfoRow';
import { View } from 'react-native';

export const AcademicStatsGrid = () => {
    return (
        <View className="mt-4">

            <View className="flex-row gap-3">
                <StatCard
                    icon="account-balance"
                    value="Ellite"
                    label="University"
                    color="#22D3EE"
                />

                <StatCard
                    icon="school"
                    value="Semester 5"
                    label="Current Term"
                    color="#818CF8"
                />
            </View>

            <View className="mt-3 flex-row gap-3">
                <StatCard
                    icon="memory"
                    value="CST"
                    label="Department"
                    color="#FB923C"
                />

                <StatCard
                    icon="workspace-premium"
                    value="72"
                    label="Credits"
                    color="#FACC15"
                />
            </View>
        </View>
    )
}