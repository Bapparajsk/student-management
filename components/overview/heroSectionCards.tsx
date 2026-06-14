import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Card } from 'heroui-native/card';
import React from 'react';
import { Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { colors } from "@/utils/theme";
import { useRouter } from 'expo-router';
import { PressableFeedback } from 'heroui-native/pressable-feedback';
import ThemeText from '../ui/ThemeText';
import { AnimatedDigit } from '../ui/animatedCounter';

const bars = [40, 60, 30, 90, 50];
const cardStyle = "border h-full border-white/10 bg-white/5 border-border";


export const HeroSectionCards = () => {

    const router = useRouter();

    const digits = "85".split('');

    return (
        <View className='w-full flex-row mt-4 h-36'>
            <View className='w-1/2 pr-2 h-full'>
                <PressableFeedback>
                    <Card className={cardStyle}>
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
                                    <View className='flex-row items-end'>
                                        {digits.map((digit, index) => (
                                            <AnimatedDigit
                                                key={index}
                                                digit={parseInt(digit, 10)}
                                                size="xl"
                                                color={colors.text}
                                            />
                                        ))}
                                        <ThemeText className="text-2xl text-zinc-300 mb-2">%</ThemeText>
                                    </View>
                                    <ThemeText className="mt-1 text-xs font-poppins-light text-emerald-400 tracking-tight">
                                        On Track
                                    </ThemeText>
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
                                            stroke={colors.border}
                                            strokeWidth={3}
                                        />

                                        {/* Progress */}
                                        <Path
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke={colors.secondary}
                                            strokeWidth={3}
                                            strokeLinecap="round"
                                            strokeDasharray="85, 100"
                                        />
                                    </Svg>
                                </View>
                            </View>
                        </Card.Body>
                    </Card>
                </PressableFeedback>
            </View>
            <View className='w-1/2 pl-2 h-full'>
                <PressableFeedback onPress={() => router.navigate('/study')}>
                    <Card className={cardStyle}>
                        <View className=" flex-row items-center gap-2">
                            <MaterialIcons name="auto-graph" size={24} color={colors.text} />
                            <Text className="text-xs font-poppins-medium uppercase tracking-[2px] text-zinc-400">
                                Study Hours
                            </Text>
                        </View>

                        {/* Content */}
                        <View className='mt-2'>
                            <ThemeText className="text-3xl font-poppins-semibold">
                                14.5
                                <ThemeText className="ml-1  text-zinc-400">
                                    {' '}
                                    hrs
                                </ThemeText>
                            </ThemeText>

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
                                            height: `${100 * height / 100}%`,
                                        }}
                                    />
                                ))}
                            </View>
                        </View>
                    </Card>
                </PressableFeedback>
            </View>
        </View>
    )
}