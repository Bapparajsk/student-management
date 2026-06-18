import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';

interface Club {
    id: string;
    name: string;
    category: string;
    coverImage: string;

    members: number;
    activeToday: number;

    isJoined: boolean;
    isTrending?: boolean;
}

interface ActiveClubsProps {
    clubs: Club[];
}

export function ActiveClubs({
    clubs,
}: ActiveClubsProps) {
    return (
        <View className="mt-6">

            {/* Header */}
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-xl font-bold text-white">
                    Active Clubs
                </Text>

                <Pressable>
                    <Text className="font-medium text-cyan-400">
                        View All
                    </Text>
                </Pressable>
            </View>

            {/* Clubs */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 12,
                    paddingRight: 20,
                }}
            >
                {clubs.map(club => (
                    <ClubCard
                        key={club.id}
                        club={club}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

function ClubCard({
    club,
}: {
    club: Club;
}) {
    return (
        <Pressable className="w-72 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">

            {/* Cover */}
            <View className="relative h-32">
                <Image
                    source={{
                        uri: club.coverImage,
                    }}
                    className="h-full w-full"
                />

                {club.isTrending && (
                    <View className="absolute left-3 top-3 flex-row items-center rounded-full bg-orange-500/20 px-3 py-1">
                        <MaterialIcons
                            name="local-fire-department"
                            size={14}
                            color="#FB923C"
                        />

                        <Text className="ml-1 text-xs font-semibold text-orange-400">
                            Trending
                        </Text>
                    </View>
                )}
            </View>

            {/* Content */}
            <View className="p-4">

                {/* Name */}
                <Text
                    numberOfLines={1}
                    className="text-lg font-bold text-white"
                >
                    {club.name}
                </Text>

                {/* Category */}
                <Text className="mt-1 text-sm text-zinc-500">
                    {club.category}
                </Text>

                {/* Stats */}
                <View className="mt-4 flex-row items-center justify-between">

                    <View>
                        <Text className="text-xs text-zinc-500">
                            Members
                        </Text>

                        <Text className="font-semibold text-white">
                            {club.members}
                        </Text>
                    </View>

                    <View>
                        <Text className="text-xs text-zinc-500">
                            Active Today
                        </Text>

                        <Text className="font-semibold text-cyan-400">
                            {club.activeToday}
                        </Text>
                    </View>
                </View>

                {/* Button */}
                <Pressable
                    className="mt-4 items-center rounded-2xl py-3"
                    style={{
                        backgroundColor: club.isJoined
                            ? 'rgba(255,255,255,0.08)'
                            : 'rgba(0,213,190,0.15)',
                    }}
                >
                    <Text
                        style={{
                            color: club.isJoined
                                ? '#A1A1AA'
                                : '#00D5BE',
                            fontWeight: '600',
                        }}
                    >
                        {club.isJoined
                            ? 'Joined'
                            : 'Join Club'}
                    </Text>
                </Pressable>
            </View>
        </Pressable>
    );
}