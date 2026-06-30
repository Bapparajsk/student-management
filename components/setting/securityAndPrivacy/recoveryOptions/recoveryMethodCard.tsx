import ThemeText from '@/components/ui/ThemeText';
import { cn } from '@/utils/cn';
import { MaterialIcons } from '@expo/vector-icons';
import { PressableFeedback } from 'components/hero-ui';
import { View } from 'react-native';

type RecoveryMethodCardProps = {
    icon: keyof typeof MaterialIcons.glyphMap;
    title: string;
    value?: string | null;
    verified?: boolean;
    actionText?: string;
    onPress?: () => void;
};

export const RecoveryMethodCard = ({
    icon,
    title,
    value,
    verified = false,
    actionText,
    onPress,
}: RecoveryMethodCardProps) => {

    const isConfigured =
        verified &&
        !!value;

    const displayValue =
        isConfigured
            ? value
            : 'Not Configured';

    const buttonText =
        actionText ??
        (isConfigured
            ? `Change ${title.replace('Recovery ', '')}`
            : `Add ${title.replace('Recovery ', '')}`);

    return (
        <View
            className={cn(`overflow-hidden rounded-3xl border p-4`,
                isConfigured ? 'border-white/10 bg-white/3' : 'border-amber-500/15 bg-amber-500/4'
            )}
        >

            {/* Glow */}

            {!isConfigured && (
                <View className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-500/10" />
            )}

            {/* Header */}

            <View className="flex-row items-start">

                <View
                    className={cn(`h-12 w-12 items-center justify-center rounded-2xl`,
                        isConfigured ? 'bg-cyan-500/10' : 'bg-amber-500/10'
                    )}
                >
                    <MaterialIcons
                        name={icon}
                        size={22}
                        color={isConfigured ? '#22D3EE' : '#F59E0B'}
                    />
                </View>

                <View className="ml-3 flex-1">

                    <ThemeText
                        className="
                            text-xs
                            text-zinc-500
                        "
                    >
                        {title}
                    </ThemeText>

                    <ThemeText
                        numberOfLines={1} className={cn(`mt-1 font-poppins-semibold`,
                            isConfigured ? 'text-white' : 'text-amber-400'
                        )}
                    >
                        {displayValue}
                    </ThemeText>

                </View>

                {/* Status */}

                <View
                    className={cn(`rounded-full px-2 py-1`,
                        isConfigured ? 'bg-emerald-500/10' : 'bg-amber-500/10'
                    )}
                >
                    <ThemeText
                        className={cn(
                            'text-xs',
                            isConfigured
                                ? 'text-emerald-400'
                                : 'text-amber-400'
                        )}
                    >
                        {isConfigured
                            ? 'Verified'
                            : 'Missing'}
                    </ThemeText>
                </View>

            </View>

            {/* Warning */}

            {!isConfigured && (
                <View className="mt-4">

                    <ThemeText
                        className="text-xs leading-5 text-zinc-400"
                        numberOfLines={5}
                    >
                        Add a recovery method to
                        help regain access if you
                        lose your password or
                        authenticator app.
                    </ThemeText>

                </View>
            )}

            {/* Action */}

            <PressableFeedback
                onPress={onPress}
                className={cn(
                    `mt-4 h-11 flex-row items-center justify-center rounded-2xl`,
                    isConfigured ? 'bg-white/4' : 'bg-amber-500/10'
                )}
            >

                <MaterialIcons
                    name={isConfigured ? 'edit' : 'add'}
                    size={16}
                    color={
                        isConfigured
                            ? '#22D3EE'
                            : '#F59E0B'
                    }
                />

                <ThemeText
                    className={cn(`ml-2`,
                        isConfigured ? 'text-cyan-400' : 'text-amber-400'
                    )}
                >
                    {buttonText}
                </ThemeText>

            </PressableFeedback>

        </View>
    );
};