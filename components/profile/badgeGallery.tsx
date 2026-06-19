import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
    FlatList,
    Pressable,
    View,
} from 'react-native';
import ThemeText from '../ui/ThemeText';
import { HeaderTitle } from '../ui/headerTitle';

type Badge = {
    id: string;
    title: string;
    description: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    color: string;
    earnedAt: string;
    featured?: boolean;
};

const BADGES: Badge[] = [
    {
        id: '1',
        title: "{ BadgeGallery } Dean's List",
        description:
            'Ranked in the top 5% of students this semester.',
        icon: 'emoji-events',
        color: '#FACC15',
        earnedAt: 'Mar 2026',
        featured: true,
    },
    {
        id: '2',
        title: '30 Day Streak',
        description:
            'Studied continuously for 30 days.',
        icon: 'local-fire-department',
        color: '#FB923C',
        earnedAt: 'Feb 2026',
    },
    {
        id: '3',
        title: 'Top Coder',
        description:
            'Solved 500+ coding problems.',
        icon: 'code',
        color: '#22D3EE',
        earnedAt: 'Jan 2026',
    },
    {
        id: '4',
        title: 'Club Leader',
        description:
            'Successfully led AI Club activities.',
        icon: 'groups',
        color: '#A78BFA',
        earnedAt: 'Dec 2025',
    },
    {
        id: '5',
        title: 'Perfect Attendance',
        description:
            'Maintained 100% attendance.',
        icon: 'verified',
        color: '#34D399',
        earnedAt: 'Nov 2025',
    },
];

function FeaturedBadge({
    badge,
}: {
    badge: Badge;
}) {
    return (
        <Pressable
            className="mb-4 overflow-hidden rounded-4xl border p-5"
            style={{
                borderColor: `${badge.color}30`,
                backgroundColor: `${badge.color}10`,
            }}
        >
            {/* Glow */}
            <View
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full"
                style={{
                    backgroundColor: `${badge.color}20`,
                }}
            />

            <View
                className="h-16 w-16 items-center justify-center rounded-3xl"
                style={{
                    backgroundColor: `${badge.color}25`,
                }}
            >
                <MaterialIcons
                    name={badge.icon}
                    size={34}
                    color={badge.color}
                />
            </View>

            <ThemeText className="mt-4 text-lg font-poppins-semibold">
                {badge.title}
            </ThemeText>

            <ThemeText className="mt-2 text-sm text-zinc-300">
                {badge.description}
            </ThemeText>

            <View className="mt-5 flex-row items-center justify-between">

                <View
                    className="rounded-full px-3 py-1"
                    style={{
                        backgroundColor:
                            `${badge.color}20`,
                    }}
                >
                    <ThemeText
                        className="text-xs font-semibold"
                        style={{
                            color: badge.color,
                        }}
                    >
                        Featured Achievement
                    </ThemeText>
                </View>

                <ThemeText className="text-xs text-zinc-500">
                    {badge.earnedAt}
                </ThemeText>

            </View>
        </Pressable>
    );
}

function AchievementCard({
    badge,
}: {
    badge: Badge;
}) {
    return (
        <Pressable
            className="flex-1 overflow-hidden rounded-[28px] border border-white/10 bg-white/4 p-4"
        >
            {/* Glow */}
            <View
                className="absolute -right-5 -top-5 h-20 w-20 rounded-full"
                style={{
                    backgroundColor: `${badge.color}15`,
                }}
            />

            {/* Icon */}
            <View
                className="h-14 w-14 items-center justify-center rounded-3xl"
                style={{
                    backgroundColor: `${badge.color}20`,
                }}
            >
                <MaterialIcons
                    name={badge.icon}
                    size={26}
                    color={badge.color}
                />
            </View>

            {/* Title */}
            <ThemeText
                numberOfLines={1}
                className="mt-4 font-poppins-semibold"
            >
                {badge.title}
            </ThemeText>

            {/* Description */}
            <ThemeText
                numberOfLines={2}
                className="mt-1 text-xs text-zinc-500"
            >
                {badge.description}
            </ThemeText>

            {/* Date */}
            <View className="mt-4 self-start rounded-full bg-white/5 px-3 py-1">
                <ThemeText className="text-[10px] text-zinc-400">
                    {badge.earnedAt}
                </ThemeText>
            </View>
        </Pressable>
    );
}

export const BadgeGallery = () => {
    const featuredBadge = BADGES.find(
        badge => badge.featured
    );

    const normalBadges = BADGES.filter(
        badge => !badge.featured
    );

    return (
        <View className='mt-3'>
            {/* Header */}
            <HeaderTitle
                leftText="Hall of Achievements"
                rightText={
                    <View className="rounded-full bg-cyan-500/10 px-3 py-1">
                        <ThemeText className="text-xs font-semibold text-cyan-400">
                            {BADGES.length} Earned
                        </ThemeText>
                    </View>
                }
            />

            {/* Featured Badge */}
            {featuredBadge && (
                <FeaturedBadge
                    badge={featuredBadge}
                />
            )}

            {/* Badge Grid */}
            <FlatList
                data={normalBadges}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={{
                    gap: 12,
                    marginBottom: 12,
                }}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <AchievementCard
                        badge={item}
                    />
                )}
            />

        </View>
    );
}