import { View } from 'react-native'
import ThemeText from '../ui/ThemeText'

export const HeroSection = () => {
    return (
        <View className='h-20'>
            <ThemeText className='text-2xl font-poppins-semibold text-white' >
                Good Morning, John Doe
            </ThemeText>
            <ThemeText className='text-sm font-poppins-light' >
                Here&apos;s what&apos;s happening with your classes today.
            </ThemeText>
        </View>
    )
}