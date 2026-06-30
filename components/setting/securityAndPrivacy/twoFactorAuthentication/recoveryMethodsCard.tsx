import ThemeText from '@/components/ui/ThemeText';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

type RecoveryMethodRowProps = {
    icon: keyof typeof MaterialIcons.glyphMap;
    iconColor: string;
    title: string;
    value: string;
};

const RecoveryMethodRow = ({
    icon,
    iconColor,
    title,
    value,
}: RecoveryMethodRowProps) => {
    return (
        <View className="flex-row items-center rounded-2xl bg-white/3 p-3">

            <View className="h-11 w-11 items-center justify-center rounded-xl bg-white/4">
                <MaterialIcons
                    name={icon}
                    size={18}
                    color={iconColor}
                />
            </View>

            <View className="ml-3 flex-1">

                <ThemeText className="text-xs text-zinc-500">
                    {title}
                </ThemeText>

                <ThemeText className="mt-1 font-poppins-medium">
                    {value}
                </ThemeText>

            </View>

            <MaterialIcons
                name="check-circle"
                size={18}
                color="#34D399"
            />

        </View>
    );
};

export const RecoveryMethodsCard = () => {
    return (
        <View className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-4">
            <ThemeText className="mb-4 font-poppins-semibold text-lg">
                Recovery Methods
            </ThemeText>

            <View className="gap-3">

                <RecoveryMethodRow
                    icon="mail"
                    iconColor="#22D3EE"
                    title="Recovery Email"
                    value="b*****@gmail.com"
                />

                <RecoveryMethodRow
                    icon="phone"
                    iconColor="#34D399"
                    title="Recovery Phone"
                    value="+91 ******1234"
                />
            </View>
        </View>
    );
};