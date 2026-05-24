import { LineChart } from "react-native-gifted-charts";

const lineData = [
    { value: 0 },
    { value: 10 },
    { value: 8 },
    { value: 58 },
    { value: 56 },
    { value: 78 },
    { value: 74 },
    { value: 98 },
];

const lineData2 = [
    { value: 0 },
    { value: 20 },
    { value: 18 },
    { value: 40 },
    { value: 36 },
    { value: 60 },
    { value: 54 },
    { value: 85 },
];

export default function AreaCharts() {
    return (
        <LineChart
            areaChart
            curved
            data={lineData}
            data2={lineData2}
            height={180}
            width={320}
            hideRules
            hideYAxisText
            hideDataPoints
            isAnimated
            spacing={42}
            initialSpacing={0}
            color1="#38BDF8"
            color2="#A855F7"
            startFillColor1="#38BDF8"
            startFillColor2="#A855F7"
            startOpacity={0.25}
            endOpacity={0.02}
            thickness={3}
        />
    );
}