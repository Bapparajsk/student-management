import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';

export const QuizPowerUps = () => {
    return (
        <View className="mb-5 flex-row justify-center gap-2">
            <PressableFeedback className="flex-row items-center rounded-full border border-white/10 bg-white/3 px-4 py-2">
                <MaterialIcons
                    name="timer"
                    size={16}
                    color="#22D3EE"
                />
                <ThemeText className="ml-2 text-sm">
                    +15s
                </ThemeText>
            </PressableFeedback>

            <PressableFeedback className="flex-row items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
                <MaterialIcons
                    name="auto-awesome"
                    size={16}
                    color="#22D3EE"
                />
                <ThemeText className="ml-2 text-sm font-semibold text-cyan-400">
                    Hint
                </ThemeText>
            </PressableFeedback>

        </View>
    );
};