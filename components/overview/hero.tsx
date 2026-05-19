import { Text, View } from 'react-native';
import ThemeText from '../ui/ThemeText';
import { AiSearchBar } from '../ui/aiSearchBar';

import React from 'react';
import Svg, { Path } from 'react-native-svg';

const bars = [40, 60, 30, 90, 20];

export const HeroSection = () => {
    return (
        <View>
            <View className='h-20'>
                <ThemeText className='text-2xl font-poppins-semibold text-white' >
                    Good Morning, John Doe
                </ThemeText>
                <ThemeText className='text-sm font-poppins-light' >
                    Here&apos;s what&apos;s happening with your classes today.
                </ThemeText>
            </View>
            <AiSearchBar />
            <View className='w-full flex-row mt-4'>
                <View className='w-1/2 pr-2'>

                    <View className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5">
                        {/* Glow */}
                        <View className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-400/20 blur-3xl" />

                        {/* Header */}
                        <View className="mb-6 flex-row items-center gap-2">
                            <Text className="text-violet-300 text-xl">✓</Text>

                            <Text className="text-xs uppercase tracking-[2px] text-zinc-400">
                                Attendance
                            </Text>
                        </View>

                        {/* Bottom */}
                        <View className="flex-row items-end justify-between">
                            {/* Left */}
                            <View>
                                <Text className="text-5xl font-bold text-white">
                                    85
                                    <Text className="text-2xl text-zinc-300">%</Text>
                                </Text>

                                <Text className="mt-1 text-sm text-emerald-400">
                                    On Track
                                </Text>
                            </View>

                            {/* Circular Progress */}
                            <View className="relative h-14 w-14 items-center justify-center">
                                <Svg
                                    width={56}
                                    height={56}
                                    viewBox="0 0 36 36"
                                    className="-rotate-90"
                                >
                                    {/* Background */}
                                    <Path
                                        d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.1)"
                                        strokeWidth={3}
                                    />

                                    {/* Progress */}
                                    <Path
                                        d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#C4C0FF"
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        strokeDasharray="85, 100"
                                    />
                                </Svg>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='w-1/2 pl-2'>
                    <View className="rounded-3xl w-full border border-white/10 bg-white/5 p-5">
                        <View className="mb-6 flex-row items-center gap-2">
                            <Text className="text-xl text-cyan-300">📊</Text>

                            <Text className="text-xs uppercase tracking-[2px] text-zinc-400">
                                Study Hours
                            </Text>
                        </View>

                        {/* Content */}
                        <View>
                            <Text className="text-3xl font-bold text-white">
                                14.5
                                <Text className="ml-1 text-base font-medium text-zinc-400">
                                    {' '}
                                    hrs
                                </Text>
                            </Text>

                            {/* Chart */}
                            <View className="mt-3 h-10 flex-row items-end gap-1">
                                {bars.map((height, index) => (
                                    <View
                                        key={index}
                                        className={`flex-1 rounded-t-md ${index === 3
                                            ? 'bg-violet-400'
                                            : index === 1
                                                ? 'bg-violet-400/70'
                                                : index === 0
                                                    ? 'bg-violet-400/50'
                                                    : index === 2
                                                        ? 'bg-violet-400/40'
                                                        : 'bg-violet-400/20'
                                            }`}
                                        style={{
                                            height: `${height}%`,
                                        }}
                                    >
                                        {index === 3 && (
                                            <View className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-[3px] rounded-full bg-white shadow-sm" />
                                        )}
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}