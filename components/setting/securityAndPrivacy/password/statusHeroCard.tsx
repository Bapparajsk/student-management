import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import ThemeText from '@/components/ui/ThemeText';

export const PasswordSecurityHero = () => {
    return (
        <View
            className="
                overflow-hidden
                rounded-3xl
                border
                border-emerald-500/10
                bg-white/[0.03]
                p-5
            "
        >

            {/* Glow */}

            <View
                className="
                    absolute
                    -right-10
                    -top-10
                    h-40
                    w-40
                    rounded-full
                    bg-emerald-500/10
                "
            />

            {/* Header */}

            <View className="flex-row items-center">

                <View
                    className="
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-emerald-500/10
                    "
                >
                    <MaterialIcons
                        name="shield"
                        size={28}
                        color="#34D399"
                    />
                </View>

                <View className="ml-4 flex-1">

                    <ThemeText className="font-poppins-semibold text-lg">
                        Password Protected
                    </ThemeText>

                    <ThemeText numberOfLines={2} className="mt-1 text-sm text-zinc-500">
                        Your account security is in excellent condition
                    </ThemeText>
                </View>
            </View>

            {/* Security Checks */}

            <View className="mt-5 gap-3">

                <View className="flex-row items-center">

                    <MaterialIcons
                        name="check-circle"
                        size={18}
                        color="#34D399"
                    />

                    <ThemeText className="ml-3 text-sm">
                        Strong Password
                    </ThemeText>

                </View>

                <View className="flex-row items-center">

                    <MaterialIcons
                        name="check-circle"
                        size={18}
                        color="#34D399"
                    />

                    <ThemeText className="ml-3 text-sm">
                        Two-Factor Authentication Enabled
                    </ThemeText>

                </View>

                <View className="flex-row items-center">

                    <MaterialIcons
                        name="check-circle"
                        size={18}
                        color="#34D399"
                    />

                    <ThemeText className="ml-3 text-sm">
                        Recovery Options Configured
                    </ThemeText>

                </View>

            </View>

            {/* Footer */}

            <View
                className="
                    mt-5
                    flex-row
                    items-center
                    justify-between
                    border-t
                    border-white/5
                    pt-4
                "
            >

                <ThemeText className="text-xs text-zinc-500">
                    Last Updated
                </ThemeText>

                <ThemeText className="text-sm font-poppins-medium text-emerald-400">
                    30 Days Ago
                </ThemeText>

            </View>

        </View>
    );
};