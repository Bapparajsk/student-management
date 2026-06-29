import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import { PressableFeedback } from '@/components/hero-ui';
import ThemeText from '@/components/ui/ThemeText';
import { PasswordCard } from './PasswordCard';

const passwordAgeDays = 100;

export const PasswordSecurityAlert = () => {

    const shouldShowWarning = passwordAgeDays > 90;

    if (!shouldShowWarning) {
        return <PasswordCard passwordAgeDays={passwordAgeDays} />;
    }

    return (
        <View className=" mt-4 overflow-hidden rounded-3xl border border-amber-500/15 bg-amber-500/4 p-4" >

            {/* Glow */}
            <View className=" absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-500/10" />

            {/* Content */}
            <View className="flex-row items-start">
                <View className="h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10" >
                    <MaterialIcons
                        name="warning-amber"
                        size={24}
                        color="#F59E0B"
                    />
                </View>

                <View className="ml-3 flex-1">

                    <ThemeText className="font-poppins-semibold text-amber-400">
                        Password Update Recommended
                    </ThemeText>

                    <ThemeText numberOfLines={3} className="mt-1 text-xs text-zinc-400">
                        Your password was last changed {passwordAgeDays} days ago.
                    </ThemeText>
                </View>
            </View>

            {/* Warning Stats */}

            <View className="mt-4 flex-row gap-3">

                <View className="flex-1 rounded-2xl bg-black/10 p-3" >
                    <ThemeText className="text-xs text-zinc-500" >
                        Last Updated
                    </ThemeText>

                    <ThemeText className="mt-1 font-poppins-semibold" >
                        {passwordAgeDays} Days Ago
                    </ThemeText>

                </View>

                <View className=" flex-1 rounded-2xl bg-black/10 p-3">
                    <ThemeText className="text-xs text-zinc-500">
                        Recommended
                    </ThemeText>

                    <ThemeText className="mt-1 font-poppins-semibold text-amber-400">
                        Every 90 Days
                    </ThemeText>

                </View>

            </View>

            {/* Action */}

            <PressableFeedback className="mt-4 h-12 flex-row items-center justify-center rounded-2xl bg-amber-500/15">
                <MaterialIcons
                    name="key"
                    size={18}
                    color="#F59E0B"
                />

                <ThemeText className="ml-2 font-poppins-semibold text-amber-400" >
                    Change Password
                </ThemeText>

            </PressableFeedback>

        </View>
    );
};