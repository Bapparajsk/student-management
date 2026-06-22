import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

type ProgressLineProps = {
    current: number;
    total: number;
};

export default function ProgressLine({
    total,
    current,
}: ProgressLineProps) {

    const progressWidth = useSharedValue(0);

    useEffect(() => {
        const percentage =
            total === 0
                ? 0
                : (current / total) * 100;

        progressWidth.value = withSpring(
            percentage,
            {
                stiffness: 120,
                damping: 30,
                mass: 0.7,
            }
        );
    }, [total, current]);

    const progressStyle = useAnimatedStyle(() => ({
        width: `${progressWidth.value}%`,
    }));

    return (
        <View className="overflow-hidden rounded-full bg-white/5">
            <View className="h-1.5">
                <Animated.View
                    style={progressStyle}
                    className="h-full rounded-full bg-cyan-400"
                />
            </View>
        </View>
    );
}