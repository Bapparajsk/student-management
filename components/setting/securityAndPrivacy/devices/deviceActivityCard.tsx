import { StatCard } from '@/components/profile/AcademicInfoRow'
import ThemeText from '@/components/ui/ThemeText'
import { View } from 'react-native'

export const DeviceActivityCard = () => {
    return (
        <View
            className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-4"
        >

            <ThemeText className="mb-4 text-lg font-poppins-semibold">
                Device Activity
            </ThemeText>

            <View className="gap-3">

                <StatCard
                    icon="laptop-mac"
                    color="#22D3EE"
                    label="Current Device"
                    value="MacBook Air • Active Now"
                    classNames={{
                        value: "text-base"
                    }}
                />

                <StatCard
                    icon="schedule"
                    color="#34D399"
                    label="Last Login"
                    value="Today, 09:41 AM"
                    classNames={{
                        value: "text-base"
                    }}
                />

                <StatCard
                    icon="history"
                    color="#A855F7"
                    label="Recent Logins"
                    value="5 in last 7 days"
                    classNames={{
                        value: "text-base"
                    }}
                />

            </View>
        </View>
    )
}
