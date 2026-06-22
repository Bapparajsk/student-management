import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import { PressableFeedback } from '@/components/hero-ui';
import ThemeText from '@/components/ui/ThemeText';
import { QuizCardProps } from './quizCard';

export type QuizChallengeModalProps = Omit<QuizCardProps, 'chapter' | "badge" | "onPress" | "score" | "status"> & {
    onStartChallenge?: () => void;
}

export const QuizChallengeModal = ({ title, questions, duration, difficulty, xp, participants, accuracy, onStartChallenge }: QuizChallengeModalProps) => {

    return (
        <View className="rounded-[28px] border border-white/10 bg-[#111827] p-5">

            {/* Header */}

            <View className="items-center">

                <View className="h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10">
                    <MaterialIcons
                        name="psychology"
                        size={28}
                        color="#22D3EE"
                    />
                </View>

                <ThemeText className="mt-3 text-xl font-poppins-semibold text-white">
                    Quiz Challenge
                </ThemeText>

                <ThemeText className="mt-1 text-zinc-400">
                    {title}
                </ThemeText>

            </View>

            {/* Meta */}

            <View className="mt-5 flex-row items-center justify-center">

                <ThemeText className="text-zinc-300">
                    {questions} Questions
                </ThemeText>

                <View className="mx-3 h-1 w-1 rounded-full bg-zinc-600" />

                <ThemeText className="text-zinc-300">
                    {duration} Min
                </ThemeText>

                <View className="mx-3 h-1 w-1 rounded-full bg-zinc-600" />

                <ThemeText className="text-amber-400">
                    {difficulty}
                </ThemeText>

            </View>

            {/* Stats */}

            <View className="mt-5 flex-row gap-2">

                <View className="flex-1 rounded-2xl bg-white/5 p-3 items-center">
                    <MaterialIcons
                        name="stars"
                        size={20}
                        color="#FACC15"
                    />

                    <ThemeText className="mt-1">
                        +{xp} XP
                    </ThemeText>
                </View>

                <View className="flex-1 rounded-2xl bg-white/5 p-3 items-center">
                    <MaterialIcons
                        name="group"
                        size={20}
                        color="#A78BFA"
                    />

                    <ThemeText className="mt-1">
                        {participants.toLocaleString()}
                    </ThemeText>
                </View>

                <View className="flex-1 rounded-2xl bg-white/5 p-3 items-center">
                    <MaterialIcons
                        name="track-changes"
                        size={20}
                        color="#22D3EE"
                    />

                    <ThemeText className="mt-1">
                        {accuracy}%
                    </ThemeText>
                </View>

            </View>

            {/* AI */}

            <View className="mt-4 rounded-2xl border border-cyan-500/10 bg-cyan-500/4 p-4">

                <View className="flex-row items-center">

                    <View className="h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">
                        <MaterialIcons
                            name="smart-toy"
                            size={18}
                            color="#22D3EE"
                        />
                    </View>

                    <View className="ml-3 flex-1">

                        <ThemeText className="text-cyan-400">
                            AI Coach
                        </ThemeText>

                        <ThemeText className="mt-1 text-zinc-400">
                            Expected score:
                            <ThemeText className="font-poppins-semibold text-cyan-400">
                                {' '}87%
                            </ThemeText>
                        </ThemeText>

                    </View>

                </View>

            </View>

            {/* Button */}

            <PressableFeedback onPress={onStartChallenge} className="mt-5 h-14 items-center justify-center rounded-2xl bg-cyan-500">

                <View className="flex-row items-center">

                    <MaterialIcons
                        name="rocket-launch"
                        size={20}
                        color="#fff"
                    />

                    <ThemeText className="ml-2 text-base font-poppins-semibold">
                        START CHALLENGE
                    </ThemeText>

                </View>

            </PressableFeedback>

        </View>
    );
};