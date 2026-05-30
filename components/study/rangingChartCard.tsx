import { colors } from '@/utils/theme'
import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import React from 'react'
import { View } from 'react-native'
import If from '../If'
import ThemeText from '../ui/ThemeText'
import { Sparkline } from '../ui/sparkline'

export const rankingAnalyticsMonthData = [128, 112, 86, 0]


export const RangingChartCard = () => {

    const isGrow = rankingAnalyticsMonthData[0] < rankingAnalyticsMonthData[3];

    const currentColor = isGrow ? colors.graph.ranging : colors.error;

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
            <View className="mt-2 w-full items-center overflow-hidden">
                <Sparkline
                    color={currentColor}
                    data={rankingAnalyticsMonthData}
                    height={80}
                    width={150}
                />
            </View>
        </View>
    )
}