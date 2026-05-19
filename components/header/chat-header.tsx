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
    const { top } =
        useSafeAreaInsets();

    /*
      STEP 1
      fully remove left item
    */
    const leftItemStyle =
        useAnimatedStyle(() => {
            const width =
                interpolate(
                    scrollY.value,
                    [0, 20],
                    [56, 0],
                    Extrapolation.CLAMP
                );

            const marginRight =
                interpolate(
                    scrollY.value,
                    [0, 20],
                    [12, 0],
                    Extrapolation.CLAMP
                );

            const translateX =
                interpolate(
                    scrollY.value,
                    [0, 20],
                    [0, -80],
                    Extrapolation.CLAMP
                );

            return {
                width,

                marginRight,

                transform: [
                    {
                        translateX,
                    },
                ],

                overflow: 'hidden',
            };
        });

    const containerStyle =
        useAnimatedStyle(() => {
            const width =
                interpolate(
                    scrollY.value,
                    [20, 40],
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
            className="
        absolute
        z-50
        self-end
      "
        >
            <Animated.View
                className="
          flex-row
          items-center
          justify-between
          bg-blue-500
          rounded-full
          overflow-hidden
          p-2
        "
            >
                {/* left item */}
                <Animated.View
                    style={leftItemStyle}
                >
                    <View
                        className="
              size-14
              rounded-full
              bg-white
            "
                    />
                </Animated.View>

                {/* right item */}
                <View
                    className="
            size-14
            rounded-full
            bg-white
          "
                />
            </Animated.View>
        </Animated.View>
    );
};

export { ChatHeader };
