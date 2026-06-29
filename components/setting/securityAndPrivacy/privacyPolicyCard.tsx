import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import { PressableFeedback } from '@/components/hero-ui';
import ThemeText from '@/components/ui/ThemeText';


export const PrivacyPolicyCard = () => {
    return (
        <View className="mb-5">

            <ThemeText
                className="mb-2 ml-1 text-xs font-poppins-semibold uppercase tracking-widest text-zinc-500"
            >
                Privacy Policy
            </ThemeText>

            <PressableFeedback
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-4"
            >

                <View className="flex-row items-center">

                    <View
                        className="
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-cyan-500/10
                        "
                    >
                        <MaterialIcons
                            name="description"
                            size={22}
                            color="#22D3EE"
                        />
                    </View>

                    <View className="ml-3 flex-1">

                        <ThemeText>
                            Privacy Policy
                        </ThemeText>

                        <ThemeText className="mt-1 text-xs text-zinc-500">
                            How we collect, use and protect your data
                        </ThemeText>

                    </View>

                    <MaterialIcons
                        name="chevron-right"
                        size={20}
                        color="#71717A"
                    />

                </View>
            </PressableFeedback>
        </View>
    );
};