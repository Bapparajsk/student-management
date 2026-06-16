import { HeaderTitle } from "@/components/ui/headerTitle";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export interface NoteFile {
    id: string;
    title: string;
    type:
    | 'PDF'
    | 'AI_NOTE'
    | 'SLIDES'
    | 'NOTE'
    | 'VIDEO';

    size?: string;
    readTime?: string;
    updatedAt: string;

    bookmarked?: boolean;
    aiScore?: string;
}

const getFileConfig = (
    type: NoteFile['type']
) => {
    switch (type) {
        case 'PDF':
            return {
                icon: 'picture-as-pdf',
                color: '#EF4444',
                bg: '#EF444420',
                label: 'PDF',
            };

        case 'AI_NOTE':
            return {
                icon: 'auto-awesome',
                color: '#818CF8',
                bg: '#818CF820',
                label: 'AI Note',
            };

        case 'SLIDES':
            return {
                icon: 'slideshow',
                color: '#00D5BE',
                bg: '#00D5BE20',
                label: 'Slides',
            };

        case 'NOTE':
            return {
                icon: 'description',
                color: '#FACC15',
                bg: '#FACC1520',
                label: 'Notes',
            };

        default:
            return {
                icon: 'smart-display',
                color: '#EC4899',
                bg: '#EC489920',
                label: 'Video',
            };
    }
};

export const NotesSection = ({ showHeader = true }: { showHeader?: boolean }) => {
    return (
        <View className="mt-3">
            {showHeader && (
                <HeaderTitle
                    leftText="Recently Edited"
                    rightText="view all"
                />
            )}
            <View className="gap-y-1.5">
                {files.map(file => {
                    const config = getFileConfig(
                        file.type as NoteFile['type']
                    );

                    return (
                        <Pressable
                            key={file.id}
                            className="flex-row items-center gap-4 rounded-3xl border border-white/5 bg-white/3 p-3"
                        >
                            {/* Icon */}
                            <View
                                className="h-14 w-14 items-center justify-center rounded-2xl"
                                style={{
                                    backgroundColor: config.bg,
                                }}
                            >
                                <MaterialIcons
                                    name={config.icon as any}
                                    size={30}
                                    color={config.color}
                                />
                            </View>

                            {/* Content */}
                            <View className="flex-1">
                                <Text
                                    numberOfLines={1}
                                    className="font-semibold text-white"
                                >
                                    {file.title}
                                </Text>

                                <View className="mt-1 flex-row items-center gap-2">
                                    <View
                                        className="rounded-full px-2 py-1"
                                        style={{
                                            backgroundColor: config.bg,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: config.color,
                                                fontSize: 10,
                                                fontWeight: '700',
                                            }}
                                        >
                                            {config.label}
                                        </Text>
                                    </View>

                                    {file.aiScore && (
                                        <Text className="text-xs font-semibold text-cyan-400">
                                            {file.aiScore}
                                        </Text>
                                    )}

                                    <Text className="text-xs text-zinc-500">
                                        {file.updatedAt}
                                    </Text>
                                </View>
                            </View>

                            {/* Action */}
                            <MaterialIcons
                                name={
                                    file.bookmarked
                                        ? 'bookmark'
                                        : 'more-vert'
                                }
                                size={20}
                                color="#71717A"
                            />
                        </Pressable>
                    );
                })}
            </View>
        </View>
    )
}

const files = [
    {
        id: '1',
        title:
            'Relational_Algebra_DeepDive.pdf',
        type: 'PDF',
        updatedAt: 'Yesterday',
    },

    {
        id: '2',
        title:
            'Normalization Summary',
        type: 'AI_NOTE',
        aiScore: 'High Impact',
        bookmarked: true,
        updatedAt: '2 min read',
    },

    {
        id: '3',
        title:
            'Transaction Management',
        type: 'SLIDES',
        updatedAt: '2 days ago',
    },
    {
        id: '4',
        title:
            'SQL Queries & Joins',
        type: 'NOTE',
        updatedAt: '5 min read',
    },
    {
        id: '5',
        title:
            'Concurrency Control',
        type: 'VIDEO',
        updatedAt: '10 min read',
    },

];