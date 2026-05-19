import { useThemeStore } from '@/store/theme-store';
import React from 'react';
import { Dimensions, View } from 'react-native';

import Animated, {
    Easing,
    Extrapolation,
    interpolate,
    SharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    scrollY: SharedValue<number>;
};

const windowWidth =
    Dimensions.get('window').width;

const ChatHeader = ({
    scrollY,
}: Props) => {
    const { top } = useSafeAreaInsets();
    const colors = useThemeStore(state => state.colors);

    /*
      STEP 1
      fully remove left item
    */
    const leftItemStyle =
        useAnimatedStyle(() => {
            const marginRight =
                interpolate(
                    scrollY.value,
                    [0, 20],
                    [12, 0],
                    Extrapolation.CLAMP
                );

            const scale =
                interpolate(
                    scrollY.value,
                    [0, 20],
                    [1, 0],
                    Extrapolation.CLAMP
                );

            return {
                marginRight,
                transform: [
                    {
                        scale
                    },
                ],

                overflow: 'hidden',
            };
        });

    const leftContainerWidth = useAnimatedStyle(() => {
        const width =
            interpolate(
                scrollY.value,
                [20, 30],
                [56 + 12, 0],
                Extrapolation.CLAMP
            );

        return {
            width,
        };
    })

    const containerStyle =
        useAnimatedStyle(() => {
            const width =
                interpolate(
                    scrollY.value,
                    [30, 50],
                    [windowWidth - 16, 56 + 8],
                    Extrapolation.CLAMP
                );

            return {
                width: withTiming(width, {
                    duration: 150,
                    easing: Easing.out(Easing.ease),
                }),
            };
        });

    return (
        <Animated.View
            style={[
                {
                    top: top + 20,
                    right: 8,
                },
                containerStyle,
            ]}
            className="absolute z-50 self-end"
        >
            <Animated.View
                className="flex-row items-center justify-between rounded-full overflow-hidden p-2"
                style={{
                    backgroundColor: colors.card,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 3.5,
                    elevation: 3,
                }}
            >
                {/* left item */}
                <Animated.View
                    style={[leftItemStyle, leftContainerWidth]}
                >
                    <View
                        className=" size-14 rounded-full bg-white "
                    />
                </Animated.View>

                {/* right item */}
                <View
                    className=" size-14 rounded-full bg-white "
                />
            </Animated.View>
        </Animated.View>
    );
};

export { ChatHeader };
