import ThemeText from '@/components/ui/ThemeText'
import { View } from 'react-native'
import { PrivacyItem } from './privacyItem'

export const PrivacySection = () => {
    return (
        <View className="mb-5">

            <ThemeText
                className="mb-2 ml-1 text-xs font-poppins-semibold uppercase tracking-widest text-zinc-500"
            >
                Data Privacy
            </ThemeText>

            <View
                className=" rounded-3xl border border-white/10 bg-white/3"
            >

                <PrivacyItem
                    icon="public"
                    iconColor="#22D3EE"
                    title="Profile Visibility"
                    value="University Only"
                    index={4}
                />

                <View className="ml-17 h-px bg-white/5" />

                <PrivacyItem
                    icon="phone"
                    iconColor="#10B981"
                    title="Phone Number"
                    value="Private"

                    index={3}
                />

                <View className="ml-17 h-px bg-white/5" />

                <PrivacyItem
                    icon="mail"
                    iconColor="#F59E0B"
                    title="Email Address"
                    value="Private"
                    index={2}
                />

                <View className="ml-17 h-px bg-white/5" />

                <PrivacyItem
                    icon="groups"
                    iconColor="#8B5CF6"
                    title="Community Profile"
                    value="University Only"
                    index={1}
                />

            </View>

        </View>
    )
}
