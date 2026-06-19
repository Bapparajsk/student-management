import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'heroui-native';
import {
    Image,
    View
} from 'react-native';
import ThemeText from '../ui/ThemeText';

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

            <ThemeText
                className="mt-0.5 font-poppins-semibold"
                style={{ color }}
            >
                {value}
            </ThemeText>

            <ThemeText className="text-[10px] text-zinc-500">
                {label}
            </ThemeText>
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

                    <ThemeText
                        numberOfLines={1}
                        className="text-xl font-poppins-semibold"
                    >
                        {name}
                    </ThemeText>

                    <ThemeText
                        numberOfLines={1}
                        className="mt-0.5 text-xs text-zinc-300"
                    >
                        {role}
                    </ThemeText>

                    <ThemeText className="mt-0.5 text-xs text-zinc-500">
                        {program} • Semester {semester}
                    </ThemeText>

                    <View className="mt-2 self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1">
                        <ThemeText className="text-[10px] leading-tight font-semibold uppercase text-emerald-400">
                            ⭐ {status}
                        </ThemeText>
                    </View>

                </View>

            </View>

            <View className="absolute right-4 top-4 z-10 flex-row gap-2">
                <Button isIconOnly size='sm' variant='ghost' onPress={onEdit} className='bg-cyan-500/15'>
                    <MaterialIcons
                        name="edit"
                        size={18}
                        color="#00D5BE"
                    />
                </Button>
                <Button isIconOnly size='sm' variant='outline' onPress={onShare} className='bg-white/3'>
                    <MaterialIcons
                        name="share"
                        size={18}
                        color="#A1A1AA"
                    />
                </Button>

                {/* <Pressable
                    onPress={onEdit}
                    className="h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15"
                >
                    
                </Pressable> */}

            </View>

            {/* Stats */}
            <View className="mt-5 flex-row justify-around rounded-2xl border border-white/5 bg-white/3 py-2">

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
        </View>
    );
}