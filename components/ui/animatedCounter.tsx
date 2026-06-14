import { cn } from '@/utils/ch';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

type Size = "sm" | "md" | "lg" | "xl";
const sizeMap = {
    sm: {
        height: 24,
        textSize: "text-2xl",
    },
    md: {
        height: 30,
        textSize: "text-3xl",
    },
    lg: {
        height: 36,
        textSize: "text-4xl",
    },
    xl: {
        height: 48,
        textSize: "text-5xl",
    },
}

export type AnimatedNumberProps = {
    value: string
    size?: Size
    color?: string
    prefix?: string;
    suffix?: string;
}

const idDigit = (digit: string): boolean => /^[0-9]$/.test(digit);

export const AnimatedNumber = ({ size = "md", value, color, prefix, suffix }: AnimatedNumberProps) => {

    const digits = value.toString().split('');

    return (
        <View className='flex-row'>
            {prefix && <Text
                style={{
                    color: color || "white",
                }}
                className={cn(`font-poppins-semibold ${sizeMap[size].textSize}`)}
            >
                {prefix}
            </Text>}
            {digits.map((digit, index) => (
                idDigit(digit) ? (
                    <AnimatedDigit
                        key={index}
                        digit={parseInt(digit, 10)}
                        size={size}
                        color={color}
                    />
                ) : (
                    <Text
                        key={index}
                        style={{
                            color: color || "white",
                        }}
                        className={cn(`font-poppins-semibold ${sizeMap[size].textSize}`)}
                    >
                        {digit}
                    </Text>
                )
            ))}
            {suffix && <Text
                style={{
                    color: color || "white",
                }}
                className={cn(`font-poppins-semibold ${sizeMap[size].textSize}`)}
            >
                {suffix}
            </Text>}
        </View>
    );
}

export const AnimatedDigit = ({
    digit,
    size = "md",
    color = "white",
}: {
    digit: number;
    size?: Size;
    color?: string;
}) => {
    const translateY = useSharedValue(0);

    const DIGIT_HEIGHT = sizeMap[size].height;

    useEffect(() => {
        translateY.value = withTiming(
            -digit * DIGIT_HEIGHT,
            {
                duration: 2000,
            }
        );
    }, [digit]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: translateY.value,
            },
        ],
    }));

    return (
        <View
            style={{
                height: DIGIT_HEIGHT,
                overflow: 'hidden',

            }}
        >
            <Animated.View style={animatedStyle}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <Text
                        key={i}
                        style={{
                            height: DIGIT_HEIGHT,
                            textAlign: 'center',
                            color: color,
                        }}
                        className={cn('font-poppins-semibold', sizeMap[size].textSize)}
                    >
                        {i}
                    </Text>
                ))}
            </Animated.View>
        </View>
    );
}