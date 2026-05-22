import { ScreenContent } from '@/components/ui/ScreenContent';
import React from 'react';
import { Text, View } from 'react-native';

export default function StudyScreen() {
    return (
        <ScreenContent path='study' bottomBarHeight={80} header={{ showBackButton: true }}>
            <View className="relative mt-2 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6">

                {/* Decorative Blur */}
                <View className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20" />

                {/* Content */}
                <View className="z-10">

                    {/* Heading */}
                    <Text className="text-3xl font-bold text-white">
                        Master your day,{' '}
                        <Text className="font-extrabold text-sky-400">
                            Alex
                        </Text>
                    </Text>

                    {/* Subtitle */}
                    <Text className="mt-1 text-sm text-zinc-400">
                        Your personalized study hub is ready.
                    </Text>

                    {/* Stats */}
                    <View className="mt-5 flex-row gap-3">

                        {/* Streak */}
                        <View className="flex-row items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-2">
                            <Text className="text-base">🔥</Text>

                            <Text className="text-sm font-semibold text-white">
                                14 Days
                            </Text>
                        </View>

                        {/* Score */}
                        <View className="flex-row items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-2">
                            <Text className="text-base">✨</Text>

                            <Text className="text-sm font-semibold text-white">
                                92/100
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScreenContent>
    );
}