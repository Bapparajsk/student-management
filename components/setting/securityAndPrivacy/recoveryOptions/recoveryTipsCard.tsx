import { View } from 'react-native';

import ThemeText from '@/components/ui/ThemeText';
import { MaterialIcons } from '@expo/vector-icons';

type TipRowProps = {
    icon: keyof typeof MaterialIcons.glyphMap;
    text: string;
    color: string;
};

const TipRow = ({
    icon,
    text,
    color,
}: TipRowProps) => {
    return (
        <View className="relative flex-row items-center rounded-2xl bg-white/3 p-3">

            <View
                className="h-11 w-11 items-center justify-center rounded-xl bg-white/4"
            >
                <MaterialIcons
                    name={icon}
                    size={18}
                    color={color}
                />
            </View>

            <ThemeText
                className="ml-3 flex-1 text-sm leading-5 text-zinc-300"
            >
                {text}
            </ThemeText>

        </View>
    );
};

export const RecoveryTipsCard = () => {
    return (
        <View className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-4">

            <ThemeText className="mb-4 text-lg font-poppins-semibold">
                Recovery Tips
            </ThemeText>

            <View className="gap-4">

                <TipRow
                    icon="mail"
                    text="Keep your recovery email updated"
                    color="#22D3EE"
                />

                <TipRow
                    icon="phone"
                    text="Verify your recovery phone number"
                    color="#34D399"
                />

                <TipRow
                    icon="vpn-key"
                    text="Store backup codes safely"
                    color="#F59E0B"
                />

            </View>

        </View>
    )
}
