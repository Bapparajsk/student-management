import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import ThemeText from '../ui/ThemeText';

type QuizFooterProps = {
    currentQuestion: number;
    totalQuestions: number;
    hasAnswered?: boolean;
    onPress?: () => void;
};

export const QuizFooter = ({
    currentQuestion,
    totalQuestions,
    hasAnswered,
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

            <View className="mb-4 items-center">

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
                            <View
                                key={index}
                                className={`rounded-full ${current
                                    ? 'h-2.5 w-6 bg-cyan-400'
                                    : completed
                                        ? 'h-2.5 w-2.5 bg-emerald-400'
                                        : 'h-2.5 w-2.5 bg-white/10'
                                    }`}
                            />
                        );
                    })}

                </View>

                <ThemeText className="mt-3 text-sm text-zinc-500">
                    Question {currentQuestion} of {totalQuestions}
                </ThemeText>

            </View>

            {/* Action Button */}

            <View
                className="h-14 flex-row items-center justify-center rounded-2xl bg-cyan-500"
            >
                <ThemeText className="font-poppins-semibold text-white">
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
            </View>
        </View>
    );
};