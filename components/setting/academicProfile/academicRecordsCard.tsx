import { StatCard } from '@/components/profile/AcademicInfoRow';
import ThemeText from '@/components/ui/ThemeText';
import { PressableFeedback } from 'heroui-native';
import { View } from 'react-native';


export const AcademicRecordsCard = () => {
    return (
        <View className="mt-4 rounded-3xl border border-white/10 bg-white/3 p-5">

            <ThemeText className="font-poppins-semibold text-lg mb-2">
                Academic Records
            </ThemeText>

            <View className="flex-row gap-3">
                <StatCard icon='school' label='CGPA' value='8.7' color='#22D3EE' />
                <StatCard icon='how-to-reg' label='Attendance' value='89%' color='#818CF8' />
            </View>

            <View className="mt-3 flex-row gap-3">
                <StatCard icon='workspace-premium' label='Credits' value='112' color='#FB923C' />
                <StatCard icon='emoji-events' label='Rank' value='#14' color='#FACC15' />
            </View>

            <PressableFeedback
                className="mt-4 h-12 items-center justify-center rounded-2xl bg-cyan-500/10"
            >
                <ThemeText className="text-cyan-400">
                    View Records
                </ThemeText>
            </PressableFeedback>

        </View>
    )
}