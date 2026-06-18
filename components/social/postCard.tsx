import React from 'react';
import {
    Image,
    Pressable,
    Text,
    View,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { Button, Popover } from 'heroui-native';

export interface CommunityPost {
    id: string;

    author: {
        name: string;
        avatar: string;
        role: string;
    };

    createdAt: string;

    category?: string;

    content: string;

    image?: string;

    likes: number;
    comments: number;
    views: number;

    liked?: boolean;
}

type Props = {
    post: CommunityPost;
};

export default function PopoverExample() {

    return (
        <Popover presentation="popover">
            <Popover.Trigger asChild>
                <Button variant="tertiary" size="sm">
                    <MaterialIcons
                        name="more-horiz"
                        size={20}
                        color="#71717A"
                    />
                </Button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Overlay />
                <Popover.Content
                    presentation="popover"
                    width={200}
                    className="gap-1 rounded-xl px-6 py-4"
                    placement='top'
                >
                    <Pressable className="flex-row items-center gap-3 rounded-lg px-4 py-2 hover:bg-white/5">
                        <MaterialIcons
                            name="report"
                            size={20}
                            color="#F87171"
                        />
                        <Text className="text-sm text-zinc-400">
                            Report Post
                        </Text>
                    </Pressable>

                    <Pressable className="flex-row items-center gap-3 rounded-lg px-4 py-2 hover:bg-white/5">
                        <MaterialIcons
                            name="block"
                            size={20}
                            color="#F87171"
                        />
                        <Text className="text-sm text-zinc-400">
                            Block User
                        </Text>
                    </Pressable>
                </Popover.Content>
            </Popover.Portal>
        </Popover>
    );
}

export function PostCard({
    post,
}: Props) {
    return (
        <View className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-4">

            {/* Header */}
            <View className="flex-row items-center">

                <Image
                    source={{
                        uri: post.author.avatar,
                    }}
                    className="h-11 w-11 rounded-full"
                />

                <View className="ml-3 flex-1">
                    <Text className="font-semibold text-white">
                        {post.author.name}
                    </Text>

                    <Text className="mt-0.5 text-xs text-zinc-500">
                        {post.author.role} • {post.createdAt}
                    </Text>
                </View>

                <PopoverExample />

                {/* <Pressable className="h-9 w-9 items-center justify-center rounded-full">
                    <MaterialIcons
                        name="more-horiz"
                        size={20}
                        color="#71717A"
                    />
                </Pressable> */}
            </View>

            {/* Category */}
            {post.category && (
                <View className="mt-4 self-start rounded-full bg-cyan-500/10 px-3 py-1">
                    <Text className="text-xs font-medium text-cyan-400">
                        {post.category}
                    </Text>
                </View>
            )}

            {/* Content */}
            <Text className="mt-3 text-[15px] leading-6 text-zinc-200">
                {post.content}
            </Text>

            {/* Image */}
            {post.image && (
                <Image
                    source={{
                        uri: post.image,
                    }}
                    className="mt-4 h-56 w-full rounded-3xl"
                    resizeMode="cover"
                />
            )}

            {/* Stats */}
            <View className="mt-4 flex-row items-center">

                <View className="mr-4 flex-row items-center">
                    <MaterialIcons
                        name="favorite"
                        size={14}
                        color="#FB7185"
                    />

                    <Text className="ml-1 text-xs text-zinc-400">
                        {post.likes}
                    </Text>
                </View>

                <View className="mr-4 flex-row items-center">
                    <MaterialIcons
                        name="chat-bubble"
                        size={14}
                        color="#818CF8"
                    />

                    <Text className="ml-1 text-xs text-zinc-400">
                        {post.comments}
                    </Text>
                </View>

                <View className="flex-row items-center">
                    <MaterialIcons
                        name="visibility"
                        size={14}
                        color="#00D5BE"
                    />

                    <Text className="ml-1 text-xs text-zinc-400">
                        {post.views}
                    </Text>
                </View>
            </View>

            {/* Divider */}
            <View className="my-4 h-px bg-white/5" />

            {/* Actions */}
            <View className="flex-row">

                <PostAction
                    icon="favorite-border"
                    label="Like"
                />

                <PostAction
                    icon="chat-bubble-outline"
                    label="Reply"
                />

                <PostAction
                    icon="share"
                    label="Share"
                />
            </View>

        </View>
    );
}

function PostAction({
    icon,
    label,
}: {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
}) {
    return (
        <Pressable className="flex-1 flex-row items-center justify-center py-2">

            <MaterialIcons
                name={icon}
                size={18}
                color="#71717A"
            />

            <Text className="ml-2 text-sm text-zinc-400">
                {label}
            </Text>

        </Pressable>
    );
}