import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
    Pressable,
    Text,
    View,
} from 'react-native';

interface CommunityHeroProps {
    type: 'event' | 'discussion' | 'club';

    title: string;
    subtitle: string;

    cta: string;

    stats: {
        online: string;
        discussions: string;
        clubs: string;
        events: string;
    };
}

export function ClubHeroCard({
    type,
    title,
    subtitle,
    cta,
    stats,
}: CommunityHeroProps) {
    const config = {
        event: {
            icon: 'local-fire-department',
            label: 'Trending Event',
            color: '#00D5BE',
        },

        discussion: {
            icon: 'forum',
            label: 'Trending Discussion',
            color: '#818CF8',
        },

        club: {
            icon: 'groups',
            label: 'Club Spotlight',
            color: '#FACC15',
        },
    }[type];

    return (
        <View className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-5">

            {/* Glow */}
            <View
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full"
                style={{
                    backgroundColor: `${config.color}15`,
                }}
            />

            <View className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-400/10" />

            {/* Header */}
            <View className="mb-5 flex-row items-center">
                <View
                    className="h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: `${config.color}20`,
                    }}
                >
                    <MaterialIcons
                        name={config.icon as any}
                        size={24}
                        color={config.color}
                    />
                </View>

                <View className="ml-3">
                    <Text
                        className="text-xs font-bold uppercase"
                        style={{
                            color: config.color,
                        }}
                    >
                        {config.label}
                    </Text>

                    <Text className="mt-1 text-2xl font-bold text-white">
                        Community
                    </Text>
                </View>
            </View>

            {/* Content */}
            <Text className="text-2xl font-bold text-white">
                {title}
            </Text>

            <Text className="mt-2 text-sm leading-6 text-zinc-400">
                {subtitle}
            </Text>

            {/* CTA */}
            <Pressable
                className="mt-5 self-start rounded-2xl px-5 py-3"
                style={{
                    backgroundColor: `${config.color}20`,
                }}
            >
                <Text
                    className="font-semibold"
                    style={{
                        color: config.color,
                    }}
                >
                    {cta}
                </Text>
            </Pressable>

            {/* Analytics Strip */}
            <View className="mt-6 flex-row justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4">

                <Stat value={stats.online} label="Online" />

                <Stat value={stats.discussions} label="Posts" />

                <Stat value={stats.clubs} label="Clubs" />

                <Stat value={stats.events} label="Events" />
            </View>
        </View>
    );
}

function Stat({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <View className="items-center">
            <Text className="text-base font-bold text-white">
                {value}
            </Text>

            <Text className="mt-1 text-[11px] text-zinc-500">
                {label}
            </Text>
        </View>
    );
}