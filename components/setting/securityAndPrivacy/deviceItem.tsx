import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import { PressableFeedback } from '@/components/hero-ui';
import ThemeText from '@/components/ui/ThemeText';

type DeviceItemProps = {
    icon: keyof typeof MaterialIcons.glyphMap;
    name: string;
    status: string;
    current?: boolean;
    onPress?: () => void;
};

export const DeviceItem = ({
    icon,
    name,
    status,
    current,
    onPress,
}: DeviceItemProps) => {
    return (
        <PressableFeedback
            onPress={onPress}
            className="flex-row items-center px-4 py-4"
        >
            <View
                className="h-11 w-11 items-center justify-center rounded-xl bg-white/4"
            >
                <MaterialIcons
                    name={icon}
                    size={20}
                    color="#A1A1AA"
                />
            </View>

            <View className="ml-3 flex-1">

                <View className="flex-row items-center">

                    <ThemeText className="font-poppins-medium">
                        {name}
                    </ThemeText>

                    {current && (
                        <View className="ml-2 rounded-full bg-emerald-500/10 px-2 py-0.5">
                            <ThemeText className="text-[10px] text-emerald-400">
                                ACTIVE
                            </ThemeText>
                        </View>
                    )}

                </View>

                <ThemeText
                    className={`mt-1 text-xs ${current
                        ? 'text-emerald-400'
                        : 'text-zinc-500'
                        }`}
                >
                    {status}
                </ThemeText>

            </View>

            <MaterialIcons
                name="chevron-right"
                size={18}
                color="#71717A"
            />
        </PressableFeedback>
    );
};