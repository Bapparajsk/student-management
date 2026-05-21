import { View } from 'react-native';
import ThemeText from '../ui/ThemeText';
import { AiSearchBar } from '../ui/aiSearchBar';

import { HeroSectionCards } from './heroSectionCards';


export const HeroSection = () => {
    return (
        <View>
            <View className='h-20'>
                <ThemeText className='text-2xl font-poppins-semibold' >
                    Good Morning, Bappa Raj
                </ThemeText>
                <ThemeText className='text-sm font-poppins-light' >
                    Here&apos;s what&apos;s happening with your classes today.
                </ThemeText>
            </View>
            <AiSearchBar />
            <HeroSectionCards />
        </View>

    )
}