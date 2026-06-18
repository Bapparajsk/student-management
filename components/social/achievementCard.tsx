import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { View } from "react-native";
import { PressableFeedback } from "../hero-ui";
import ThemeText from "../ui/ThemeText";

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
        <View className="overflow-hidden rounded-[28px] border border-yellow-500/20 bg-linear-to-br from-yellow-500/5 via-white/4 to-cyan-500/5 p-5">

            {/* Header */}
            <View className="flex-row items-center">

                <Image
                    source={{
                        uri: achievement.logo,
                    }}
                    className="h-11 w-11 rounded-full"
                />

                <View className="ml-3 flex-1">
                    <ThemeText>
                        {achievement.organization}
                    </ThemeText>

                    <ThemeText
                        className="text-xs"
                        style={{
                            color: meta.color,
                        }}
                    >
                        {meta.label}
                    </ThemeText>
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

                <ThemeText className="mt-4 text-center text-xl font-poppins-semibold">
                    {achievement.title}
                </ThemeText>

                <ThemeText numberOfLines={10} className="mt-2 text-sm text-center text-zinc-400">
                    {achievement.description}
                </ThemeText>
            </View>

            {/* Stats */}
            <View className="mt-5 flex-row justify-center gap-6">

                <ThemeText className="text-xs text-zinc-400">
                    🎉 {achievement.celebrations}
                </ThemeText>

                <ThemeText className="text-xs text-zinc-400">
                    ❤️ {achievement.reactions}
                </ThemeText>

            </View>

            {/* CTA */}
            <PressableFeedback className="mt-5 items-center rounded-2xl bg-yellow-500/15 py-3">

                <ThemeText className="text-sm font-poppins-semibold text-yellow-400">
                    🎉 Celebrate
                </ThemeText>

            </PressableFeedback>
        </View>
    );
}