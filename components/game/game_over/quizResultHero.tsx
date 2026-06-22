import { AnimatedNumber } from '@/components/ui/animatedCounter';
import ThemeText from '@/components/ui/ThemeText';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';


export const QuizResultHero = () => {

    const trophyScale =
        useSharedValue(0);

    useEffect(() => {
        trophyScale.value =
            withSpring(1, {
                damping: 12,
                stiffness: 180,
            });
    }, []);

    const trophyStyle =
        useAnimatedStyle(() => ({
            transform: [
                {
                    scale:
                        trophyScale.value,
                },
            ],
        }));

    return (
        <View className="items-center">

            {/* Trophy */}

            <View className=" h-24 w-24 items-center justify-center rounded-full"
            >

                <LinearGradient
                    colors={[
                        '#06B6D4',
                        '#8B5CF6',
                    ]}
                    start={{
                        x: 0,
                        y: 0,
                    }}
                    end={{
                        x: 1,
                        y: 1,
                    }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 9999,
                    }}
                />

                <Animated.View
                    style={trophyStyle}
                    className="h-24 w-24 items-center justify-center"
                >
                    <MaterialIcons
                        name="emoji-events"
                        size={42}
                        color="#ffffff"
                    />
                </Animated.View>

            </View>



            {/* Score */}

            <AnimatedNumber
                value='92'
                suffix='%'
                size="xl"
                color="#22D3EE"
                wrapperStyle={{ marginTop: 20 }}
            />


            <ThemeText className="mt-2 text-xl font-poppins-semibold text-white">
                Quiz Complete!
            </ThemeText>

            {/* Badge */}

            <View className="mt-3 flex-row items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

                <MaterialIcons
                    name="verified"
                    size={16}
                    color="#34D399"
                />

                <ThemeText className="ml-2 font-medium text-emerald-400">
                    Excellent Performance
                </ThemeText>

            </View>

            {/* XP + Streak */}

            <View className="mt-4 flex-row gap-3">

                <View className="flex-row items-center rounded-full bg-violet-500/10 px-3 py-2">

                    <MaterialIcons
                        name="stars"
                        size={16}
                        color="#A855F7"
                    />

                    <ThemeText className="ml-2 text-violet-400">
                        +250 XP
                    </ThemeText>

                </View>

                <View className="flex-row items-center rounded-full bg-orange-500/10 px-3 py-2">

                    <MaterialIcons
                        name="local-fire-department"
                        size={16}
                        color="#FB923C"
                    />

                    <ThemeText className="ml-2 text-orange-400">
                        +1 Streak
                    </ThemeText>

                </View>

            </View>

        </View>
    );
};