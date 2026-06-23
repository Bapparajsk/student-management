import ThemeText from '@/components/ui/ThemeText';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { PressableFeedback } from '../../hero-ui';

type QuizResultActionsProps = {
    weakTopics?: string[];
    onContinue?: () => void;
    onAnalyze?: () => void;
};

export const QuizResultActions = ({
    weakTopics = [
        'SQL Joins',
        'Transactions',
        'Normalization',
    ],
    onContinue,
    onAnalyze,
}: QuizResultActionsProps) => {
    return (
        <View className="mt-5">

            {/* AI Teaser */}

            <View className="mb-3 rounded-2xl border border-cyan-500/10 bg-cyan-500/4 p-3">

                <View className="flex-row items-center">

                    <MaterialIcons
                        name="auto-awesome"
                        size={18}
                        color="#22D3EE"
                    />

                    <ThemeText className="ml-2 text-cyan-400">
                        AI Insights Ready
                    </ThemeText>

                </View>

                <ThemeText className="mt-2 text-sm text-zinc-400">
                    We found areas that could improve your score.
                </ThemeText>

                <View className="mt-3 flex-row flex-wrap gap-2">

                    {weakTopics.map(topic => (
                        <View
                            key={topic}
                            className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5"
                        >
                            <ThemeText className="text-xs text-zinc-300">
                                {topic}
                            </ThemeText>
                        </View>
                    ))}

                </View>

            </View>

            {/* Primary Button */}
            <View className="flex-row gap-3">
                <PressableFeedback
                    onPress={onContinue}
                    className="
                    h-12
                    flex-row
                    flex-[0.6]
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500
                "
                >
                    <MaterialIcons
                        name="dashboard"
                        size={20}
                        color="#FFFFFF"
                    />

                    <ThemeText className="ml-2 font-poppins-semibold text-white">
                        Continue
                    </ThemeText>

                </PressableFeedback>

                {/* Secondary Button */}

                <PressableFeedback
                    onPress={onAnalyze}
                    className="
                    h-12
                    flex-row
                    flex-[0.4]
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-500/15
                    bg-cyan-500/4
                "
                >
                    <MaterialIcons
                        name="psychology"
                        size={18}
                        color="#22D3EE"
                    />

                    <ThemeText className="ml-2 font-poppins-medium text-cyan-400">
                        AI Analysis
                    </ThemeText>

                </PressableFeedback>

            </View>
        </View>
    );
};