import ThemeText from '@/components/ui/ThemeText';
import { colors } from '@/utils/theme';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
    Pressable,
    View
} from 'react-native';
import { LinkButton, PressableFeedback } from '../../hero-ui';

export interface Chapter {
    id: string;
    title: string;
    totalNotes: number;
    completedNotes: number;
    bookmarkedNotes: number;
    estimatedMinutes: number;
    lastOpenedAt?: string;
}

interface Props {
    chapters: Chapter[];
}

const getProgress = (
    completed: number,
    total: number
) => {
    if (!total) return 0;

    return Math.round(
        (completed / total) * 100
    );
};

const getStatus = (
    progress: number
) => {
    if (progress === 100) {
        return {
            label: 'Completed',
            icon: 'check-circle',
            color: '#00D5BE',
            action: 'Review',
        };
    }

    if (progress > 0) {
        return {
            label: 'In Progress',
            icon: 'play-circle-filled',
            color: '#FACC15',
            action: 'Resume',
        };
    }

    return {
        label: 'Ready',
        icon: 'play-arrow',
        color: '#60A5FA',
        action: 'Begin',
    };
};

export const CurriculumSection = ({
    chapters,
}: Props) => {
    return (
        <View className="gap-4">

            {/* Header */}
            <View className="flex-row items-center justify-between">
                <View>
                    <ThemeText className="text-xl font-poppins-medium">
                        Learning Path
                    </ThemeText>

                    <ThemeText className="text-xs text-zinc-500">
                        {chapters.length} Chapters
                    </ThemeText>
                </View>

                <LinkButton size='sm'>
                    <LinkButton.Label className="font-poppins-medium " style={{ color: colors.info }}>Syllabus</LinkButton.Label>
                </LinkButton>
            </View>

            {chapters.map(chapter => {
                const progress = getProgress(
                    chapter.completedNotes,
                    chapter.totalNotes
                );

                const status =
                    getStatus(progress);

                return (
                    <Pressable
                        key={chapter.id}
                        className="rounded-3xl border border-white/10 bg-white/5 p-4"
                    >
                        {/* Top */}
                        <View className="flex-row justify-between items-start">

                            <View className="flex-1 pr-3">
                                <ThemeText numberOfLines={2} className="text-sm">
                                    {chapter.id}. {chapter.title}
                                </ThemeText>

                                <ThemeText className="mt-1 text-xs text-zinc-500">
                                    {chapter.completedNotes}/
                                    {chapter.totalNotes} Notes
                                </ThemeText>
                            </View>

                            <View
                                className="rounded-full px-3 py-2"
                                style={{
                                    backgroundColor:
                                        `${status.color}20`,
                                }}
                            >
                                <View className="flex-row items-center gap-1">
                                    <MaterialIcons
                                        name={status.icon as any}
                                        size={14}
                                        color={status.color}
                                    />

                                    <ThemeText
                                        style={{
                                            color: status.color,
                                            fontSize: 11,
                                            lineHeight: 14,
                                        }}
                                    >
                                        {status.label}
                                    </ThemeText>
                                </View>
                            </View>
                        </View>

                        {/* Stats */}
                        <View className="mt-4 flex-row gap-4">
                            <StatusLabel title="Progress" subtitle={`${progress}%`} />
                            <StatusLabel title="Saved" subtitle={chapter.bookmarkedNotes.toString()} />
                            <StatusLabel title="Time" subtitle={`${chapter.estimatedMinutes}m`} />
                        </View>

                        {/* Progress Bar */}
                        <View className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
                            <View
                                className="h-full rounded-full"
                                style={{
                                    width: `${progress}%`,
                                    backgroundColor:
                                        status.color,
                                }}
                            />
                        </View>

                        {/* CTA */}
                        <PressableFeedback
                            className="mt-4 self-start rounded-xl px-4 py-2"
                            style={{
                                backgroundColor:
                                    `${status.color}20`,
                            }}
                        >
                            <ThemeText
                                style={{
                                    color: status.color,
                                    // fontWeight: '700',
                                    fontSize: 13,
                                }}

                            >
                                {status.action}
                            </ThemeText>
                        </PressableFeedback>
                    </Pressable>
                );
            })}
        </View>
    );
};

function StatusLabel({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <View>
            <ThemeText className="text-[10px] text-zinc-500">
                {title}
            </ThemeText>

            <ThemeText className="text-xs text-white">
                {subtitle}
            </ThemeText>
        </View>
    )
}