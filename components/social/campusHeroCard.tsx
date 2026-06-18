import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';

type CommunityHeroType =
    | 'event'
    | 'discussion'
    | 'club';

interface CommunityHeroData {
    type: CommunityHeroType;

    title: string;
    subtitle: string;

    cta: string;

    stats: {
        online: number;
        discussions: number;
        clubs: number;
        events: number;
    };
}

const formatNumber = (value: number) => {
    if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}k`;
    }

    return value.toString();
};

const getHeroConfig = (
    type: CommunityHeroType
) => {
    switch (type) {
        case 'event':
            return {
                icon: 'local-fire-department',
                color: '#00D5BE',
                label: 'Trending Event',
            };

        case 'discussion':
            return {
                icon: 'forum',
                color: '#818CF8',
                label: 'Trending Discussion',
            };

        case 'club':
            return {
                icon: 'groups',
                color: '#FACC15',
                label: 'Active Club',
            };

        default:
            return {
                icon: 'local-fire-department',
                color: '#00D5BE',
                label: 'Trending',
            };
    }
};

const data: CommunityHeroData = {
    type: 'event',

    title: 'AI Hackathon 2026',
    subtitle:
        '127 participants • 42 teams',

    cta: 'Register Now',

    stats: {
        online: 1240,
        discussions: 342,
        clubs: 24,
        events: 12,
    },
}

export const CampusHeroCard = () => {
    const config = getHeroConfig(data.type);

    return (
        <View className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5">

            {/* Glow Effects */}
            <View
                className="absolute -top-10 -right-10 h-40 w-40 rounded-full"
                style={{
                    backgroundColor:
                        `${config.color}15`,
                }}
            />

            <View className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-blue-500/10" />

            {/* Header */}
            <View className="mb-5 flex-row items-center">

                <View
                    className="mr-3 h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor:
                            `${config.color}20`,
                    }}
                >
                    <MaterialIcons
                        name={config.icon as any}
                        size={24}
                        color={config.color}
                    />
                </View>

                <View>
                    <ThemeText
                        style={{
                            color: config.color,
                        }}
                        className="text-xs font-poppins-semibold uppercase tracking-[2px]"
                    >
                        {config.label}
                    </ThemeText>

                    <ThemeText className="mt-1 text-xl font-poppins-semibold">
                        Community Hub
                    </ThemeText>
                </View>
            </View>

            {/* Featured Content */}
            <View className="mb-5">
                <ThemeText className="text-2xl font-poppins-semibold">
                    {data.title}
                </ThemeText>

                <ThemeText className="mt-2 text-sm text-zinc-400">
                    {data.subtitle}
                </ThemeText>
            </View>

            {/* CTA */}
            <PressableFeedback
                className="mb-5 self-start rounded-2xl px-4 py-3"
                style={{
                    backgroundColor:
                        `${config.color}20`,
                }}
            >
                <ThemeText
                    style={{
                        color: config.color,
                        fontSize: 14,
                    }}
                >
                    {data.cta}
                </ThemeText>
            </PressableFeedback>

            {/* Stats */}
            <View className="flex-row flex-wrap justify-between gap-y-3">

                <StatCard
                    icon="groups"
                    value={formatNumber(
                        data.stats.online
                    )}
                    label="Online"
                    color="#00D5BE"
                />

                <StatCard
                    icon="forum"
                    value={formatNumber(
                        data.stats.discussions
                    )}
                    label="Posts"
                    color="#818CF8"
                />

                <StatCard
                    icon="diversity-3"
                    value={formatNumber(
                        data.stats.clubs
                    )}
                    label="Clubs"
                    color="#FACC15"
                />

                <StatCard
                    icon="event"
                    value={formatNumber(
                        data.stats.events
                    )}
                    label="Events"
                    color="#EC4899"
                />
            </View>
        </View>
    );
};

function StatCard({
    icon,
    value,
    label,
    color,
}: {
    icon: any;
    value: string;
    label: string;
    color: string;
}) {
    return (
        <View className="flex-row items-center rounded-full border border-white/10 bg-white/4 px-3 py-2">
            <MaterialIcons
                name={icon}
                size={14}
                color={color}
            />

            <ThemeText className="ml-2 text-sm font-poppins-semibold text-white">
                {value}
            </ThemeText>

            <ThemeText className="ml-1 text-xs text-zinc-500">
                {label}
            </ThemeText>
        </View>
    );
}