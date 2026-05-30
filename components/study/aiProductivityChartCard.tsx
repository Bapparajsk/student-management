import { colors } from '@/utils/theme'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import AreaChart from '../ui/areaChart'
import ThemeText from '../ui/ThemeText'

export const aiProductivityAnalytics = {
    "Last Month": [
        {
            value: 22,
        },
        {
            value: 28,
        },
        {
            value: 24,
        },
        {
            value: 31,
        },
    ],
};

export const AiProductivityChartCard = () => {

    const maxValue = Math.max(...aiProductivityAnalytics["Last Month"].map(d => d.value));

    const upColor = colors.graph.aiProductivity;
    const downColor = colors.error;

    const currentColor = aiProductivityAnalytics["Last Month"][0].value < aiProductivityAnalytics["Last Month"][3].value ? upColor : downColor;


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
            <View className="mt-2 w-full overflow-hidden">
                <AreaChart
                    data={aiProductivityAnalytics["Last Month"]}
                    color={currentColor}
                    dataPointsColor={currentColor}
                    startFillColor={currentColor}
                    endFillColor={currentColor}
                    height={50}
                    maxValue={maxValue + 2}
                    initialSpacing={0}
                    endSpacing={0}
                    spacing={(aiProductivityAnalytics["Last Month"].length - 1) * 13}
                    hideRules
                    hideYAxisText
                    hideAxesAndRules
                    xAxisThickness={0}
                    yAxisThickness={0}
                    hideDataPoints
                    disableScroll
                    curved
                    areaChart
                    startOpacity={0.25}
                    endOpacity={0.02}
                />
            </View>
        </View>
    )
}