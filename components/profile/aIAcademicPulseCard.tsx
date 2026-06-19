import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const insights = [
    {
        id: 'strength',
        title: 'Core Strength',
        value: 'Database Architecture',
        icon: 'workspace-premium',
        color: '#22D3EE',
        bg: 'bg-cyan-500/10',
    },
    {
        id: 'growth',
        title: 'Growth Area',
        value: 'Advanced Calculus',
        icon: 'trending-up',
        color: '#F87171',
        bg: 'bg-red-500/10',
    },
    {
        id: 'forecast',
        title: 'Forecast',
        value: 'Upward Trend',
        icon: 'show-chart',
        color: '#A78BFA',
        bg: 'bg-violet-500/10',
    },
];

function InsightRow({
    title,
    value,
    icon,
    color,
    bg,
}: (typeof insights)[0]) {
    return (
        <View className="flex-row items-center rounded-2xl border border-white/5 bg-white/4 p-4">
            <View className={`h-11 w-11 items-center justify-center rounded-2xl ${bg}`}>
                <MaterialIcons
                    name={icon as any}
                    size={20}
                    color={color}
                />
            </View>

            <View className="ml-3 flex-1">
                <Text className="text-xs uppercase tracking-wider text-zinc-500">
                    {title}
                </Text>

                <Text
                    numberOfLines={1}
                    className="mt-1 font-semibold text-white"
                >
                    {value}
                </Text>
            </View>
        </View>
    );
}

export const AIAcademicPulseCard = () => {
    return (
        <View className="overflow-hidden rounded-[28px] border border-cyan-400/10 bg-white/[0.04] p-5">

            {/* Glow */}
            <View className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10" />

            {/* Header */}
            <View className="mb-5 flex-row items-center">
                <View className="h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
                    <MaterialIcons
                        name="auto-awesome"
                        size={24}
                        color="#22D3EE"
                    />
                </View>

                <View className="ml-3 flex-1">
                    <Text className="text-lg font-bold text-white">
                        AI Academic Pulse
                    </Text>

                    <Text className="text-sm text-zinc-500">
                        Personalized learning insights
                    </Text>
                </View>
            </View>

            {/* Insights */}
            <View className="gap-3">
                {insights.map(item => (
                    <InsightRow
                        key={item.id}
                        {...item}
                    />
                ))}
            </View>

        </View>
    );
}