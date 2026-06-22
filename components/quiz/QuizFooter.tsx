import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';

type QuizFooterProps = {
    currentQuestion: number;
    totalQuestions: number;
    hasAnswered?: boolean;
    onPress?: () => void;
};

type ProgressDotProps = {
    active: boolean;
    completed: boolean;
};

const ProgressDot = ({
    active,
    completed,
}: ProgressDotProps) => {

    const animatedStyle =
        useAnimatedStyle(() => ({
            width: withSpring(
                active ? 24 : 10,
                {
                    damping: 30,
                    stiffness: 120,
                }
            ),
            transform: [
                {
                    scale: withSpring(
                        active ? 1.1 : 1,
                        {
                            damping: 30,
                            stiffness: 120,
                        }
                    ),
                },
            ],
        }));

    return (
        <Animated.View
            style={animatedStyle}
            className={`h-2.5 rounded-full ${active
                ? 'bg-cyan-400'
                : completed
                    ? 'bg-emerald-400'
                    : 'bg-white/10'
                }`}
        />
    );
};

export const QuizFooter = ({
    currentQuestion,
    totalQuestions,
    hasAnswered,
    onPress,
}: QuizFooterProps) => {

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

                        const completed =
                            index + 1 <
                            currentQuestion;

                        const current =
                            index + 1 ===
                            currentQuestion;

                        return (
                            <ProgressDot
                                key={index}
                                active={current}
                                completed={completed}
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