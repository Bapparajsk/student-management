import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';

type Props = {
    letter: string;
    text: string;
    selected?: boolean;
    onPress?: () => void;
};

export const QuizOptionCard = ({
    letter,
    text,
    selected,
    onPress,
}: Props) => {
    return (
        <PressableFeedback
            onPress={onPress}
            className={`mb-3 rounded-2xl border p-4 ${selected
                ? 'border-cyan-400 bg-cyan-500/10'
                : 'border-white/10 bg-white/[0.03]'
                }`}
        >
            <View className="flex-row items-center">

                <View
                    className={`h-10 w-10 items-center justify-center rounded-full ${selected
                        ? 'bg-cyan-500'
                        : 'bg-white/5'
                        }`}
                >
                    <ThemeText
                        className={`font-poppins-semibold ${selected
                            ? 'text-white'
                            : 'text-zinc-400'
                            }`}
                    >
                        {letter}
                    </ThemeText>
                </View>

                <ThemeText
                    numberOfLines={2}
                    className={`ml-4 flex-1 text-base ${selected
                        ? 'font-semibold text-white'
                        : 'text-zinc-300'
                        }`}
                >
                    {text}
                </ThemeText>

                {selected && (
                    <MaterialIcons
                        name="check-circle"
                        size={22}
                        color="#22D3EE"
                    />
                )}

            </View>
        </PressableFeedback>
    );
};