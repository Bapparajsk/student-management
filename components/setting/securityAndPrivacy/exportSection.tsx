import ThemeText from '@/components/ui/ThemeText'
import { View } from 'react-native'
import { ExportItem } from './exportItem'

export const ExportSection = () => {
    return (
        <View className="mb-5">

            <ThemeText
                className=" mb-2 ml-1 text-xs font-poppins-semibold uppercase tracking-widest text-zinc-500 "
            >
                Data Export
            </ThemeText>

            <View
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/4"
            >

                <ExportItem
                    icon="inventory-2"
                    iconColor="#22D3EE"
                    title="Full Data Archive"
                    subtitle="Profile, activity & settings"
                />

                <View className="ml-17 h-px bg-white/5" />

                <ExportItem
                    icon="school"
                    iconColor="#10B981"
                    title="Academic Records"
                    subtitle="Results & transcripts"
                />

                <View className="ml-17 h-px bg-white/5" />

                <ExportItem
                    icon="workspace-premium"
                    iconColor="#F59E0B"
                    title="Certificates"
                    subtitle="Achievements & awards"
                />

            </View>

        </View>
    )
}
