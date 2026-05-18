import type { StaticScreenProps } from '@react-navigation/native';
import { ScreenContent } from 'components/ui/ScreenContent';

import { StyleSheet, View } from 'react-native';

type Props = StaticScreenProps<{
    name: string;
}>;

export default function Classes({ route }: Props) {
    return (
        <View style={styles.container}>
            <ScreenContent
                path="screens/classes.tsx"
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
});
