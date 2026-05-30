import { colors } from '@/utils/theme'
import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import React from 'react'
import { View } from 'react-native'
import If from '../If'
import ThemeText from '../ui/ThemeText'
import AreaChart from '../ui/areaChart'

export const rankingAnalyticsMonthData = [
    {
        value: 128,
    },
    {
        value: 112,
    },
    {
        value: 86,
    },
    {
        value: 64,
    },
];

export const RangingChartCard = () => {

    const isGrow = rankingAnalyticsMonthData[0].value < rankingAnalyticsMonthData[3].value;

    const graphColor = isGrow ? colors.graph.ranging : colors.error;

    return (
        <View className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-3 overflow-hidden" >
            <View className="items-start">
                <View className="mb-1 flex-row items-center gap-1">

                    <MaterialCommunityIcons
                        name="google-analytics"
                        size={18}
                        color={colors.graph.ranging}
                    />

                    <ThemeText className="font-poppins-semibold" textColor={colors.graph.ranging}>
                        Ranging
                    </ThemeText>
                </View>
            </View>
            <View className='flex-row items-center gap-1'>

                <ThemeText className="font-poppins-medium text-xs" style={{ color: colors.textMuted }}>
                    87.5%
                </ThemeText>
                <If condition={isGrow}>
                    <If.Then>
                        <Feather name="arrow-up-right" size={14} color={colors.textMuted} />
                    </If.Then>
                    <If.Else>
                        <Feather name="arrow-down-left" size={14} color={colors.textMuted} />
                    </If.Else>
                </If>
                <ThemeText className="font-poppins-medium text-xs" style={{ color: colors.textMuted }}>
                    last month
                </ThemeText>
            </View>
            <View className="mt-2 w-full overflow-hidden">
                <AreaChart
                    data={rankingAnalyticsMonthData}
                    color={graphColor}
                    dataPointsColor={graphColor}
                    startFillColor={graphColor}
                    endFillColor={graphColor}
                    height={50}
                    maxValue={130}
                    initialSpacing={0}
                    endSpacing={0}
                    spacing={(rankingAnalyticsMonthData.length - 1) * 13}
                    hideRules
                    hideYAxisText
                    hideAxesAndRules
                    xAxisThickness={0}
                    yAxisThickness={0}
                    hideDataPoints
                    disableScroll
                    curved
                    areaChart
                />
            </View>
        </View>
    )
}