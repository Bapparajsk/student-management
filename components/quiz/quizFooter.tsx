import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';

import { cn } from '@/utils/ch';
import { memo, useEffect } from 'react';
import { useQuizNavigationStore } from "store/quizGame/quizNavigactionStore";
import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';

type QuizFooterProps = {
    currentQuestion: number;
    hasAnswered?: boolean;
    onPress?: () => void;
};

type ProgressDotProps = {
    index: number;
    active: boolean;
};

const ProgressDot = memo(
    ({
        index,
        active,
    }: ProgressDotProps) => {

        const status = useQuizNavigationStore(
            state => state.navigations[index]?.status
        );

        const scale = useSharedValue(active ? 1.2 : 1);

        useEffect(() => {
            scale.value = withSpring(
                active ? 1.2 : 1,
                {
                    stiffness: 220,
                    damping: 20,
                }
            );
        }, [active]);

        const animatedStyle = useAnimatedStyle(() => {
            return {
                transform: [{ scale: scale.value }],
            };
        });

        return (
            <Animated.View
                style={animatedStyle}
                className={cn(
                    "h-2.5 w-2.5 rounded-full bg-white/20",
                    {
                        "bg-cyan-400": active,
                        "bg-emerald-400": status === "correct",
                        "bg-rose-400": status === "incorrect",
                    }
                )}
            />
        );
    }
);

export const QuizFooter = ({
    currentQuestion,
    hasAnswered,
    onPress,
}: QuizFooterProps) => {

    const totalQuestions = useQuizNavigationStore(state => state.totalQuestions);
    const buttonText =
        currentQuestion === totalQuestions
            ? 'Finish Quiz'
            : hasAnswered
                ? 'Next Question'
                : 'Submit Answer';


    return (
        <View className="mt-auto pt-4">

            {/* Progress Tracker */}

            <View className="mb-5 items-center">

                <View className="flex-row items-center gap-2">

                    {Array.from({
                        length: totalQuestions,
                    }).map((_, index) => {


                        return (
                            <ProgressDot
                                key={index}
                                index={index}
                                active={
                                    currentQuestion - 1 ===
                                    index
                                }
                            />
                        );
                    })}

                </View>

            </View>

            {/* Action Button */}

            <PressableFeedback
                onPress={onPress}
                className="h-14 flex-row items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500 shadow-lg shadow-cyan-500/30"
            >

                <ThemeText className="font-poppins-semibold">
                    {buttonText}
                </ThemeText>

                <MaterialIcons
                    name={
                        currentQuestion === totalQuestions
                            ? 'flag'
                            : 'arrow-forward'
                    }
                    size={18}
                    color="#fff"
                    style={{
                        marginLeft: 8,
                    }}
                />

            </PressableFeedback>

        </View>
    );
};