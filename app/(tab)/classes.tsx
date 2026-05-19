import { useThemeStore } from '@/store/theme-store';
import type { StaticScreenProps } from '@react-navigation/native';
import { ScreenContent } from 'components/ui/ScreenContent';
import { Button } from 'heroui-native/button';

import { StyleSheet } from 'react-native';

type Props = StaticScreenProps<{
    name: string;
}>;

export default function Classes({ route }: Props) {

    const { toggleTheme, mode } = useThemeStore();

    return (
        <ScreenContent
            path="screens/classes.tsx"
        >
            <Button onPress={toggleTheme}>
                {mode}
            </Button>
        </ScreenContent>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
});
