import { View } from 'react-native';
import ThemeText from '../ui/ThemeText';
import { AiSearchBar } from '../ui/aiSearchBar';

import { useThemeStore } from '@/store/theme-store';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Card } from 'heroui-native/card';
import { Text } from 'heroui-native/text';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const bars = [40, 60, 30, 90, 850];

export const HeroSection = () => {

    const colors = useThemeStore(state => state.colors);

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
            <View className='w-full flex-row mt-4 h-36'>
                <View className='w-1/2 pr-2 h-full'>
                    <Card className='border h-full dark:border-white/10 dark:bg-white/5 bg-black/5 border-border'>
                        <View className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-400/20 blur-3xl" />
                        <Card.Header>
                            <View className="mb-6 flex-row items-center gap-2">
                                <Text className="text-violet-300 text-xl">✓</Text>
                                <Text className="text-xs uppercase font-poppins-medium tracking-[2px] text-zinc-400">
                                    Attendance
                                </Text>
                            </View>
                        </Card.Header>
                        {/* Bottom*/}
                        <Card.Body>
                            <View className="flex-row items-end justify-between">
                                {/* Left */}
                                <View>
                                    <Text className="text-5xl font-poppins-semibold">
                                        85
                                        <Text className="text-2xl text-zinc-600 dark:text-zinc-300">%</Text>
                                    </Text>

                                    <Text className="mt-1 text-xs font-poppins-light text-emerald-400 tracking-tight">
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
                                            strokeDasharray="10, 100"
                                        />
                                    </Svg>
                                </View>
                            </View>
                        </Card.Body>
                    </Card>
                </View>
                <View className='w-1/2 pl-2 h-full'>
                    <Card className='border h-full dark:border-white/10 dark:bg-white/5 bg-black/5 border-border'>
                        <View className=" flex-row items-center gap-2">
                            <MaterialIcons name="auto-graph" size={24} color={colors.text} />
                            <Text className="text-xs uppercase tracking-[2px] text-zinc-400">
                                Study Hours
                            </Text>
                        </View>

                        {/* Content */}
                        <View className='mt-2'>
                            <Text className="text-3xl font-poppins-semibold">
                                14.5
                                <Text className="ml-1 text-base font-medium text-zinc-400">
                                    {' '}
                                    hrs
                                </Text>
                            </Text>

                            {/* Chart */}
                            <View className=" h-10 flex-row items-end gap-1">
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
                                            height: `${height % 100}%`,
                                        }}
                                    />
                                ))}
                            </View>
                        </View>
                    </Card>
                </View>
            </View>
        </View>

    )
}