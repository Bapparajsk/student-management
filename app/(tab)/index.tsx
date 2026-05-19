import { HeroSection } from '@/components/overview';
import { ScreenContent } from '@/components/ui/ScreenContent';

import { StyleSheet } from 'react-native';


export default function Classes() {


    return (
        <ScreenContent path='(tab)/classes'>
            <HeroSection />
        </ScreenContent>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
});
