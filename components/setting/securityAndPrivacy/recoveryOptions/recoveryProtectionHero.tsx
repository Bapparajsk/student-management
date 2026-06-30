import ThemeText from '@/components/ui/ThemeText';
import { cn } from '@/utils/cn';
import { MaterialIcons } from '@expo/vector-icons';
import { PressableFeedback } from 'components/hero-ui';
import { Fragment } from 'react';
import { View } from 'react-native';
import { RecoveryMethodCard } from './recoveryMethodCard';

type RecoveryProtectionHeroProps = {
    recoveryEmail: boolean;
    recoveryPhone: boolean;
    onPress?: () => void;
};

const recoveryCount2 = {
    border: 'border-emerald-500/10',
    bg: 'bg-white/3',
    glow: 'bg-emerald-500/10',
    iconBg: 'bg-emerald-500/10',
    icon: 'verified-user',
    iconColor: '#34D399',
    status: 'Fully Protected',
    statusBg: 'bg-emerald-500/10',
    statusText: 'text-emerald-400',
    description:
        'Your account can be recovered using multiple recovery methods if you lose access.',
    buttonText: '',
    buttonColor: '',
}

const recoveryCount0 = {
    border: 'border-red-500/15',
    bg: 'bg-red-500/[0.04]',
    glow: 'bg-red-500/10',
    iconBg: 'bg-red-500/10',
    icon: 'error-outline',
    iconColor: '#EF4444',
    status: 'Recovery Methods Missing',
    statusBg: 'bg-red-500/10',
    statusText: 'text-red-400',
    description:
        'No recovery methods are configured. Recovery may be difficult if you lose access.',
    buttonText: 'Setup Recovery Options',
    buttonColor: 'text-red-400',

}

export const RecoveryProtectionHero = ({
    recoveryEmail,
    recoveryPhone,
    onPress,
}: RecoveryProtectionHeroProps) => {

    const recoveryCount = [
        recoveryEmail,
        recoveryPhone,
    ].filter(Boolean).length;

    const state =
        recoveryCount === 2
            ? recoveryCount2
            : recoveryCount === 1
                ? {
                    border: 'border-amber-500/15',
                    bg: 'bg-amber-500/[0.04]',
                    glow: 'bg-amber-500/10',
                    iconBg: 'bg-amber-500/10',
                    icon: 'warning',
                    iconColor: '#F59E0B',
                    status: 'Additional Protection Recommended',
                    statusBg: 'bg-amber-500/10',
                    statusText: 'text-amber-400',
                    description: 'Add another recovery method to improve account recovery.',
                    buttonText: recoveryEmail
                        ? 'Add Recovery Phone'
                        : 'Add Recovery Email',
                    buttonColor: 'text-amber-400',
                }
                : recoveryCount0

    return (
        <Fragment>
            <View className={cn(`overflow-hidden rounded-3xl border p-5`, state.border, state.bg)}>

                {/* Glow */}

                <View
                    className={cn(`absolute -right-10 -top-10 h-40 w-40 rounded-full`, state.glow)}
                />

                {/* Header */}

                <View className="flex-row items-center">

                    <View
                        className={cn(`h-16 w-16 items-center justify-center rounded-3xl`, state.iconBg)}
                    >
                        <MaterialIcons
                            name={state.icon as any}
                            size={32}
                            color={state.iconColor}
                        />
                    </View>

                    <View className="ml-4 flex-1">

                        <ThemeText
                            className="
                            text-lg font-poppins-semibold"
                        >
                            Recovery Protection
                        </ThemeText>

                        <View
                            className={cn(`mt-2 self-start rounded-full px-3 py-1`, state.statusBg)}
                        >
                            <ThemeText
                                className={`text-xs ${state.statusText}`}
                            >
                                {state.status}
                            </ThemeText>
                        </View>

                    </View>

                </View>

                {/* Description */}

                <ThemeText
                    className="mt-4 text-sm leading-6 text-zinc-400"
                    numberOfLines={3}
                >
                    {state.description}
                </ThemeText>

                {/* Recovery Methods */}

                <View className="mt-5 gap-3">

                    <View className="flex-row items-center">

                        <MaterialIcons
                            name={
                                recoveryEmail
                                    ? 'check-circle'
                                    : 'radio-button-unchecked'
                            }
                            size={18}
                            color={
                                recoveryEmail
                                    ? '#34D399'
                                    : '#71717A'
                            }
                        />

                        <ThemeText className="ml-3 text-sm">
                            Recovery Email
                            {recoveryEmail
                                ? ' Added'
                                : ' Missing'}
                        </ThemeText>

                    </View>

                    <View className="flex-row items-center">

                        <MaterialIcons
                            name={
                                recoveryPhone
                                    ? 'check-circle'
                                    : 'radio-button-unchecked'
                            }
                            size={18}
                            color={
                                recoveryPhone
                                    ? '#34D399'
                                    : '#71717A'
                            }
                        />

                        <ThemeText className="ml-3 text-sm">
                            Recovery Phone
                            {recoveryPhone
                                ? ' Added'
                                : ' Missing'}
                        </ThemeText>

                    </View>

                </View>

                {/* CTA */}

                {recoveryCount < 2 && (
                    <PressableFeedback
                        onPress={onPress}
                        className={cn(`mt-5 h-12 items-center justify-center rounded-2xl`, {
                            'bg-red-500/10': recoveryCount === 0,
                            'bg-amber-500/10': recoveryCount > 0
                        })}
                    >
                        <ThemeText
                        >
                            {state.buttonText}
                        </ThemeText>
                    </PressableFeedback>
                )}

            </View>
            <View className="gap-y-2 mt-3">

                <RecoveryMethodCard
                    icon="mail"
                    title="Recovery Email"
                    value="student@email.com"
                    verified={false}
                />

                <RecoveryMethodCard
                    icon="smartphone"
                    title="Recovery Phone"
                    value="+1 234 567 890"
                    verified={false}
                />

            </View>
        </Fragment>
    );
};