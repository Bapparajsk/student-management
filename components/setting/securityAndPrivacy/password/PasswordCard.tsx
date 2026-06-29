import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import { PressableFeedback } from '@/components/hero-ui';
import ThemeText from '@/components/ui/ThemeText';

type PasswordCardProps = {
    passwordAgeDays: number;
    onChangePassword?: () => void;
};

export const PasswordCard = ({
    passwordAgeDays,
    onChangePassword,
}: PasswordCardProps) => {
    return (
        <View className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-4">
            <View className="flex-row items-center">
                <View className="h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <MaterialIcons
                        name="key"
                        size={24}
                        color="#22D3EE"
                    />
                </View>
                <View className="ml-3 flex-1">
                    <ThemeText className="font-poppins-semibold">
                        Password
                    </ThemeText>

                    <ThemeText className="mt-1 text-xs text-zinc-500">
                        Strong • Updated {passwordAgeDays} days ago
                    </ThemeText>

                </View>

                <View className="rounded-full bg-emerald-500/10 px-3 py-1">
                    <ThemeText className="text-xs text-emerald-400">
                        Strong
                    </ThemeText>
                </View>

            </View>

            <ThemeText numberOfLines={5} className="mt-3 text-sm text-zinc-400">
                Your password is strong and has been updated recently. Keep it secure and consider updating it periodically for enhanced security.
            </ThemeText>

            <PressableFeedback
                onPress={onChangePassword}
                className=" mt-4 h-12 flex-row items-center justify-center rounded-2xl bg-cyan-500/10"
            >

                <MaterialIcons
                    name="key"
                    size={18}
                    color="#22D3EE"
                />

                <ThemeText
                    className="ml-2 font-poppins-semibold text-cyan-400"
                >
                    Update Password
                </ThemeText>

            </PressableFeedback>

        </View>
    );
};