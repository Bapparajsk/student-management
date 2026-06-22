import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import ThemeText from '@/components/ui/ThemeText';
import { useQuizNavigationStore } from 'store/quizGame/quizNavigactionStore';
import ProgressLine from '../ui/progressLine';

type QuizGameHeaderProps = {
    currentQuestion: number;
    timeLeft: string;
};

export const QuizGameHeader = ({
    currentQuestion,
    timeLeft,
}: QuizGameHeaderProps) => {

    const {
        totalAnswered,
        totalQuestions,
    } = useQuizNavigationStore((state) => ({
        totalAnswered: state.totalAnswered,
        totalQuestions: state.totalQuestions,
    }));


    return (
        <View className="px-4 pt-2 pb-4">

            {/* Header Row */}
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

                    <ThemeText className="mt-1 text-xs text-zinc-500">
                        {totalAnswered} / {totalQuestions} Answered
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

            <ProgressLine total={totalQuestions} current={totalAnswered} />

        </View>
    );
};