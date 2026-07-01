import ThemeText from '@/components/ui/ThemeText';
import { cn } from '@/utils/cn';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

type DeviceSecurityHeroProps = {
    totalDevices: number;
    suspiciousDevices?: number;
};

const isSafeStyle = {
    border: 'border-emerald-500/10',
    background: 'bg-white/3',
    glow: 'bg-emerald-500/10',
    iconColor: '#34D399',
    statusTextColor: 'text-emerald-400',
}

const isNotSafeStyle = {
    border: 'border-amber-500/15',
    background: 'bg-amber-500/4',
    glow: 'bg-amber-500/10',
    iconColor: '#F59E0B',
    statusTextColor: 'text-amber-400',
}

export const DeviceSecurityHero = ({
    totalDevices,
    suspiciousDevices = 0,
}: DeviceSecurityHeroProps) => {
    const isSafe = suspiciousDevices === 0;
    const componentStyle = isSafe ? isSafeStyle : isNotSafeStyle;

    return (
        <View className={cn("overflow-hidden rounded-3xl border p-5",
            componentStyle.border, componentStyle.background)}
        >

            {/* Glow */}

            <View className={cn("absolute -right-12 -top-12 h-40 w-40 rounded-full", componentStyle.glow)}
            />

            {/* Header */}

            <View className="flex-row items-center">
                <View className={`h-16 w-16 items-center justify-center rounded-3xl ${componentStyle.background}`}
                >
                    <MaterialIcons
                        name="security"
                        size={32}
                        color={componentStyle.iconColor}
                    />
                </View>

                <View className="ml-4 flex-1">

                    <ThemeText
                        className="
                            text-lg
                            font-poppins-semibold
                        "
                    >
                        Device Security
                    </ThemeText>

                    <View className={`mt-2 self-start rounded-full px-3 py-1 ${componentStyle.background}`}
                    >
                        <ThemeText
                            className={cn("text-xs", componentStyle.statusTextColor)}
                        >
                            {isSafe
                                ? 'Protected'
                                : 'Review Required'}
                        </ThemeText>
                    </View>

                </View>

            </View>

            {/* Summary */}

            <ThemeText
                className="mt-4 text-sm leading-6 text-zinc-400"
            >
                {isSafe
                    ? 'Your account is signed in on trusted devices and no unusual activity was detected.'
                    : 'We found devices that may need your attention.'}
            </ThemeText>

            {/* Insights */}

            <View className="mt-5 gap-3">

                <View className="flex-row items-center">
                    <MaterialIcons
                        name="check-circle"
                        size={18}
                        color="#34D399"
                    />
                    <ThemeText className="ml-3 text-sm">
                        {totalDevices} trusted devices
                    </ThemeText>
                </View>

                <View className="flex-row items-center">
                    <MaterialIcons
                        name="check-circle"
                        size={18}
                        color="#34D399"
                    />
                    <ThemeText className="ml-3 text-sm">
                        Current device verified
                    </ThemeText>
                </View>

                <View className="flex-row items-center">
                    <MaterialIcons
                        name="schedule"
                        size={18}
                        color="#22D3EE"
                    />
                    <ThemeText className="ml-3 text-sm">
                        Last login today
                    </ThemeText>
                </View>

            </View>

        </View>
    );
};