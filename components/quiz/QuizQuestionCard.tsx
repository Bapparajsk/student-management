import { memo } from 'react';
import { View } from 'react-native';
import ThemeText from '../ui/ThemeText';

export type QuizQuestionCardProps = {
    chapter: string;
    difficulty: string;
    question: string;
};

const QuizQuestionCard = ({ chapter, difficulty, question }: QuizQuestionCardProps) => {
    return (
        <View className="mb-5 rounded-3xl border border-white/10 bg-white/4 p-5">

            <View className="mb-4 flex-row items-center justify-between">

                <View className="rounded-full bg-white/5 px-3 py-1">
                    <ThemeText className="text-xs text-zinc-400">
                        {chapter}
                    </ThemeText>
                </View>

                <View className="rounded-full bg-amber-500/10 px-3 py-1">
                    <ThemeText className="text-xs font-medium text-amber-400">
                        {difficulty}
                    </ThemeText>
                </View>

            </View>

            <ThemeText numberOfLines={10} className="text-xl font-poppins-semibold leading-8">
                {question}
            </ThemeText>

        </View>
    );
};

export default memo(QuizQuestionCard);