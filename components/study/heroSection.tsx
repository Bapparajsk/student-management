import React from 'react'
import { View } from 'react-native'
import HeroHeading from '../ui/heroHeading'
import ThemeText from '../ui/ThemeText'

export const HeroSection = () => {
    return (
        <View className="relative mt-2 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6">

            {/* Decorative Blur */}
            <View className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20" />

            {/* Content */}
            <View className="z-10">
                <HeroHeading
                    title="Master your day"
                    highlight="Alex?"
                />

                {/* Subtitle */}
                <ThemeText className="mt-1 text-sm text-zinc-400">
                    Your personalized study hub is ready.
                </ThemeText>

                {/* Stats */}
                <View className="mt-5 flex-row gap-3">

                    {/* Streak */}
                    <View className="flex-row items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-2">
                        <ThemeText className="text-base">🔥</ThemeText>

                        <ThemeText className="text-sm font-semibold text-white">
                            14 Days
                        </ThemeText>
                    </View>

                    {/* Score */}
                    <View className="flex-row items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-2">
                        <ThemeText className="text-base">✨</ThemeText>

                        <ThemeText className="text-sm font-semibold text-white">
                            92/100
                        </ThemeText>
                    </View>
                </View>
            </View>
        </View>
    )
}