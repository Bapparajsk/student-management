import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';

interface CommunityEvent {
    id: string;

    title: string;
    category: string;

    coverImage: string;

    location: string;

    date: string;
    time: string;

    participants: number;

    isRegistered: boolean;
    isFeatured?: boolean;
}

const events = [
    {
        id: '1',
        title: 'AI Hackathon 2026',
        category: 'Hackathon',

        coverImage:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

        location: 'Main Auditorium',

        date: 'Tomorrow',
        time: '9:00 AM',

        participants: 127,

        isRegistered: false,
        isFeatured: true,
    },

    {
        id: '2',
        title: 'Placement Workshop',
        category: 'Career',

        coverImage:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',

        location: 'Seminar Hall',

        date: 'Friday',
        time: '2:00 PM',

        participants: 89,

        isRegistered: true,
    },
];

export function UpcomingEvents() {
    return (
        <View className="mt-6">
            {/* Header */}
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-xl font-bold text-white">
                    Upcoming Events
                </Text>

                <Pressable>
                    <Text className="font-medium text-cyan-400">
                        View All
                    </Text>
                </Pressable>
            </View>

            {/* Events */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 14,
                    paddingRight: 20,
                }}
            >
                {events.map(event => (
                    <EventCard
                        key={event.id}
                        event={event}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

function EventCard({
    event,
}: {
    event: CommunityEvent;
}) {
    return (
        <Pressable className="w-80 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">

            {/* Banner */}
            <View className="relative h-40">
                <Image
                    source={{
                        uri: event.coverImage,
                    }}
                    className="h-full w-full"
                />

                {event.isFeatured && (
                    <View className="absolute left-3 top-3 flex-row items-center rounded-full bg-orange-500/20 px-3 py-1">
                        <MaterialIcons
                            name="local-fire-department"
                            size={14}
                            color="#FB923C"
                        />

                        <Text className="ml-1 text-xs font-semibold text-orange-400">
                            Featured
                        </Text>
                    </View>
                )}
            </View>

            {/* Content */}
            <View className="p-4">

                {/* Category */}
                <View className="mb-2 self-start rounded-full bg-cyan-400/10 px-3 py-1">
                    <Text className="text-xs font-medium text-cyan-400">
                        {event.category}
                    </Text>
                </View>

                {/* Title */}
                <Text
                    numberOfLines={2}
                    className="text-lg font-bold text-white"
                >
                    {event.title}
                </Text>

                {/* Date */}
                <View className="mt-3 flex-row items-center">
                    <MaterialIcons
                        name="schedule"
                        size={16}
                        color="#A1A1AA"
                    />

                    <Text className="ml-2 text-sm text-zinc-400">
                        {event.date} • {event.time}
                    </Text>
                </View>

                {/* Location */}
                <View className="mt-2 flex-row items-center">
                    <MaterialIcons
                        name="location-on"
                        size={16}
                        color="#A1A1AA"
                    />

                    <Text
                        numberOfLines={1}
                        className="ml-2 flex-1 text-sm text-zinc-400"
                    >
                        {event.location}
                    </Text>
                </View>

                {/* Bottom */}
                <View className="mt-4 flex-row items-center justify-between">

                    <View className="flex-row items-center">
                        <MaterialIcons
                            name="groups"
                            size={16}
                            color="#00D5BE"
                        />

                        <Text className="ml-2 font-medium text-cyan-400">
                            {event.participants}
                        </Text>
                    </View>

                    <Pressable
                        className="rounded-xl px-4 py-2"
                        style={{
                            backgroundColor:
                                event.isRegistered
                                    ? 'rgba(255,255,255,0.08)'
                                    : 'rgba(0,213,190,0.15)',
                        }}
                    >
                        <Text
                            style={{
                                color: event.isRegistered
                                    ? '#A1A1AA'
                                    : '#00D5BE',
                                fontWeight: '600',
                            }}
                        >
                            {event.isRegistered
                                ? 'Registered'
                                : 'Register'}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    );
}