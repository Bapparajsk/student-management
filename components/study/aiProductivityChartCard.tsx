import { colors } from '@/utils/theme'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import { Sparkline } from '../ui/sparkline'
import ThemeText from '../ui/ThemeText'

export const aiProductivityAnalytics = [22, 28, 24, 31];


export const AiProductivityChartCard = () => {


    const upColor = colors.graph.aiProductivity;
    const downColor = colors.error;

    const currentColor = aiProductivityAnalytics[0] < aiProductivityAnalytics[3] ? upColor : downColor;


    return (
        <View className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-3 overflow-hidden" >
            <View className="items-start">
                <View className="mb-1 flex-row items-center gap-1">
                    <MaterialIcons
                        name="trending-up"
                        size={18}
                        color={colors.secondary}
                    />

                    <ThemeText className="font-poppins-semibold" style={{ color: colors.secondary }}>
                        AI Productivity
                    </ThemeText>
                </View>
            </View>
            <View>
                <ThemeText className="font-poppins-medium text-xs" style={{ color: colors.textMuted }}>
                    87.5% last month
                </ThemeText>
            </View>
            <View className="mt-2 w-full overflow-hidden items-center ">
                <Sparkline
                    color={currentColor}
                    data={aiProductivityAnalytics}
                    height={80}
                    width={150}
                />
            </View>
        </View>
    )
}