import ThemeText from '@/components/ui/ThemeText'
import { PressableFeedback } from 'components/hero-ui'
import { View } from 'react-native'
import { DeviceItem } from './deviceItem'

export const DevicesSection = () => {
    return (
        <View className="mb-5">

            <ThemeText
                className="mb-2 ml-1 text-xs font-poppins-semibold uppercase tracking-widest text-zinc-500"
            >
                Your Devices
            </ThemeText>

            <View
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/3"
            >

                <DeviceItem
                    icon="laptop-mac"
                    name="MacBook Air"
                    status="Current Device • Active Now"
                    current
                />

                <View className="ml-17 h-px bg-white/5" />

                <DeviceItem
                    icon="phone-iphone"
                    name="iPhone"
                    status="Last Active 2 Hours Ago"
                />

                <View className="ml-17 h-px bg-white/5" />

                <DeviceItem
                    icon="laptop-windows"
                    name="Windows Laptop"
                    status="Last Active Yesterday"
                />

                <View className="border-t border-white/5">

                    <PressableFeedback
                        className="flex-row items-center justify-center py-4"
                    >
                        <ThemeText className="font-poppins-medium text-cyan-400">
                            View All Devices
                        </ThemeText>
                    </PressableFeedback>

                </View>

            </View>

        </View>
    )
}
