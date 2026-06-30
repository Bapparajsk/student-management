import ThemeText from '@/components/ui/ThemeText';
import { MaterialIcons } from '@expo/vector-icons';
import { BottomSheet, PressableFeedback } from "components/hero-ui";
import { useState } from 'react';
import { View } from 'react-native';

const impacts = [
    'Authenticator app will be disconnected',
    'Backup codes will become invalid',
    'Account will rely only on password',
];

export const DisableTwoFactorCard = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <View className="mt-6">

            <ThemeText
                className="mb-2 ml-1 text-xs font-poppins-semibold uppercase tracking-widest text-red-400"
            >
                Danger Zone
            </ThemeText>

            <View
                className="overflow-hidden rounded-3xl border border-red-500/15 bg-red-500/3 p-4"
            >

                {/* Glow */}

                <View
                    className="
                        absolute
                        -right-8 -top-8 h-24 w-24 rounded-full bg-red-500/10"
                />

                <View className="flex-row items-start">

                    <View
                        className="h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10"
                    >
                        <MaterialIcons
                            name="warning"
                            size={24}
                            color="#EF4444"
                        />
                    </View>

                    <View className="ml-3 flex-1">
                        <ThemeText className="font-poppins-semibold text-red-400">
                            Disable Two-Factor Authentication
                        </ThemeText>

                        <ThemeText numberOfLines={3} className="mt-2 text-sm leading-6 text-zinc-400">
                            Your account will become less
                            secure and will rely only on
                            your password for protection.
                        </ThemeText>
                    </View>
                </View>

                <PressableFeedback
                    className="mt-4 h-12 flex-row items-center justify-center rounded-2xl bg-red-500/10"
                    onPress={() => setIsOpen(true)}
                >

                    <MaterialIcons
                        name="shield"
                        size={18}
                        color="#EF4444"
                    />

                    <ThemeText className="ml-2 font-poppins-semibold text-red-400">
                        Disable 2FA
                    </ThemeText>

                </PressableFeedback>

            </View>

            <BottomSheet isOpen={isOpen} onOpenChange={setIsOpen} >
                <BottomSheet.Portal disableFullWindowOverlay>
                    <BottomSheet.Overlay />
                    <BottomSheet.Content topInset={100} className='bg-red-500/3'>
                        <View className="items-center">

                            <View
                                className="h-20 w-20 items-center justify-center rounded-full bg-red-500/10"
                            >
                                <MaterialIcons
                                    name="warning"
                                    size={40}
                                    color="#EF4444"
                                />
                            </View>

                            <ThemeText
                                className="mt-4 text-center text-xl font-poppins-semibold"
                            >
                                Disable Two-Factor Authentication?
                            </ThemeText>

                            <ThemeText
                                className="mt-2 text-center text-zinc-400"
                                numberOfLines={3}
                            >
                                Removing two-factor authentication will make your account less secure.
                            </ThemeText>

                        </View>
                        <View className="mt-6 gap-4">

                            {impacts.map(item => (
                                <View
                                    key={item}
                                    className="flex-row items-start"
                                >
                                    <MaterialIcons
                                        name="check-circle"
                                        size={18}
                                        color="#F59E0B"
                                    />

                                    <ThemeText
                                        className="ml-3 flex-1 text-zinc-300"
                                    >
                                        {item}
                                    </ThemeText>

                                </View>
                            ))}

                        </View>
                        <View className="mt-8 gap-3 mb-5">

                            <PressableFeedback
                                className="h-14 items-center justify-center rounded-2xl bg-cyan-500"
                                onPress={() => setIsOpen(false)}
                            >
                                <ThemeText className="font-poppins-semibold text-white">
                                    Keep Protected
                                </ThemeText>
                            </PressableFeedback>

                            <PressableFeedback
                                className="h-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10"
                                onPress={() => setIsOpen(false)}
                            >
                                <ThemeText
                                    className="font-poppins-semibold text-red-400"
                                >
                                    Disable 2FA
                                </ThemeText>
                            </PressableFeedback>

                        </View>
                    </BottomSheet.Content>
                </BottomSheet.Portal>
            </BottomSheet>
        </View>
    );
};