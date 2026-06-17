import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, {
    FadeInDown,
    FadeOutDown,
    LinearTransition
} from 'react-native-reanimated';
import { PressableFeedback } from '../../hero-ui';

export type FileType =
    | 'PDF'
    | 'AI_NOTE'
    | 'SLIDES'
    | 'NOTE';


interface SubjectAIFabProps {
    fileType: FileType;
}


export const getFabActions = (
    type: FileType
) => {
    switch (type) {
        case 'PDF':
            return [
                {
                    id: 'summary',
                    title: 'Summarize PDF',
                    icon: 'summarize',
                    color: '#00D5BE',
                },
                {
                    id: 'explain',
                    title: 'Explain Concepts',
                    icon: 'psychology',
                    color: '#818CF8',
                },
                {
                    id: 'quiz',
                    title: 'Generate Quiz',
                    icon: 'quiz',
                    color: '#FACC15',
                },
                {
                    id: 'flashcards',
                    title: 'Flashcards',
                    icon: 'style',
                    color: '#EC4899',
                },
            ];

        case 'SLIDES':
            return [
                {
                    id: 'summary',
                    title: 'Summarize Slides',
                    icon: 'summarize',
                    color: '#00D5BE',
                },
                {
                    id: 'study-guide',
                    title: 'Study Guide',
                    icon: 'menu-book',
                    color: '#818CF8',
                },
                {
                    id: 'quiz',
                    title: 'Quiz Me',
                    icon: 'quiz',
                    color: '#FACC15',
                },
                {
                    id: 'flashcards',
                    title: 'Flashcards',
                    icon: 'style',
                    color: '#EC4899',
                },
            ];

        case 'AI_NOTE':
            return [
                {
                    id: 'rewrite',
                    title: 'Rewrite',
                    icon: 'edit-note',
                    color: '#00D5BE',
                },
                {
                    id: 'simplify',
                    title: 'Simplify',
                    icon: 'psychology',
                    color: '#818CF8',
                },
                {
                    id: 'quiz',
                    title: 'Quiz Me',
                    icon: 'quiz',
                    color: '#FACC15',
                },
                {
                    id: 'flashcards',
                    title: 'Flashcards',
                    icon: 'style',
                    color: '#EC4899',
                },
            ];

        default:
            return [
                {
                    id: 'ask',
                    title: 'Ask AI',
                    icon: 'psychology',
                    color: '#00D5BE',
                },
                {
                    id: 'summary',
                    title: 'Summarize',
                    icon: 'summarize',
                    color: '#818CF8',
                },
                {
                    id: 'quiz',
                    title: 'Quiz Me',
                    icon: 'quiz',
                    color: '#FACC15',
                },
                {
                    id: 'flashcards',
                    title: 'Flashcards',
                    icon: 'style',
                    color: '#EC4899',
                },
            ];
    }
};

export const SubjectAIFab = ({
    fileType,
}: SubjectAIFabProps) => {

    const [open, setOpen] = useState(false);

    const actions = useMemo(
        () => getFabActions(fileType),
        [fileType]
    );


    return (
        <View className="absolute right-5 bottom-32 items-end" >
            {open && (
                <Animated.View
                    layout={LinearTransition.springify()}
                    className="mb-3 gap-y-1.5"
                >
                    {actions.map((action, index) => (
                        <Animated.View
                            key={action.id}
                            entering={FadeInDown
                                .delay((actions.length - 1 - index) * 80)
                                .springify()
                                .damping(14)
                                .stiffness(120)}
                            exiting={FadeOutDown.duration(150)}
                        >
                            <PressableFeedback className="flex-row items-center self-end rounded-full border border-white/10 bg-[#1a1a2b] px-4 py-3">
                                <MaterialIcons
                                    name={action.icon as any}
                                    size={18}
                                    color={action.color}
                                />

                                <Text className="ml-2 font-medium text-white">
                                    {action.title}
                                </Text>
                            </PressableFeedback>
                        </Animated.View>
                    ))}
                </Animated.View>
            )}

            <PressableFeedback
                onPress={() => setOpen(!open)}
                className="h-14 w-14 items-center justify-center rounded-full"
                style={{
                    backgroundColor: '#818CF8',

                }}
            >
                <LinearGradient
                    colors={['#00D5BE', '#3B82F6']}
                    className="h-14 w-14 items-center justify-center"
                    style={{
                        borderRadius: 9999,
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <MaterialIcons
                        name={
                            open
                                ? 'close'
                                : 'auto-awesome'
                        }
                        size={28}
                        color="white"
                    />
                </LinearGradient>
            </PressableFeedback>
        </View>
    );
};