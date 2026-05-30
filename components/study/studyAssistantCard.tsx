import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { View } from 'react-native';
import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';

const suggestions = [
    'Summarize Computer Science Notes',
    'Generate Quiz for DBMS',
    'Explain Neural Networks',
];

export const StudyAssistantCard = () => {
    return (
        <View className="relative mt-8 overflow-hidden rounded-3xl border border-zinc-700/50 bg-white/5 p-6">

            {/* Robot Icon */}
            <View className="mb-4 items-center">
                <View
                    className="h-14 w-14 items-center justify-center rounded-2xl border border-zinc-600 bg-zinc-800"
                    style={{
                        shadowColor: '#38BDF8',
                        shadowOpacity: 0.25,
                        shadowRadius: 12,
                        elevation: 8,
                    }}
                >
                    <FontAwesome6
                        name="robot"
                        size={28}
                        color="#7DD3FC" />
                </View>
            </View>

            {/* Title */}
            <ThemeText className="mb-2 text-center text-xl font-poppins-semibold">
                Study Assistant
            </ThemeText>

            <ThemeText className="mb-6 text-center text-xs" textColor='#d4d4d8'>
                How can I help you accelerate learning today?
            </ThemeText>

            {/* Voice Button */}
            <PressableFeedback className="mb-6 flex-row items-center justify-center gap-2 rounded-full border border-zinc-600 bg-zinc-800/80 px-4 py-3">
                <MaterialIcons
                    name="mic"
                    size={18}
                    color="#9CA3AF"
                />

                <ThemeText textColor={"#e4e4e7"}>
                    Tap to speak
                </ThemeText>
            </PressableFeedback>

            {/* Suggestions */}
            <View className="gap-2">
                {suggestions.map((item, index) => (
                    <PressableFeedback
                        key={index}
                        className="rounded-2xl border border-zinc-700/50 bg-zinc-800/40 px-4 py-3"
                    >
                        <ThemeText className="text-xs" textColor={"#d4d4d8"}>
                            &quot;{item}&quot;
                        </ThemeText>
                    </PressableFeedback>
                ))}
            </View>
        </View>
    );
};