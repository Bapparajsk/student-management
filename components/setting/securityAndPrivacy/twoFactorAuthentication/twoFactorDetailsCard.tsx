import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import ThemeText from '@/components/ui/ThemeText';

type DetailRowProps = {
    icon: any;
    iconColor: string;
    label: string;
    value: string;
};

const DetailRow = ({
    icon,
    iconColor,
    label,
    value,
}: DetailRowProps) => {
    return (
        <View className="flex-row items-center rounded-2xl bg-white/3 p-3">
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-white/4">
                <MaterialIcons
                    name={icon}
                    size={18}
                    color={iconColor}
                />
            </View>
            <View className="ml-3 flex-1">
                <ThemeText className="text-xs text-zinc-500">
                    {label}
                </ThemeText>
                <ThemeText className="mt-1 font-poppins-medium">
                    {value}
                </ThemeText>
            </View>
        </View>
    );
};


export const TwoFactorDetailsCard = () => {
    return (
        <View className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-4">
            <ThemeText className="mb-4 font-poppins-semibold text-lg">
                Authentication Details
            </ThemeText>
            <View className="gap-3">
                <DetailRow
                    icon="smartphone"
                    iconColor="#22D3EE"
                    label="Method"
                    value="Authenticator App"
                />

                <DetailRow
                    icon="schedule"
                    iconColor="#F59E0B"
                    label="Last Verified"
                    value="Today, 09:41 AM"
                />

                <DetailRow
                    icon="vpn-key"
                    iconColor="#34D399"
                    label="Recovery Codes"
                    value="10 Available"
                />
            </View>
        </View>
    );
};