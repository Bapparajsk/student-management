import { MaterialIcons } from '@expo/vector-icons';
import {
    Image,
    Pressable,
    Text,
    View,
} from 'react-native';

type ProfileHeroProps = {
    name: string;
    role: string;
    program: string;
    semester: string;

    avatar: string;
    coverImage: string;

    status: string;

    cgpa: string;
    streak: number;
    rank: string;
    achievements: number;

    onEdit?: () => void;
    onShare?: () => void;
};

function StatItem({
    icon,
    value,
    label,
    color,
}: {
    icon: keyof typeof MaterialIcons.glyphMap;
    value: string | number;
    label: string;
    color: string;
}) {
    return (
        <View className="items-center">
            <MaterialIcons
                name={icon}
                size={18}
                color={color}
            />

            <Text
                className="mt-1 text-base font-bold"
                style={{ color }}
            >
                {value}
            </Text>

            <Text className="text-[10px] text-zinc-500">
                {label}
            </Text>
        </View>
    );
}

export function ProfileHeroCard({
    name,
    role,
    program,
    semester,

    avatar,
    coverImage,

    status,

    cgpa,
    streak,
    rank,
    achievements,

    onEdit,
    onShare,
}: ProfileHeroProps) {
    return (
        <View className="overflow-hidden rounded-[28px] border border-white/10 bg-white/4 px-4 py-4">


            {/* Profile Row */}
            <View className="flex-row items-center">

                <View className="rounded-4xl bg-linear-to-br from-cyan-500/20 to-indigo-500/60 p-1">
                    <View className="overflow-hidden rounded-[28px]">
                        <Image
                            source={require('../../assets/profile1.jpg')}
                            className="h-20 w-20"
                            resizeMode="cover"
                        />
                    </View>
                </View>

                <View className="ml-4 flex-1">

                    <Text
                        numberOfLines={1}
                        className="text-xl font-bold text-white"
                    >
                        {name}
                    </Text>

                    <Text
                        numberOfLines={1}
                        className="mt-0.5 text-sm text-zinc-300"
                    >
                        {role}
                    </Text>

                    <Text className="mt-0.5 text-xs text-zinc-500">
                        {program} • Semester {semester}
                    </Text>

                    <View className="mt-2 self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1">
                        <Text className="text-[10px] font-semibold uppercase text-emerald-400">
                            ⭐ {status}
                        </Text>
                    </View>

                </View>

            </View>

            {/* Stats */}
            <View className="mt-5 flex-row justify-around rounded-2xl border border-white/5 bg-white/[0.03] py-3">

                <StatItem
                    icon="school"
                    value={cgpa}
                    label="CGPA"
                    color="#818CF8"
                />

                <StatItem
                    icon="local-fire-department"
                    value={streak}
                    label="Streak"
                    color="#FB923C"
                />

                <StatItem
                    icon="emoji-events"
                    value={rank}
                    label="Rank"
                    color="#FACC15"
                />

                <StatItem
                    icon="workspace-premium"
                    value={achievements}
                    label="Awards"
                    color="#00D5BE"
                />

            </View>

            {/* Actions */}
            <View className="mt-4 flex-row gap-2">

                <Pressable
                    onPress={onEdit}
                    className="flex-1 flex-row items-center justify-center rounded-xl bg-cyan-500/15 py-3"
                >
                    <MaterialIcons
                        name="edit"
                        size={18}
                        color="#00D5BE"
                    />

                    <Text className="ml-2 font-semibold text-cyan-400">
                        Edit
                    </Text>
                </Pressable>

                <Pressable
                    onPress={onShare}
                    className="flex-1 flex-row items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] py-3"
                >
                    <MaterialIcons
                        name="share"
                        size={18}
                        color="#A1A1AA"
                    />

                    <Text className="ml-2 font-semibold text-zinc-300">
                        Share
                    </Text>
                </Pressable>

            </View>


        </View>
    );
}