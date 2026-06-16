import ThemeText from '@/components/ui/ThemeText';
import { colors } from '@/utils/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useMemo } from 'react';
import { View } from 'react-native';
import { Button, PressableFeedback } from '../../hero-ui';

type SubjectContext = {
    subjectName: string;
    currentChapter: string;
    weakTopic?: string;
};

interface AIStudyToolsCardProps {
    context: SubjectContext;
}

const getAITools = (
    context: SubjectContext
) => {
    return [
        {
            id: 'summary',
            title: 'Summarize',
            subtitle: context.currentChapter,
            icon: 'summarize',
            color: '#00D5BE',
        },
        {
            id: 'flashcards',
            title: 'Flashcards',
            subtitle: context.subjectName,
            icon: 'style',
            color: '#818CF8',
        },
        {
            id: 'quiz',
            title: 'Quiz Me',
            subtitle: context.subjectName,
            icon: 'quiz',
            color: '#FACC15',
        },
        {
            id: 'explain',
            title: 'Explain',
            subtitle: context.currentChapter,
            icon: 'psychology',
            color: '#EC4899',
        },
    ];
};

const getAISuggestions = (
    context: SubjectContext
) => {
    const items = [];

    if (context.weakTopic) {
        items.push({
            id: 'weak-topic',
            title: 'Weak Topic',
            subtitle: context.weakTopic,
            icon: 'warning',
            color: '#EF4444',
        });
    }

    items.push({
        id: 'review',
        title: 'Review',
        subtitle: context.currentChapter,
        icon: 'refresh',
        color: '#FACC15',
    });

    items.push({
        id: 'quiz',
        title: 'Quiz Me',
        subtitle: context.subjectName,
        icon: 'quiz',
        color: '#00D5BE',
    });

    items.push({
        id: 'flashcards',
        title: 'Flashcards',
        subtitle: context.currentChapter,
        icon: 'style',
        color: '#818CF8',
    });

    return items.slice(0, 4);
};

export const AIStudyToolsCard = ({
    context,
}: AIStudyToolsCardProps) => {
    const tools = useMemo(
        () => getAITools(context),
        [context]
    );

    const suggestions = useMemo(
        () => getAISuggestions(context),
        [context]
    );

    return (
        <View className="overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/5 p-4">

            {/* Header */}
            <View className="mb-5 flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">

                    <View className="h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10">
                        <MaterialIcons
                            name="auto-awesome"
                            size={22}
                            color="#00D5BE"
                        />
                    </View>

                    <View>
                        <ThemeText className="text-lg font-poppins-semibold">
                            AI Study Tools
                        </ThemeText>

                        <ThemeText className="text-xs text-zinc-500">
                            Personalized for {context.subjectName}
                        </ThemeText>
                    </View>
                </View>

                <Button isIconOnly feedbackVariant="scale-highlight" variant='outline'>
                    <MaterialIcons
                        name="chevron-right"
                        size={22}
                        color="#71717A"
                    />
                </Button>
            </View>

            {/* Primary Tools */}
            <View className="mb-4 flex-row flex-wrap justify-between gap-y-3">
                {tools.map(tool => (
                    <PressableFeedback
                        key={tool.id}
                        className="w-[48%] flex-row gap-x-3 rounded-2xl border border-white/5 bg-white/3 p-4"
                    >
                        <View
                            className="h-10 w-10 items-center justify-center rounded-xl"
                            style={{
                                backgroundColor: `${tool.color}20`,
                            }}
                        >
                            <MaterialIcons
                                name={tool.icon as any}
                                size={20}
                                color={tool.color}
                            />
                        </View>

                        <View className='justify-center'>
                            <ThemeText className="text-sm font-poppins-medium">
                                {tool.title}
                            </ThemeText>

                            <ThemeText
                                numberOfLines={1}
                                className="mt-1 text-xs font-poppins-light"
                                textColor={colors.textMuted}
                            >
                                {tool.subtitle}
                            </ThemeText>
                        </View>
                    </PressableFeedback>
                ))}
            </View>

            {/* AI Recommendations */}
            <View>
                <ThemeText className="mb-3 text-sm font-poppins-semibold text-zinc-400">
                    Recommended Actions
                </ThemeText>

                <View className="gap-2">
                    {suggestions.map(item => (
                        <PressableFeedback
                            key={item.id}
                            className="flex-row items-center gap-3 rounded-2xl border border-white/5 bg-white/3 p-3"
                        >
                            <View
                                className="h-9 w-9 items-center justify-center rounded-xl"
                                style={{
                                    backgroundColor: `${item.color}20`,
                                }}
                            >
                                <MaterialIcons
                                    name={item.icon as any}
                                    size={18}
                                    color={item.color}
                                />
                            </View>

                            <View className="flex-1">
                                <ThemeText className="font-poppins-medium text-sm text-white">
                                    {item.title}
                                </ThemeText>

                                <ThemeText className="text-xs text-zinc-500">
                                    {item.subtitle}
                                </ThemeText>
                            </View>

                            <MaterialIcons
                                name="arrow-forward-ios"
                                size={14}
                                color="#71717A"
                            />
                        </PressableFeedback>
                    ))}
                </View>
            </View>
        </View>
    );
};