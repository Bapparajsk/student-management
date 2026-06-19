import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, {
    FadeInDown,
    FadeOutDown,
    LinearTransition
} from 'react-native-reanimated';
import { Portal, PressableFeedback } from '../hero-ui';

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
export const AIFab = ({
    fileType,
}: SubjectAIFabProps) => {

    const [open, setOpen] = useState(false);

    const actions = useMemo(
        () => getFabActions(fileType),
        [fileType]
    );

    return (
        <Portal name="aifab-portal" hostName="aifab-host">

            {/* Backdrop */}
            {open && (
                <PressableFeedback
                    onPress={() => setOpen(false)}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                />
            )}

            {/* FAB Container */}
            <View
                style={{
                    position: 'absolute',
                    right: 20,
                    bottom: 120,
                    alignItems: 'flex-end',
                }}
            >
                {open && (
                    <Animated.View
                        layout={LinearTransition.springify()}
                        style={{
                            marginBottom: 12,
                            gap: 6,
                        }}
                    >
                        {actions.map(
                            (action, index) => (
                                <Animated.View
                                    key={action.id}
                                    entering={FadeInDown
                                        .delay(
                                            (actions.length -
                                                1 -
                                                index) * 80
                                        )
                                        .springify()}
                                    exiting={
                                        FadeOutDown.duration(
                                            150
                                        )
                                    }
                                >
                                    <PressableFeedback
                                        onPress={() => {
                                            console.log(
                                                action.id
                                            );

                                            setOpen(
                                                false
                                            );
                                        }}
                                        className="flex-row items-center self-end rounded-full border border-white/10 bg-[#1a1a2b] px-4 py-3"
                                    >
                                        <MaterialIcons
                                            name={
                                                action.icon as any
                                            }
                                            size={18}
                                            color={
                                                action.color
                                            }
                                        />

                                        <Text className="ml-2 font-medium text-white">
                                            {
                                                action.title
                                            }
                                        </Text>
                                    </PressableFeedback>
                                </Animated.View>
                            )
                        )}
                    </Animated.View>
                )}

                <PressableFeedback
                    onPress={() =>
                        setOpen(
                            (prev) => !prev
                        )
                    }
                    className="h-14 w-14 items-center justify-center rounded-full"
                >
                    <LinearGradient
                        colors={[
                            '#00D5BE',
                            '#3B82F6',
                        ]}
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 9999,
                            justifyContent:
                                'center',
                            alignItems:
                                'center',
                        }}
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

        </Portal>
    );
};