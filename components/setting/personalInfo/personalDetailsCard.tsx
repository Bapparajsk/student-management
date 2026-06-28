import ThemeText from '@/components/ui/ThemeText';
import { MaterialIcons } from '@expo/vector-icons';
import { PressableFeedback } from 'components/hero-ui';
import { View } from 'react-native';

const InfoRow = ({
    icon,
    label,
    value,
    verified,
}: {
    icon: any;
    label: string;
    value: string;
    verified?: boolean;
}) => (
    <PressableFeedback className="flex-row items-center px-4 py-4">

        <View className="h-10 w-10 items-center justify-center rounded-xl bg-white/4">
            <MaterialIcons
                name={icon}
                size={20}
                color="#A1A1AA"
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

        {verified && (
            <MaterialIcons
                name="verified"
                size={18}
                color="#34D399"
            />
        )}

    </PressableFeedback>
);

export const PersonalDetailsCard = () => {
    return (
        <View className="rounded-3xl border border-white/10 bg-white/3 overflow-hidden mt-3">

            <View className="px-4 py-3 border-b border-white/5">
                <ThemeText className="font-poppins-semibold text-lg">
                    Personal Details
                </ThemeText>
            </View>

            <InfoRow
                icon="person"
                label="Full Name"
                value="Bapparaj Sk"
            />

            <InfoRow
                icon="mail"
                label="Email Address"
                value="bapparaj@example.com"
                verified
            />

            <InfoRow
                icon="phone"
                label="Phone Number"
                value="+91 XXXXX XXXXX"
                verified
            />

            <InfoRow
                icon="cake"
                label="Date of Birth"
                value="12 May 2002"
            />

        </View>
    )
}