import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import Animated, {
    useAnimatedStyle,
} from 'react-native-reanimated';

import ThemeText from '@/components/ui/ThemeText';

type QuizGameHeaderProps = {
    currentQuestion: number;
    totalQuestions: number;
    timeLeft: string;
    progress: number; // 0 - 100
};

export const QuizGameHeader = ({
    currentQuestion,
    totalQuestions,
    timeLeft,
    progress,
}: QuizGameHeaderProps) => {

    const progressStyle =
        useAnimatedStyle(() => ({
            width: `${progress}%`,
        }));

    return (
        <View className="px-4 pt-2 pb-4">

            {/* Top Row */}

            <View className="mb-3 flex-row items-center justify-between">

                <View>

                    <ThemeText className="text-xs uppercase tracking-wider text-zinc-500">
                        Question
                    </ThemeText>

                    <ThemeText className="mt-1 text-lg font-poppins-semibold text-white">
                        {currentQuestion}
                        <ThemeText className="text-zinc-500">
                            {' / '}
                            {totalQuestions}
                        </ThemeText>
                    </ThemeText>

                </View>

                {/* Timer */}

                <View className="flex-row items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">

                    <MaterialIcons
                        name="timer"
                        size={16}
                        color="#22D3EE"
                    />

                    <ThemeText className="ml-2 font-poppins-semibold text-cyan-400">
                        {timeLeft}
                    </ThemeText>

                </View>

            </View>

            {/* Progress */}

            <View className="overflow-hidden rounded-full bg-white/5">

                <View className="h-1.5">

                    <Animated.View
                        style={progressStyle}
                        className="h-full rounded-full bg-cyan-400"
                    />

                </View>

            </View>

        </View>
    );
};