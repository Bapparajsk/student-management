import React from 'react';
import { View } from 'react-native';

import Animated, {
    Extrapolation,
    interpolate,
    SharedValue,
    useAnimatedStyle,
    withSpring
} from 'react-native-reanimated';

import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Image } from 'expo-image';
import { Href, useRouter } from 'expo-router';
import { Avatar } from 'heroui-native/avatar';
import { Button } from 'heroui-native/button';
import { Surface } from 'heroui-native/surface';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from "utils/theme";
import ThemeText from '../ui/ThemeText';

export type BackButtonProps = {
    showBackButton?: boolean;
    title?: string
    href?: Href;
}

type Props = {
    scrollY: SharedValue<number>;
    pathName?: string;
    backButton?: BackButtonProps
};


const Header = ({
    scrollY,
    backButton,
    pathName
}: Props) => {
    const { top } = useSafeAreaInsets();
    const router = useRouter();

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

    const onPressBack = () => {
        if (backButton?.href) {
            router.replace(backButton.href);
        } else {
            router.back();
        }


    }

    // const onPressBack = () => {
    //         if (router.canGoBack()) {
    //             router.back();
    //             return;
    //         }

    //         if (backButton?.href) {
    //             router.replace(backButton.href);
    //         }
    //     };

    return (
        <>
            <Animated.View
                style={[
                    {
                        position: "absolute",
                        top: top + 20,
                        right: 8,
                        left: 8,
                        zIndex: 99999,
                        elevation: 9999
                    },
                    containerStyle,
                ]}
            >
                <Surface
                    className="flex-row w-full items-center justify-between p-2 bg-[#1a1a2b] border border-white/5"
                >
                    {/* left item */}
                    {backButton?.showBackButton ? (
                        <Button onPress={onPressBack} hitSlop={10} variant='ghost'>
                            <View className='flex-row gap-1 items-center'>
                                <Feather name="arrow-left" size={24} color={colors.info} />
                                <ThemeText textColor={colors.info} className='capitalize'>
                                    {backButton.title ?? pathName}
                                </ThemeText>
                            </View>
                        </Button>
                    ) : (
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
                    )}

                    {/* right item */}
                    <View className='flex-row items-center'>
                        <Button hitSlop={10} variant='ghost' isIconOnly>
                            <Fontisto name="bell" size={20} color={colors.text} />
                        </Button>
                        <Button hitSlop={10} variant='ghost' isIconOnly>
                            <Fontisto name="search" size={20} color={colors.text} />
                        </Button>
                    </View>

                </Surface>
            </Animated.View>
            {/* <Button
                variant={"tertiary"}
                className={"absolute top-20 right-10 size-16 rounded-full z-50 items-center justify-center"}
                style={[SearchButtonStyle]}
            >
                <Fontisto name="search" size={20} color={colors.text} />
            </Button> */}
        </>
    );
};

export { Header };
