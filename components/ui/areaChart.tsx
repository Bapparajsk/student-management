import React from 'react';
import { LineChart, LineChartPropsType } from 'react-native-gifted-charts';


export default function AreaChart(props: LineChartPropsType) {

    const { yAxisTextStyle, xAxisLabelTextStyle, ...rest } = props;
    const safeYAxisTextStyle =
        yAxisTextStyle && typeof yAxisTextStyle === 'object' && !Array.isArray(yAxisTextStyle)
            ? yAxisTextStyle
            : {};
    const safeXAxisLabelTextStyle =
        xAxisLabelTextStyle && typeof xAxisLabelTextStyle === 'object' && !Array.isArray(xAxisLabelTextStyle)
            ? xAxisLabelTextStyle
            : {};

    return (
        <LineChart
            areaChart
            curved
            height={130}
            hideRules={false}
            rulesColor="rgba(255,255,255,0.06)"
            yAxisColor="transparent"
            xAxisColor="rgba(255,255,255,0.08)"
            color="#38BDF8"
            color2="#22C55E"
            dataPointsColor="#38BDF8"
            dataPointsColor2="#22C55E"
            startFillColor="#38BDF8"
            endFillColor="#38BDF8"
            startFillColor2="#22C55E"
            endFillColor2="#22C55E"
            startOpacity={0.22}
            endOpacity={0.02}
            thickness={3}
            spacing={65}
            initialSpacing={10}
            endSpacing={10}
            hideDataPoints
            isAnimated
            animationDuration={1000}
            noOfSections={4}
            yAxisTextStyle={{
                color: '#71717A',
                fontSize: 10,
                fontFamily: 'PoppinsMedium',
                ...safeYAxisTextStyle,
            }}
            xAxisLabelTextStyle={{
                color: '#A1A1AA',
                fontSize: 11,
                fontFamily: 'PoppinsMedium',
                ...safeXAxisLabelTextStyle,
            }}
            maxValue={10}
            {...rest}
        />
    )
}