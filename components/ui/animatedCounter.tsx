import React, { useEffect, useState } from 'react';
import { Text, TextProps } from 'react-native';
import {
    useAnimatedReaction,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import { runOnJS } from "react-native-worklets";

type AnimatedCounterProps = TextProps & {
    value: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
};

export default function AnimatedCounter({
    value,
    duration = 1200,
    prefix = '',
    suffix = '',
    decimals = 0,
    ...props
}: AnimatedCounterProps) {
    const progress = useSharedValue(0);

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        progress.value = withTiming(value, {
            duration,
        });
    }, [value, duration]);

    useAnimatedReaction(
        () => progress.value,
        (current) => {
            runOnJS(setDisplayValue)(current);
        }
    );

    return (
        <Text {...props}>
            {prefix}
            {displayValue.toFixed(decimals)}
            {suffix}
        </Text>
    );
}