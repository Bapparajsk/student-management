import ThemeText from '@/components/ui/ThemeText';
import { MaterialIcons } from '@expo/vector-icons';
import { PressableFeedback } from 'components/hero-ui';
import { View } from 'react-native';

type SignOutAllDevicesCardProps = {
    onPress?: () => void;
};

export const SignOutAllDevicesCard = ({
    onPress,
}: SignOutAllDevicesCardProps) => {
    return (
        <View className="mt-6">

            <ThemeText className="mb-2 ml-1 text-xs font-poppins-semibold uppercase tracking-widest text-red-400">
                Danger Zone
            </ThemeText>

            <View className="overflow-hidden rounded-3xl border border-red-500/15 bg-red-500/3 p-4">

                {/* Glow */}

                <View className=" absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-500/10" />

                <View className="flex-row items-start">

                    <View className="h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10">
                        <MaterialIcons
                            name="logout"
                            size={24}
                            color="#EF4444"
                        />
                    </View>

                    <View className="ml-3 flex-1">

                        <ThemeText className="font-poppins-semibold text-red-400">
                            Sign Out All Devices
                        </ThemeText>

                        <ThemeText numberOfLines={3} className="mt-2 text-sm leading-6 text-zinc-400">
                            Immediately end all active
                            sessions except your current
                            device.
                        </ThemeText>

                    </View>

                </View>

                <PressableFeedback
                    onPress={onPress}
                    className="mt-4 h-12 flex-row items-center justify-center rounded-2xl bg-red-500/10">
                    <MaterialIcons
                        name="logout"
                        size={18}
                        color="#EF4444"
                    />

                    <ThemeText
                        className="ml-2 font-poppins-semibold text-red-400">
                        Sign Out Everywhere
                    </ThemeText>

                </PressableFeedback>

            </View>

        </View>
    );
};