import React from 'react';
import { View } from 'react-native';

import Animated, {
    Extrapolation,
    interpolate,
    SharedValue,
    useAnimatedStyle,
    withSpring
} from 'react-native-reanimated';

import { colors } from "@/utils/theme";
import Fontisto from '@expo/vector-icons/Fontisto';
import { Image } from 'expo-image';
import { Avatar } from 'heroui-native/avatar';
import { Button } from 'heroui-native/button';
import { Surface } from 'heroui-native/surface';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ThemeText from '../ui/ThemeText';

type Props = {
    scrollY: SharedValue<number>;
};


const Header = ({
    scrollY,
}: Props) => {
    const { top } = useSafeAreaInsets();


    const containerStyle = useAnimatedStyle(() => {

        const topMargin = interpolate(
            scrollY.value,
            [0, 300],
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
            [300, 310],
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
                <Surface
                    className="flex-row w-full items-center justify-between overflow-hidden p-2"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                >
                    {/* left item */}
                    <View className='flex-row items-center'>
                        <Avatar >
                            <Avatar.Image source={{ uri: "https://tse1.mm.bing.net/th/id/OIP.axox6gfX5G9P4KscalXBiQHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }} asChild>
                                <Image style={{ width: '100%', height: '100%' }} contentFit="cover" />
                            </Avatar.Image>
                            <Avatar.Fallback>
                                <ThemeText>
                                    JD
                                </ThemeText>
                            </Avatar.Fallback>
                        </Avatar>
                        <View className='ml-3'>
                            <ThemeText style={{ color: colors.text }}>
                                Bapparaj sk
                            </ThemeText>
                            <ThemeText className="text-xs" style={{ color: colors.textSecondary }}>
                                @bapparajsk
                            </ThemeText>
                        </View>
                    </View>

                    {/* right item */}
                    <View className='flex-row items-center gap-2'>
                        <Button hitSlop={10} variant='ghost' isIconOnly>
                            <Fontisto name="bell" size={20} color={colors.text} />
                        </Button>
                        <Button hitSlop={10} variant='ghost' isIconOnly>
                            <Fontisto name="search" size={20} color={colors.text} />
                        </Button>
                    </View>

                </Surface>
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
