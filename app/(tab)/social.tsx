import { ActiveClubs, CommunityHeroCard, ConnectStudents, TopContributors, TrendingDiscussions, UpcomingEvents } from '@/components/social';
import { ScreenContent } from '@/components/ui/ScreenContent';
import React from 'react';

export default function SocialScreen() {
    return (
        <ScreenContent path='(tab)/social' bottomBarHeight={80}>
            <CommunityHeroCard data={{
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
            }} />
            <TrendingDiscussions
                discussions={discussions}
            />
            <ActiveClubs
                clubs={clubs}
            />
            <UpcomingEvents
                events={events}
            />
            <ConnectStudents />
            <TopContributors />
        </ScreenContent>
    )
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

const discussions = [
    {
        id: '1',
        title:
            'Google Internship Preparation 2026',
        comments: 256,
        views: 1240,
        category: 'Career',
        timeAgo: '2h ago',
        trendingRank: 1,
    },
    {
        id: '2',
        title:
            'AI Hackathon Team Formation',
        comments: 142,
        views: 842,
        category: 'Hackathon',
        timeAgo: '4h ago',
        trendingRank: 2,
    },
    {
        id: '3',
        title:
            'DBMS Final Exam Discussion',
        comments: 89,
        views: 451,
        category: 'Academics',
        timeAgo: '6h ago',
        trendingRank: 3,
    },
];