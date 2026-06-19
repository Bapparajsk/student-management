import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { HeaderTitle } from '../ui/headerTitle';
import ThemeText from '../ui/ThemeText';

const stats = [
    {
        label: 'CGPA',
        value: '8.7',
        icon: 'school',
        color: '#22D3EE',
    },
    {
        label: 'Attendance',
        value: '89%',
        icon: 'how-to-reg',
        color: '#818CF8',
    },
    {
        label: 'Credits',
        value: '112',
        icon: 'workspace-premium',
        color: '#FB923C',
    },
    {
        label: 'Rank',
        value: '#14',
        icon: 'emoji-events',
        color: '#FACC15',
    },
];

function StatCard({
    item,
}: {
    item: (typeof stats)[0];
}) {
    return (
        <View className="flex-1 flex-row items-center rounded-2xl border border-white/5 bg-white/4 p-3">

            <View
                className="h-10 w-10 items-center justify-center rounded-xl"
                style={{
                    backgroundColor: `${item.color}15`,
                }}
            >
                <MaterialIcons
                    name={item.icon as any}
                    size={18}
                    color={item.color}
                />
            </View>

            <View className="ml-3 flex-1">
                <ThemeText className="text-lg font-poppins-semibold">
                    {item.value}
                </ThemeText>

                <ThemeText className="text-xs text-zinc-500">
                    {item.label}
                </ThemeText>
            </View>

        </View>
    );
}
export function AcademicOverview() {
    return (
        <View className="mt-4">
            {/* <Text className="mb-4 text-lg font-bold text-white">
                Academic Overview
            </Text> */}
            <HeaderTitle
                leftText="Academic Overview"
            />

            <View className="flex-row gap-3">
                <StatCard item={stats[0]} />
                <StatCard item={stats[1]} />
            </View>

            <View className="mt-3 flex-row gap-3">
                <StatCard item={stats[2]} />
                <StatCard item={stats[3]} />
            </View>
        </View>
    );
}