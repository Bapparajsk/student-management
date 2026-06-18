import { MaterialIcons } from '@expo/vector-icons';
import { PressableFeedback } from 'heroui-native';
import React from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import { HeaderTitle } from '../ui/headerTitle';
import ThemeText from '../ui/ThemeText';

interface Discussion {
    id: string;
    title: string;
    comments: number;
    views: number;
    category: string;
    timeAgo: string;
    trendingRank: number;
}

const discussions = [
    {
        id: '1',
        title:
            'Google Internship Preparation 2026',
        comments: 256,
        views: 1240,
        category: 'Career',
        timeAgo: '2h ago',
        trendingRank: 1,
    },
    {
        id: '2',
        title:
            'AI Hackathon Team Formation',
        comments: 142,
        views: 842,
        category: 'Hackathon',
        timeAgo: '4h ago',
        trendingRank: 2,
    },
    {
        id: '3',
        title:
            'DBMS Final Exam Discussion',
        comments: 89,
        views: 451,
        category: 'Academics',
        timeAgo: '6h ago',
        trendingRank: 3,
    },
];
export function TrendingDiscussions() {
    return (
        <View className="mt-6">
            {/* Header */}
            <HeaderTitle
                leftText="Trending Discussions"
                rightText="see all"
            />

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 12,
                    paddingRight: 20,
                }}
            >
                {discussions.map(item => (
                    <DiscussionCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

function DiscussionCard({
    item,
}: {
    item: Discussion;
}) {
    return (
        <PressableFeedback className="w-72 overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-4">

            {/* Top */}
            <View className="mb-3 flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <MaterialIcons
                        name="local-fire-department"
                        size={16}
                        color="#F97316"
                    />

                    <ThemeText className="ml-1 text-xs font-poppins-semibold text-orange-400">
                        Trending #{item.trendingRank}
                    </ThemeText>
                </View>

                <ThemeText className="text-[12px] text-zinc-500">
                    {item.timeAgo}
                </ThemeText>
            </View>

            {/* Title */}
            <ThemeText
                numberOfLines={2}
                className="mb-4 text-sm font-poppins-semibold"
            >
                {item.title}
            </ThemeText>

            {/* Category */}
            <View className="mb-4 self-start rounded-full bg-cyan-400/10 px-3 py-1">
                <ThemeText className="text-xs font-medium text-cyan-400">
                    {item.category}
                </ThemeText>
            </View>

            {/* Stats */}
            <View className="flex-row items-center">
                <View className="mr-4 flex-row items-center">
                    <MaterialIcons
                        name="forum"
                        size={14}
                        color="#71717A"
                    />

                    <ThemeText className="ml-1 text-xs text-zinc-400">
                        {item.comments}
                    </ThemeText>
                </View>

                <View className="flex-row items-center">
                    <MaterialIcons
                        name="visibility"
                        size={14}
                        color="#71717A"
                    />

                    <ThemeText className="ml-1 text-xs text-zinc-400">
                        {item.views}
                    </ThemeText>
                </View>
            </View>
        </PressableFeedback>
    );
}