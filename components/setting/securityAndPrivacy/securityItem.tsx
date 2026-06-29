import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import { PressableFeedback } from '@/components/hero-ui';
import ThemeText from '@/components/ui/ThemeText';

type SecurityItemProps = {
    icon: keyof typeof MaterialIcons.glyphMap;
    iconColor: string;
    title: string;
    subtitle: string;
    onPress?: () => void;
};

export const SecurityItem = ({
    icon,
    iconColor,
    title,
    subtitle,
    onPress,
}: SecurityItemProps) => {
    return (
        <PressableFeedback
            onPress={onPress}
            className="flex-row items-center px-4 py-4"
        >
            <View
                className=" h-11 w-11 items-center justify-center rounded-xl bg-white/4"
            >
                <MaterialIcons
                    name={icon}
                    size={20}
                    color={iconColor}
                />
            </View>

            <View className="ml-3 flex-1">

                <ThemeText>
                    {title}
                </ThemeText>

                <ThemeText className="mt-1 text-xs text-zinc-500">
                    {subtitle}
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