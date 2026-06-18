import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import ThemeText from './ThemeText';

export type FetcherChipProps = {
    iconName?: any;
    text: string;
}

export const FetcherChip = ({ iconName, text }: FetcherChipProps) => {
    return (
        <View className="flex-row items-center rounded-full bg-orange-500/30 border border-white/10 px-2 py-1">
            <MaterialIcons
                name={iconName ?? "local-fire-department"}
                size={14}
                color="#FB923C"
            />

            <ThemeText className="ml-0.5 text-xs text-orange-400">
                {text}
            </ThemeText>
        </View>
    )
}