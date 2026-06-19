import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { PressableFeedback } from './hero-ui';
import ThemeText from './ui/ThemeText';

type AppFooterProps = {
    version?: string;
    university?: string;
};

export default function AppFooter({
    version = '1.0.0',
    university = 'XYZ University',
}: AppFooterProps) {

    return (

        <View className="mt-10 items-center border-t border-white/10">

            {/* Brand */}
            <View className="flex-row items-center mt-5">
                <MaterialIcons
                    name="auto-awesome"
                    size={18}
                    color="#22D3EE"
                />

                <ThemeText className="ml-2 text-sm font-poppins-semibold">
                    Aether Campus
                </ThemeText>
            </View>

            {/* Team Button */}
            <PressableFeedback
                className="mt-3 flex-row items-center rounded-full border border-white/10 bg-white/4 px-4 py-2"
            >
                <MaterialIcons
                    name="groups"
                    size={16}
                    color="#A78BFA"
                />

                <ThemeText className="mx-2 text-xs font-medium text-zinc-300">
                    Meet the Team
                </ThemeText>

                <MaterialIcons
                    name="chevron-right"
                    size={16}
                    color="#71717A"
                />
            </PressableFeedback>

            {/* Version */}
            <ThemeText className="mt-3 text-center text-[11px] text-zinc-600">
                v{version} • {university}
            </ThemeText>

            <ThemeText className="mt-1 text-center text-[10px] text-zinc-700">
                © 2026 All Rights Reserved
            </ThemeText>
        </View>
    );
}