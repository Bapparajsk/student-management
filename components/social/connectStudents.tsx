import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';

export interface Student {
    id: string;

    name: string;
    avatar: string;

    department: string;
    year: string;

    mutualConnections: number;
    mutuals: string[];

    badge?: {
        label: string;
        icon: keyof typeof MaterialIcons.glyphMap;
        color: string;
    };

    isConnected: boolean;
}

export const students: Student[] = [
    {
        id: '1',
        name: 'Sarah Johnson',
        department: 'Computer Science',
        year: '3rd Year',

        avatar:
            'https://randomuser.me/api/portraits/women/44.jpg',

        mutualConnections: 12,

        mutuals: [
            'https://randomuser.me/api/portraits/women/10.jpg',
            'https://randomuser.me/api/portraits/men/15.jpg',
            'https://randomuser.me/api/portraits/women/20.jpg',
        ],

        badge: {
            label: 'Hackathon Winner',
            icon: 'emoji-events',
            color: '#FACC15',
        },

        isConnected: false,
    },

    {
        id: '2',
        name: 'Rahul Sharma',
        department: 'AI & ML',
        year: '2nd Year',

        avatar:
            'https://randomuser.me/api/portraits/men/32.jpg',

        mutualConnections: 8,

        mutuals: [
            'https://randomuser.me/api/portraits/women/10.jpg',
            'https://randomuser.me/api/portraits/men/15.jpg',
            'https://randomuser.me/api/portraits/women/20.jpg',
        ],
        badge: {
            label: 'AI Club Member',
            icon: 'psychology',
            color: '#00D5BE',
        },

        isConnected: false,
    },

    {
        id: '3',
        name: 'Alex Chen',
        department: 'Software Engineering',
        year: '4th Year',

        avatar:
            'https://randomuser.me/api/portraits/men/52.jpg',

        mutualConnections: 18,

        mutuals: [
            'https://randomuser.me/api/portraits/women/10.jpg',
            'https://randomuser.me/api/portraits/men/15.jpg',
            'https://randomuser.me/api/portraits/women/20.jpg',
        ],
        badge: {
            label: 'Top Contributor',
            icon: 'bolt',
            color: '#818CF8',
        },

        isConnected: true,
    },
];


export function ConnectStudents() {
    return (
        <View className="mt-6">
            {/* Header */}
            <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-xl font-bold text-white">
                    Connect Students
                </Text>

                <Pressable>
                    <Text className="font-medium text-cyan-400">
                        View All
                    </Text>
                </Pressable>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 14,
                    paddingRight: 20,
                }}
            >
                {students.map(student => (
                    <StudentCard
                        key={student.id}
                        student={student}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
function StudentCard({
    student,
}: {
    student: Student;
}) {
    return (
        <Pressable className="w-72 rounded-3xl border border-white/10 bg-white/[0.04] p-4">

            <View className="flex-row">

                {/* Avatar */}
                <Image
                    source={{ uri: student.avatar }}
                    className="h-14 w-14 rounded-full"
                />

                {/* Content */}
                <View className="ml-3 flex-1">

                    <View className="flex-row items-center justify-between">
                        <Text
                            numberOfLines={1}
                            className="flex-1 font-bold text-white"
                        >
                            {student.name}
                        </Text>

                        {student.badge && (
                            <MaterialIcons
                                name={student.badge.icon}
                                size={16}
                                color={student.badge.color}
                            />
                        )}
                    </View>

                    <Text
                        numberOfLines={1}
                        className="mt-1 text-xs text-zinc-400"
                    >
                        {student.department}
                    </Text>

                    {/* Mutuals */}
                    <View className="mt-3 flex-row items-center">

                        <View className="flex-row">
                            {student.mutuals
                                .slice(0, 3)
                                .map((avatar, index) => (
                                    <Image
                                        key={avatar}
                                        source={{ uri: avatar }}
                                        className="h-5 w-5 rounded-full border border-zinc-900"
                                        style={{
                                            marginLeft:
                                                index === 0 ? 0 : -6,
                                        }}
                                    />
                                ))}
                        </View>

                        <Text className="ml-2 text-xs text-cyan-400">
                            +{student.mutualConnections}
                        </Text>
                    </View>
                </View>
            </View>

            {/* CTA */}
            <Pressable
                className="mt-4 items-center rounded-xl py-2"
                style={{
                    backgroundColor:
                        student.isConnected
                            ? 'rgba(255,255,255,0.08)'
                            : 'rgba(0,213,190,0.15)',
                }}
            >
                <Text
                    style={{
                        color: student.isConnected
                            ? '#A1A1AA'
                            : '#00D5BE',
                        fontWeight: '600',
                    }}
                >
                    {student.isConnected
                        ? 'Connected'
                        : 'Connect'}
                </Text>
            </Pressable>
        </Pressable>
    );
}