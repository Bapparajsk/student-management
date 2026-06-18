import {
    Image,
    Pressable,
    ScrollView,
    View
} from 'react-native';
import { PressableFeedback } from '../hero-ui';
import If from '../If';
import { FetcherChip } from '../ui/fetcherChip';
import { HeaderTitle } from '../ui/headerTitle';
import ThemeText from '../ui/ThemeText';

interface Club {
    id: string;
    name: string;
    category: string;
    coverImage: string;

    members: number;
    activeToday: number;

    isJoined: boolean;
    isTrending?: boolean;
}


const clubs = [
    {
        id: '1',
        name: 'AI Club',
        category: 'Technology',
        coverImage:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995',

        members: 432,
        activeToday: 23,

        isJoined: false,
        isTrending: true,
    },

    {
        id: '2',
        name: 'Open Source Club',
        category: 'Development',
        coverImage:
            'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',

        members: 289,
        activeToday: 15,

        isJoined: true,
    },

    {
        id: '3',
        name: 'Photography Club',
        category: 'Creative',
        coverImage:
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',

        members: 186,
        activeToday: 9,

        isJoined: false,
    },
];


export function ActiveClubs() {
    return (
        <View className="mt-6">

            {/* Header */}
            <HeaderTitle
                leftText="Active Clubs"
                rightText="see all"
            />

            {/* Clubs */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 12,
                    paddingRight: 20,
                }}
            >
                {clubs.map(club => (
                    <ClubCard
                        key={club.id}
                        club={club}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

function ClubCard({
    club,
}: {
    club: Club;
}) {
    return (
        <Pressable className="w-72 overflow-hidden rounded-3xl border border-white/10 bg-white/4">

            {/* Cover */}
            <View className="relative h-32">
                <Image
                    source={{
                        uri: club.coverImage,
                    }}
                    className="h-full w-full"
                />

                <View className='absolute left-3 top-3'>
                    <If condition={club.isTrending === true}>
                        <If.Then>
                            <FetcherChip iconName={"local-fire-department"} text='Trending' />
                        </If.Then>
                    </If>
                </View>
            </View>

            {/* Content */}
            <View className="p-4">

                {/* Name */}
                <ThemeText
                    numberOfLines={1}
                    className="text-lg font-poppins-semibold"
                >
                    {club.name}
                </ThemeText>

                {/* Category */}
                <ThemeText className="text-sm text-zinc-500">
                    {club.category}
                </ThemeText>

                {/* Stats */}
                <View className="mt-4 flex-row items-center justify-between">

                    <View>
                        <ThemeText className="text-xs text-zinc-500">
                            Members
                        </ThemeText>

                        <ThemeText className="font-poppins-semibold">
                            {club.members}
                        </ThemeText>
                    </View>

                    <View>
                        <ThemeText className="text-xs text-zinc-500">
                            Active Today
                        </ThemeText>

                        <ThemeText className="font-poppins-semibold text-cyan-400">
                            {club.activeToday}
                        </ThemeText>
                    </View>
                </View>

                {/* Button */}
                <PressableFeedback
                    className="mt-4 items-center rounded-2xl py-3"
                    style={{
                        backgroundColor: club.isJoined
                            ? 'rgba(255,255,255,0.08)'
                            : 'rgba(0,213,190,0.15)',
                    }}
                    isDisabled={club.isJoined}
                >
                    <ThemeText
                        style={{
                            color: club.isJoined
                                ? '#A1A1AA'
                                : '#00D5BE',
                        }}
                    >
                        {club.isJoined
                            ? 'Joined'
                            : 'Join Club'}
                    </ThemeText>
                </PressableFeedback>
            </View>
        </Pressable>
    );
}