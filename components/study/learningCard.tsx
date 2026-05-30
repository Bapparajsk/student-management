import { colors } from '@/utils/theme';
import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { View } from 'react-native';
import { Button, Slider } from '../hero-ui';
import { HeaderTitle } from '../ui/headerTitle';
import ThemeText from '../ui/ThemeText';

export const ContinueLearningCard = () => {
    return (
        <View className='mt-3'>

            <HeaderTitle
                startIcon={<AntDesign name="play-circle" size={24} color="#2DD4BF" />}
                leftText={"Continue Learning"}
            />

            <View className="rounded-2xl border border-white/10 bg-white/5 p-4 relative overflow-hidden">
                <View className="absolute right-0 top-0 size-20 rounded-bl-full bg-violet-500/10" />

                {/* Mobile Friendly Layout */}
                <View className="gap-4">

                    {/* Course Info */}
                    <View className="flex-row gap-4">

                        {/* Thumbnail */}
                        <View className="h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-800">
                            <View className="absolute inset-0 bg-violet-500/10" />

                            <MaterialIcons
                                name="memory"
                                size={36}
                                color={colors.secondary}
                            />
                        </View>

                        {/* Details */}
                        <View className="flex-1">
                            <ThemeText className="mb-1 text-xs uppercase tracking-widest" textColor='#00D5BE'>
                                Computer Science
                            </ThemeText>

                            <ThemeText className="mb-3 text-lg font-poppins-semibold text-white">
                                Neural Networks Basics
                            </ThemeText>

                            {/* Progress */}
                            <View className="mb-1 items-center gap-2">
                                <Slider
                                    minValue={0}
                                    maxValue={100}
                                    step={1}
                                    formatOptions={{ style: "percent" }}

                                    value={80}
                                >
                                    <View className="flex-row items-center justify-end">
                                        <Slider.Output >
                                            {({ state }) => (
                                                <ThemeText className="text-xs text-zinc-500">
                                                    {state.values}%
                                                </ThemeText>
                                            )}
                                        </Slider.Output>
                                    </View>
                                    <Slider.Track>
                                        <Slider.Fill style={{ backgroundColor: colors.secondary }} />
                                        <Slider.Thumb isDisabled style={{ backgroundColor: colors.secondary }} />
                                    </Slider.Track>
                                </Slider>
                            </View>

                            <ThemeText className="text-xs text-zinc-500" numberOfLines={2}>
                                Module 3: Backpropagation • 5 modules left
                            </ThemeText>
                        </View>
                    </View>

                    {/* Resume Button */}
                    <Button
                        style={{
                            backgroundColor: colors.secondary,
                        }}
                        variant='outline'
                    >
                        <ThemeText className="font-semibold text-white">
                            Resume
                        </ThemeText>
                    </Button>
                </View>
            </View>
        </View >
    );
};