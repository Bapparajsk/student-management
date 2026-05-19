import { useThemeStore } from '@/store/theme-store';
import React from 'react';
import { View } from 'react-native';

import Animated, {
    Extrapolation,
    interpolate,
    SharedValue,
    useAnimatedStyle,
    withSpring
} from 'react-native-reanimated';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    scrollY: SharedValue<number>;
};


const Header = ({
    scrollY,
}: Props) => {
    const { top } = useSafeAreaInsets();
    const colors = useThemeStore(state => state.colors);


    const containerStyle = useAnimatedStyle(() => {

        const topMargin = interpolate(
            scrollY.value,
            [0, 250],
            [top + 20, -100],
            Extrapolation.CLAMP
        );
        return {
            top: topMargin,
        }
    });


    const SearchButtonStyle = useAnimatedStyle(() => {

        const scale = interpolate(
            scrollY.value,
            [250, 260],
            [0, 1],
            Extrapolation.CLAMP
        );

        const opacity = interpolate(
            scrollY.value,
            [250, 260],
            [0, 1],
            Extrapolation.CLAMP
        );

        return {
            transform: [
                {
                    scale: withSpring(scale, {
                        damping: 30,
                        stiffness: 300,
                    }),
                },
            ],
            opacity,
        };
    });

    return (
        <>

            <Animated.View
                style={[
                    {
                        top: top + 20,
                        right: 8,
                        left: 8,
                    },
                    containerStyle,
                ]}
                className="absolute z-50 self-end "
            >
                <View
                    className="flex-row w-full items-center justify-between rounded-full overflow-hidden p-2"
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
                    <View >
                        <View
                            className=" size-14 rounded-full bg-white "
                        />
                    </View>

                    {/* right item */}
                    <View
                        className=" size-14 rounded-full bg-white "
                    />
                </View>
            </Animated.View>
            {/* <AnimatedButton
                variant={"tertiary"}
                className={"absolute top-20 right-10 size-16 rounded-full z-50 items-center justify-center"}
                style={[SearchButtonStyle]}
            >
                <Fontisto name="search" size={20} color={colors.text} />
            </AnimatedButton> */}
        </>
    );
};

export { Header };
