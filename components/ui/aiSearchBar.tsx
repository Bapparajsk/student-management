import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';

import { useThemeStore } from '@/store/theme-store';
import { Button } from 'heroui-native/button';
import ThemeText from './ThemeText';

export const AiSearchBar = () => {

    const colors = useThemeStore(state => state.colors);

    return (
        <LinearGradient
            colors={[
                '#1FA8D5', // blue
                '#9C9ED7', // white
                '#10ADD4', // green
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
                padding: 2, // border thickness
                borderRadius: 20,
                width: '100%',
            }}
        >
            <View
                style={{ borderRadius: 10, overflow: 'hidden', }}
            >
                <Button
                    className="w-full px-2"
                    variant='ghost'
                    style={{ backgroundColor: colors.card, borderRadius: 20, }}
                >
                    <View className='w-full flex-row items-center justify-between'>
                        <Ionicons name="sparkles-outline" size={24} color={"#1FA8D5"} className='rotate-90' />
                        <ThemeText numberOfLines={1} style={{ maxWidth: '80%' }} className='text-sm text-gray-400' >
                            Ask me anything about your classes, assignments, or schedule!
                        </ThemeText>
                        <Button variant='primary' isIconOnly size='sm' className='rounded-2xl'>
                            <Feather name="send" size={18} color={"#FFF"} />
                        </Button>
                    </View>
                </Button>
            </View>
        </LinearGradient>
    )
}