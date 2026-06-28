import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Dimensions, View } from "react-native";
import Animated, { FadeIn, SharedValue, useAnimatedReaction, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { PressableFeedback } from '../hero-ui';
import { SCREEN_HORIZONTAL_PADDING } from '../ui/ScreenContent';
import { HeaderLeftComponent, HeaderProps, HeaderRightComponent } from "./header";

const { width } = Dimensions.get('window');

const headerWidth = width - SCREEN_HORIZONTAL_PADDING * 2;

export type HeaderFabProps = HeaderProps & {
    scrollY: SharedValue<number>;
}

export const HeaderFab = ({ scrollY, backButton, pathName }: HeaderFabProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const animatedWidth = useSharedValue(64);
    const right = useSharedValue(-100);
    const scale = useSharedValue(0.8);
    const opacity = useSharedValue(0);

    useEffect(() => {
        animatedWidth.value = withSpring(
            isExpanded ? headerWidth : 64,
            {
                stiffness: 200,
                mass: 0.5,
                damping: 20,
            }
        );

    }, [animatedWidth, isExpanded]);

    const containerStyle = useAnimatedStyle(() => ({
        width: animatedWidth.value,
    }));

    useAnimatedReaction(
        () => scrollY.value > 80,
        (show, prev) => {

            if (show === prev) return;

            right.value = withSpring(
                show ? SCREEN_HORIZONTAL_PADDING : -100,
                {
                    stiffness: 100,
                    mass: 0.5,
                    damping: 60,
                }
            );

            scale.value = withSpring(show ? 1 : 0.8);

            opacity.value = withSpring(show ? 1 : 0);
        }
    );

    const SearchButtonStyle =
        useAnimatedStyle(() => ({
            right: right.value,
            opacity: opacity.value,
            transform: [
                {
                    scale: scale.value,
                },
            ],
        }));


    const handlePress = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <Animated.View
            style={[{
                position: 'absolute',
                top: 50,
                right: SCREEN_HORIZONTAL_PADDING,
                zIndex: 9999
            }, SearchButtonStyle]}
        >
            <Animated.View
                className={"w-full flex-row  items-center justify-between rounded-full bg-[#202038] border border-white/5"}
                style={[containerStyle]}
            >
                {isExpanded && (
                    <Animated.View
                        entering={FadeIn.delay(250)}
                        className="pl-3"
                    >
                        <HeaderLeftComponent backButton={backButton} pathName={pathName} />
                    </Animated.View>
                )}
                <View className='flex-row'>
                    {isExpanded && (
                        <Animated.View
                            className={"justify-center flex-row items-center"}
                            entering={FadeIn.delay(250)}
                        >
                            <HeaderRightComponent />
                            <PressableFeedback onPress={handlePress} className='size-16 items-center justify-center border-l border-white/10'>
                                <Feather
                                    name="arrow-right-circle"
                                    size={24}
                                    color="white"
                                />
                            </PressableFeedback>
                        </Animated.View>
                    )}
                    {!isExpanded && (
                        <PressableFeedback onPress={handlePress} className='size-16 items-center justify-center'>
                            <Feather
                                name="arrow-left-circle"
                                size={24}
                                color="white"
                            />
                        </PressableFeedback>
                    )}
                </View>
            </Animated.View>
        </Animated.View>
    )
}