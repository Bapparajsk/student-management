import { colors } from '@/utils/theme';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Text, View } from 'react-native';
import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';

type InsightType =
    | 'STUDY'
    | 'ASSIGNMENT'
    | 'ATTENDANCE'
    | 'EXAM'
    | 'CAREER';

interface AIInsight {
    type: InsightType;
    confidence: number;
    title: string;
    message: string;
    action: string;
}

const insight: AIInsight = {
    type: 'STUDY',
    confidence: 94,
    title: 'Study Insight',
    message:
        'You are performing well in Operating Systems. Reviewing AI Flashcards today could improve Chapter 4 retention by approximately 18%.',
    action: 'Start Flashcards',
};

const getInsightConfig = (type: InsightType) => {
    switch (type) {
        case 'STUDY':
            return {
                color: '#00D5BE',
                bg: '#00D5BE15',
                icon: 'psychology',
            };

        case 'ASSIGNMENT':
            return {
                color: '#FACC15',
                bg: '#FACC1515',
                icon: 'assignment',
            };

        case 'ATTENDANCE':
            return {
                color: '#EF4444',
                bg: '#EF444415',
                icon: 'event-available',
            };

        case 'EXAM':
            return {
                color: '#818CF8',
                bg: '#818CF815',
                icon: 'emoji-events',
            };

        case 'CAREER':
            return {
                color: '#EC4899',
                bg: '#EC489915',
                icon: 'rocket-launch',
            };
    }
};

export const AIInsightCard = ({ type }: { type?: InsightType }) => {
    const config = getInsightConfig(type ?? "STUDY");

    return (
        <View className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 mt-3">

            {/* Background Glow */}
            <View
                className="absolute -left-10 -top-10 h-36 w-36 rounded-full"
                style={{
                    backgroundColor: config.bg,
                }}
            />

            <View className="flex-row gap-4">

                {/* Icon */}
                <View
                    className="h-12 w-12 items-center justify-center rounded-full border"
                    style={{
                        backgroundColor: config.bg,
                        borderColor: `${config.color}50`,
                    }}
                >
                    <MaterialIcons
                        name={config.icon as any}
                        size={22}
                        color={config.color}
                    />
                </View>

                {/* Content */}
                <View className="flex-1">

                    {/* Header */}
                    <View className="mb-3 flex-row items-center justify-between">

                        <ThemeText
                            className="text-xs font-poppins-semibold uppercase tracking-[2px]"
                            style={{
                                color: config.color,
                            }}
                        >
                            {insight.title}
                        </ThemeText>

                        <View
                            className="rounded-full px-2 py-1"
                            style={{
                                backgroundColor: config.bg,
                            }}
                        >
                            <Text
                                style={{
                                    color: config.color,
                                    fontSize: 10,
                                    fontWeight: 700,
                                }}
                            >
                                {insight.confidence}% Confidence
                            </Text>
                        </View>
                    </View>

                    {/* Message */}
                    <ThemeText numberOfLines={10} className="text-xs leading-6" textColor={colors.textSecondary}>
                        {insight.message}
                    </ThemeText>

                    {/* Action Button */}
                    <PressableFeedback
                        className="mt-4 self-start rounded-xl px-4 py-2"
                        style={{
                            backgroundColor: config.bg,
                        }}
                    >
                        <View className='flex-row items-center gap-2'>
                            <ThemeText
                                className="text-xs font-poppins-semibold"
                                textColor={config.color}
                            >
                                {insight.action}

                            </ThemeText>
                            <FontAwesome6 name="arrow-right-long" size={10} color={config.color} />
                        </View>
                    </PressableFeedback>
                </View>
            </View>
        </View>
    );
};