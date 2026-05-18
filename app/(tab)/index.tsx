import { useThemeStore } from '@/store/theme-store';

import { Button, StyleSheet, View } from 'react-native';


export default function Classes() {

    const toggleTheme = useThemeStore(state => state.toggleTheme);

    return (
        <View style={styles.container}>
            <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
});
