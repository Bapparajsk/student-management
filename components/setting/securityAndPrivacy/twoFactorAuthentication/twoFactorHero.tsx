import ThemeText from '@/components/ui/ThemeText';
import { cn } from '@/utils/cn';
import { MaterialIcons } from '@expo/vector-icons';
import { PressableFeedback } from 'components/hero-ui';
import { View } from 'react-native';

type TwoFactorHeroProps = {
    enabled: boolean;
    onEnable?: () => void;
};

const data = {
    enabled: {
        border: 'border-emerald-500/10',
        bg: 'bg-white/3',
        glow: 'bg-emerald-500/10',
        iconBg: 'bg-emerald-500/10',
        iconColor: '#34D399',
        icon: 'shield',
        statusBg: 'bg-emerald-500/10',
        statusColor: 'text-emerald-400',
        status: '● Enabled',
        title: 'Two-Factor Authentication',
        description:
            'Your account is protected by an authenticator app and requires a verification code when signing in.',
        items: [
            'Extra layer of security',
            'Protects against stolen passwords',
            'Recommended by security experts',
        ],
    },
    disabled: {
        border: 'border-amber-500/15',
        bg: 'bg-amber-500/[0.04]',
        glow: 'bg-amber-500/10',
        iconBg: 'bg-amber-500/10',
        iconColor: '#F59E0B',
        icon: 'warning-amber',
        statusBg: 'bg-amber-500/10',
        statusColor: 'text-amber-400',
        status: '● Disabled',
        title: 'Two-Factor Authentication',
        description:
            'Your account currently relies only on a password for security. Enable two-factor authentication for stronger protection.',
        items: [
            'Better account security',
            'Protection from account theft',
            'Recommended for all students',
        ],
    }
}

export const TwoFactorHero = ({
    enabled,
    onEnable,
}: TwoFactorHeroProps) => {

    const config = enabled ? data.enabled : data.disabled;

    return (
        <View
            className={cn("overflow-hidden rounded-3xl border p-5", config.border, config.bg)}
        >
            {/* Glow */}

            <View className={cn("absolute -right-10 -top-10 h-40 w-40 rounded-full", config.glow)} />

            {/* Header */}

            <View className="flex-row items-center">
                <View
                    className={cn("h-16 w-16 items-center justify-center rounded-3xl", config.iconBg)}
                >
                    <MaterialIcons
                        name={config.icon as any}
                        size={32}
                        color={config.iconColor}
                    />
                </View>

                <View className="ml-4 flex-1">

                    <View
                        className={cn("self-start rounded-full px-3 py-1", config.statusBg)}
                    >
                        <ThemeText
                            className={cn("text-xs", config.statusColor)}
                        >
                            {config.status}
                        </ThemeText>
                    </View>

                    <ThemeText className="mt-2 text-lg font-poppins-semibold">
                        {config.title}
                    </ThemeText>

                </View>

            </View>

            {/* Description */}

            <ThemeText numberOfLines={3} className={"mt-4 text-sm leading-6 text-zinc-400"} >
                {config.description}
            </ThemeText>

            {/* Benefits */}

            <View className="mt-5 gap-3">

                {config.items.map((item) => (
                    <View
                        key={item}
                        className="flex-row items-center"
                    >
                        <MaterialIcons
                            name="check-circle"
                            size={18}
                            color={config.iconColor}
                        />

                        <ThemeText className="ml-3 text-sm">
                            {item}
                        </ThemeText>
                    </View>
                ))}

            </View>

            {/* Action */}

            {!enabled && (
                <PressableFeedback
                    onPress={onEnable}
                    className="mt-5 h-12 flex-row items-center justify-center rounded-2xl bg-amber-500/15"
                >
                    <MaterialIcons
                        name="shield"
                        size={18}
                        color="#F59E0B"
                    />

                    <ThemeText className="ml-2 font-poppins-semibold text-amber-400">
                        Enable Two-Factor Authentication
                    </ThemeText>
                </PressableFeedback>
            )}
        </View>
    );
};