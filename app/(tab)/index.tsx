import { ScreenContent } from '@/components/ui/ScreenContent';
import { useThemeStore } from '@/store/theme-store';

import { Button, StyleSheet, Text, View } from 'react-native';


export default function Classes() {

    const toggleTheme = useThemeStore(state => state.toggleTheme);

    return (
        <ScreenContent path='(tab)/classes'>
            <View className='flex-1 items-center justify-center'>
                <Button title='Toggle Theme' onPress={toggleTheme} />
            </View>
            {Array.from({ length: 30 }).map((_, i) => (
                <View
                    key={i}
                    style={{
                        height: 100,
                        backgroundColor: '#222',
                        marginBottom: 15,
                        borderRadius: 20,
                        justifyContent: 'center',
                        paddingHorizontal: 20,
                    }}
                >
                    <Text style={{ color: 'white' }}>
                        Card {i + 1}
                    </Text>
                </View>
            ))}
        </ScreenContent>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
});
