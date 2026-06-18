import React from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

type Moment = {
    id: string;
    title: string;
    image?: string;

    type: 'student' | 'club' | 'event';

    viewed?: boolean;
    isMine?: boolean;
};

export const moments: Moment[] = [
    {
        id: 'me',
        title: 'Your Story',
        isMine: true,
        type: 'student',
    },

    {
        id: '1',
        title: 'Alex',
        image: 'https://i.pravatar.cc/150?img=1',
        type: 'student',
    },

    {
        id: '2',
        title: 'AI Club',
        image: 'https://i.pravatar.cc/150?img=2',
        type: 'club',
    },

    {
        id: '3',
        title: 'Hackathon',
        image: 'https://i.pravatar.cc/150?img=3',
        type: 'event',
    },

    {
        id: '4',
        title: 'Sarah',
        image: 'https://i.pravatar.cc/150?img=4',
        type: 'student',
        viewed: true,
    },
];

export function ClubMoments() {
    return (
        <View className="mt-3">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 14,
                    paddingRight: 20,
                }}
            >
                {moments.map(moment => (
                    <MomentItem
                        key={moment.id}
                        moment={moment}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

function getRingColor(
    type: Moment['type'],
    viewed?: boolean
) {
    if (viewed) {
        return '#52525B';
    }

    switch (type) {
        case 'student':
            return '#00D5BE';

        case 'club':
            return '#818CF8';

        case 'event':
            return '#FB923C';

        default:
            return '#00D5BE';
    }
}

function getBadge(
    type: Moment['type']
) {
    switch (type) {
        case 'student':
            return {
                icon: 'person',
                color: '#00D5BE',
            };

        case 'club':
            return {
                icon: 'groups',
                color: '#818CF8',
            };

        case 'event':
            return {
                icon: 'celebration',
                color: '#FB923C',
            };
    }
}

function MomentItem({
    moment,
}: {
    moment: Moment;
}) {
    if (moment.isMine) {
        return (
            <Pressable className="items-center">
                <View className="h-18.5 w-18.5 items-center justify-center rounded-full border-2 border-dashed border-zinc-600">

                    <View className="h-15.5 w-15.5 items-center justify-center rounded-full bg-white/4">
                        <MaterialIcons
                            name="add"
                            size={26}
                            color="#00D5BE"
                        />
                    </View>
                </View>

                <Text
                    numberOfLines={1}
                    className="mt-2 w-20 text-center text-xs text-zinc-400"
                >
                    Your Story
                </Text>
            </Pressable>
        );
    }

    const ringColor = getRingColor(
        moment.type,
        moment.viewed
    );

    const badge = getBadge(moment.type);

    return (
        <Pressable className="items-center">

            <View
                className="items-center justify-center rounded-full p-0.75"
                style={{
                    backgroundColor: ringColor,
                }}
            >
                <View className="relative">

                    <Image
                        source={{
                            uri: moment.image,
                        }}
                        className="h-17 w-17 rounded-full border-2 border-zinc-950"
                    />

                    <View className="absolute bottom-0 right-0 h-6 w-6 items-center justify-center rounded-full border-2 border-zinc-950 bg-zinc-900">
                        <MaterialIcons
                            name={badge.icon as any}
                            size={12}
                            color={badge.color}
                        />
                    </View>
                </View>
            </View>

            <Text
                numberOfLines={1}
                className="mt-2 w-20 text-center text-xs font-medium text-white"
            >
                {moment.title}
            </Text>
        </Pressable>
    );
}