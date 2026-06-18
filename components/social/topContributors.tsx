import React from 'react';
import {
    Image,
    Pressable,
    Text,
    View,
} from 'react-native';

interface Contributor {
    id: string;

    name: string;
    avatar: string;

    role: string;

    contribution: string;

    points: number;

    rank: 1 | 2 | 3;
}


export const contributors: Contributor[] = [
    {
        id: '1',
        name: 'Sarah Johnson',
        avatar:
            'https://randomuser.me/api/portraits/women/44.jpg',

        role: 'AI Club Leader',

        contribution: '142 Helpful Replies',

        points: 1240,

        rank: 1,
    },

    {
        id: '2',
        name: 'Rahul Sharma',
        avatar:
            'https://randomuser.me/api/portraits/men/32.jpg',

        role: 'Open Source Club',

        contribution: '12 Events Organized',

        points: 1120,

        rank: 2,
    },

    {
        id: '3',
        name: 'Alex Chen',
        avatar:
            'https://randomuser.me/api/portraits/men/52.jpg',

        role: 'Hackathon Winner',

        contribution: '18 Day Streak',

        points: 980,

        rank: 3,
    },
];

export function TopContributors() {
    const top = contributors.find(
        item => item.rank === 1
    );

    const others = contributors.filter(
        item => item.rank !== 1
    );

    if (!top) return null;

    return (
        <View className="mt-6">

            {/* Header */}
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-xl font-bold text-white">
                    Top Contributors
                </Text>

                <Pressable>
                    <Text className="font-medium text-cyan-400">
                        View All
                    </Text>
                </Pressable>
            </View>

            {/* Featured Contributor */}
            <View className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5">

                <Text className="mb-4 text-sm font-semibold text-yellow-400">
                    🏆 Contributor of the Week
                </Text>

                <View className="items-center">
                    <Image
                        source={{
                            uri: top.avatar,
                        }}
                        className="h-20 w-20 rounded-full"
                    />

                    <Text className="mt-3 text-lg font-bold text-white">
                        {top.name}
                    </Text>

                    <Text className="mt-1 text-sm text-zinc-400">
                        {top.role}
                    </Text>

                    <View className="mt-3 rounded-full bg-cyan-400/10 px-3 py-1">
                        <Text className="text-xs font-semibold text-cyan-400">
                            {top.contribution}
                        </Text>
                    </View>

                    <Text className="mt-4 text-3xl font-bold text-cyan-400">
                        {top.points}
                    </Text>

                    <Text className="text-xs text-zinc-500">
                        Community XP
                    </Text>

                    <Pressable className="mt-5 rounded-2xl bg-cyan-400/15 px-5 py-3">
                        <Text className="font-semibold text-cyan-400">
                            View Profile
                        </Text>
                    </Pressable>
                </View>
            </View>

            {/* Other Contributors */}
            <View className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4">

                {others.map(user => (
                    <ContributorRow
                        key={user.id}
                        user={user}
                    />
                ))}
            </View>
        </View>
    );
}

function ContributorRow({
    user,
}: {
    user: Contributor;
}) {
    const medal =
        user.rank === 2 ? '🥈' : '🥉';

    return (
        <View className="mb-4 flex-row items-center">

            <Text className="mr-3 text-xl">
                {medal}
            </Text>

            <Image
                source={{
                    uri: user.avatar,
                }}
                className="h-12 w-12 rounded-full"
            />

            <View className="ml-3 flex-1">
                <Text className="font-semibold text-white">
                    {user.name}
                </Text>

                <Text className="text-xs text-zinc-500">
                    {user.role}
                </Text>
            </View>

            <Text className="font-bold text-cyan-400">
                {user.points}
            </Text>
        </View>
    );
}