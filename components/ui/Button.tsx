import React from 'react';
import {
    Pressable,
    PressableProps,
    TextStyle,
    View,
    ViewStyle
} from 'react-native';

import Animated, {
    interpolate,
    SharedValue,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

import { useThemeStore } from '@/store/theme-store';
import { cn } from '@/utils/ch';
import ThemeText from './ThemeText';

function pressInAnimation(
    scale: SharedValue<number>,
    localGlow: SharedValue<number>,
    glow: boolean,
) {
    'worklet';
    scale.value = withSpring(0.93, {
        damping: 12,
        stiffness: 220,
    });


    if (glow) {
        localGlow.value = withTiming(1, {
            duration: 250,
        });
    }
}

function pressOutAnimation(
    scale: SharedValue<number>,
    localGlow: SharedValue<number>,
    glow: boolean,
) {
    'worklet';
    scale.value = withSpring(1, {
        damping: 10,
        stiffness: 400,
    });

    if (glow) {
        localGlow.value = withTiming(0, {
            duration: 250,
        });
    }
}

const AnimatedPressable =
    Animated.createAnimatedComponent(Pressable);

type Props = PressableProps & {
    children?: React.ReactNode;

    className?: string;

    style?: ViewStyle;
    textStyle?: TextStyle;

    glow?: boolean;
};

function ButtonComponent({
    children,

    style,
    textStyle,

    className,

    glow = false,

    onPressIn,
    onPressOut,

    ...props
}: Props) {
    const scale = useSharedValue(1);
    const localGlow = useSharedValue(0);

    const colors = useThemeStore(state => state.colors);

    const animatedStyle = useAnimatedStyle(() => {

        return {
            transform: [
                {
                    scale: scale.value,
                }
            ],

            opacity: interpolate(
                scale.value,
                [0.92, 1],
                [0.85, 1],
            ),

            shadowOpacity: interpolate(
                localGlow.value,
                [0, 1],
                [0.1, 0.3],
            ),

            shadowRadius: interpolate(
                localGlow.value,
                [0, 1],
                [8, 18],
            ),
        };
    });

    const glowStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                localGlow.value,
                [0, 1],
                [0, 1],
            ),
        };
    });

    const handlePressIn: PressableProps['onPressIn'] = (e) => {
        pressInAnimation(scale, localGlow, glow);
        if (onPressIn) {
            onPressIn(e);
        }
    };

    const handlePressOut: PressableProps['onPressOut'] = (e) => {
        pressOutAnimation(scale, localGlow, glow);
        if (onPressOut) {
            onPressOut(e);
        }
    };

    return (
        <AnimatedPressable
            {...props}
            className={cn(
                'items-center justify-center rounded-2xl active:opacity-100',
                className,
            )}
            style={[animatedStyle, { backgroundColor: colors.secondary }, style]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}

        >

            {glow && (
                <Animated.View
                    pointerEvents="none"
                    style={[
                        {
                            position: 'absolute',
                            inset: 0,
                            borderRadius: 18,
                            backgroundColor: 'rgba(255,255,255,0.12)',
                        },
                        glowStyle,
                    ]}
                />
            )}

            <View
                style={{
                    zIndex: 10,
                }}
            >
                {typeof children === 'string' ? (
                    <ThemeText>
                        {children}
                    </ThemeText>
                ) : (
                    children
                )}
            </View>
        </AnimatedPressable>
    );
}

const Button = React.memo(ButtonComponent);
const AnimatedButton = Animated.createAnimatedComponent(Button);

export { AnimatedButton, Button };

