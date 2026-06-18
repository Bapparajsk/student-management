import { MaterialIcons } from '@expo/vector-icons';
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

interface CommunityEvent {
    id: string;

    title: string;
    category: string;

    coverImage: string;

    location: string;

    date: string;
    time: string;

    participants: number;

    isRegistered: boolean;
    isFeatured?: boolean;
}

const events = [
    {
        id: '1',
        title: 'AI Hackathon 2026',
        category: 'Hackathon',

        coverImage:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',

        location: 'Main Auditorium',

        date: 'Tomorrow',
        time: '9:00 AM',

        participants: 127,

        isRegistered: false,
        isFeatured: true,
    },

    {
        id: '2',
        title: 'Placement Workshop',
        category: 'Career',

        coverImage:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',

        location: 'Seminar Hall',

        date: 'Friday',
        time: '2:00 PM',

        participants: 89,

        isRegistered: true,
    },
];

export function UpcomingEvents() {
    return (
        <View className="mt-6">
            {/* Header */}
            <HeaderTitle
                leftText="Upcoming Events"
                rightText="see all"
            />


            {/* Events */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 14,
                    paddingRight: 20,
                }}
            >
                {events.map(event => (
                    <EventCard
                        key={event.id}
                        event={event}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

function EventCard({
    event,
}: {
    event: CommunityEvent;
}) {
    return (
        <Pressable className="w-80 overflow-hidden rounded-3xl border border-white/10 bg-white/4">

            {/* Banner */}
            <View className="relative h-40">
                <Image
                    source={{
                        uri: event.coverImage,
                    }}
                    className="h-full w-full"
                />

                <View className='absolute left-3 top-3'>
                    <If condition={event.isFeatured === true}>
                        <If.Then>
                            <FetcherChip iconName={"local-fire-department"} text='Featured' />
                        </If.Then>
                    </If>
                </View>
            </View>

            {/* Content */}
            <View className="p-4">

                {/* Category */}
                <View className="mb-2 self-start rounded-full bg-cyan-400/10 px-3 py-1">
                    <ThemeText className="text-xs text-cyan-400">
                        {event.category}
                    </ThemeText>
                </View>

                {/* Title */}
                <ThemeText
                    numberOfLines={2}
                    className="text-lg font-poppins-semibold"
                >
                    {event.title}
                </ThemeText>

                {/* Date */}
                <View className="mt-3 flex-row items-center">
                    <MaterialIcons
                        name="schedule"
                        size={16}
                        color="#A1A1AA"
                    />

                    <ThemeText className="ml-2 text-sm text-zinc-400">
                        {event.date} • {event.time}
                    </ThemeText>
                </View>

                {/* Location */}
                <View className="mt-2 flex-row items-center">
                    <MaterialIcons
                        name="location-on"
                        size={16}
                        color="#A1A1AA"
                    />

                    <ThemeText
                        numberOfLines={1}
                        className="ml-2 flex-1 text-sm text-zinc-400"
                    >
                        {event.location}
                    </ThemeText>
                </View>

                {/* Bottom */}
                <View className="mt-4 flex-row items-center justify-between">

                    <View className="flex-row items-center">
                        <MaterialIcons
                            name="groups"
                            size={16}
                            color="#00D5BE"
                        />

                        <ThemeText className="ml-2 text-cyan-400">
                            {event.participants}
                        </ThemeText>
                    </View>

                    <PressableFeedback
                        className="rounded-xl px-4 py-2"
                        style={{
                            backgroundColor:
                                event.isRegistered
                                    ? 'rgba(255,255,255,0.08)'
                                    : 'rgba(0,213,190,0.15)',
                        }}
                        isDisabled={event.isRegistered}
                    >
                        <ThemeText
                            style={{
                                color: event.isRegistered
                                    ? '#A1A1AA'
                                    : '#00D5BE',
                                fontSize: 14,
                            }}
                        >
                            {event.isRegistered
                                ? 'Registered'
                                : 'Register'}
                        </ThemeText>
                    </PressableFeedback>
                </View>
            </View>
        </Pressable>
    );
}