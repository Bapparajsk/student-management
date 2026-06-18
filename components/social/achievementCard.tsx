import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

export interface AchievementPost {
    id: string;

    organization: string;

    logo: string;

    verified?: boolean;

    title: string;

    description: string;

    achievementType:
    | 'winner'
    | 'placement'
    | 'certification'
    | 'milestone';

    reactions: number;
    celebrations: number;
}

function getAchievementMeta(
    type: AchievementPost['achievementType']
) {
    switch (type) {
        case 'winner':
            return {
                icon: 'emoji-events',
                color: '#FACC15',
                label: 'Achievement',
            };

        case 'placement':
            return {
                icon: 'workspace-premium',
                color: '#FB923C',
                label: 'Competition',
            };

        case 'certification':
            return {
                icon: 'verified',
                color: '#00D5BE',
                label: 'Certification',
            };

        default:
            return {
                icon: 'military-tech',
                color: '#818CF8',
                label: 'Milestone',
            };
    }
}

export function AchievementCard({
    achievement,
}: {
    achievement: AchievementPost;
}) {
    const meta = getAchievementMeta(
        achievement.achievementType
    );

    return (
        <View className="overflow-hidden rounded-[28px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 via-white/[0.04] to-cyan-500/5 p-5">

            {/* Header */}
            <View className="flex-row items-center">

                <Image
                    source={{
                        uri: achievement.logo,
                    }}
                    className="h-11 w-11 rounded-full"
                />

                <View className="ml-3 flex-1">
                    <Text className="font-semibold text-white">
                        {achievement.organization}
                    </Text>

                    <Text
                        className="text-xs"
                        style={{
                            color: meta.color,
                        }}
                    >
                        {meta.label}
                    </Text>
                </View>

                <MaterialIcons
                    name={meta.icon as any}
                    size={22}
                    color={meta.color}
                />
            </View>

            {/* Trophy */}
            <View className="mt-5 items-center">

                <View className="h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10">
                    <MaterialIcons
                        name="emoji-events"
                        size={42}
                        color="#FACC15"
                    />
                </View>

                <Text className="mt-4 text-center text-2xl font-bold text-white">
                    {achievement.title}
                </Text>

                <Text className="mt-2 text-center text-zinc-400">
                    {achievement.description}
                </Text>
            </View>

            {/* Stats */}
            <View className="mt-5 flex-row justify-center gap-6">

                <Text className="text-zinc-400">
                    🎉 {achievement.celebrations}
                </Text>

                <Text className="text-zinc-400">
                    ❤️ {achievement.reactions}
                </Text>

            </View>

            {/* CTA */}
            <Pressable className="mt-5 items-center rounded-2xl bg-yellow-500/15 py-3">

                <Text className="font-semibold text-yellow-400">
                    🎉 Celebrate
                </Text>

            </Pressable>
        </View>
    );
}