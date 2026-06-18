import React from 'react'
import { View } from 'react-native'
import { AchievementCard, AchievementPost } from './achievementCard'
import { ClubMoments } from './clubMoments'
import { CreatePostCard } from './createPostCard'
import { PollCard } from './pollCard'
import { PostCard } from './postCard'

export const ClubTab = () => {
    return (
        <View>
            <ClubMoments />
            <CreatePostCard />
            <PostCard post={post} />
            <PollCard />
            <AchievementCard achievement={achievements[0]} />
            <AchievementCard achievement={achievements[1]} />
            <AchievementCard achievement={achievements[2]} />
            <AchievementCard achievement={achievements[3]} />
            <AchievementCard achievement={achievements[4]} />
            <AchievementCard achievement={achievements[5]} />
            <AchievementCard achievement={achievements[6]} />
            <AchievementCard achievement={achievements[7]} />
        </View>
    )
}

export const achievements: AchievementPost[] = [
    {
        id: '1',
        organization: 'Robotics Club',
        logo: 'https://i.pravatar.cc/150?img=10',
        verified: true,

        title: '🥇 First Place Winners',
        description:
            'The Aether Robotics Team secured 1st place at the Regional AI-Botics Invitational, competing against 48 universities.',

        achievementType: 'winner',

        celebrations: 324,
        reactions: 1287,
    },

    {
        id: '2',
        organization: 'Open Source Club',
        logo: 'https://i.pravatar.cc/150?img=11',
        verified: true,

        title: '🚀 10,000 GitHub Contributions',
        description:
            'Club members collectively crossed 10k contributions this semester across open-source projects.',

        achievementType: 'milestone',

        celebrations: 215,
        reactions: 842,
    },

    {
        id: '3',
        organization: 'AI Club',
        logo: 'https://i.pravatar.cc/150?img=12',
        verified: true,

        title: '🏅 Best Innovation Award',
        description:
            'The AI Club won Best Innovation Award for their AI-powered campus navigation assistant.',

        achievementType: 'placement',

        celebrations: 289,
        reactions: 1104,
    },

    {
        id: '4',
        organization: 'Cyber Security Society',
        logo: 'https://i.pravatar.cc/150?img=13',
        verified: true,

        title: '🔐 National CTF Finalists',
        description:
            'Qualified for the National Cyber Defense Finals after ranking in the top 3 regional teams.',

        achievementType: 'placement',

        celebrations: 176,
        reactions: 697,
    },

    {
        id: '5',
        organization: 'Cloud Computing Club',
        logo: 'https://i.pravatar.cc/150?img=14',
        verified: true,

        title: '☁️ AWS Certified Campus',
        description:
            'Over 150 students earned AWS certifications this semester through club-led training programs.',

        achievementType: 'certification',

        celebrations: 412,
        reactions: 1538,
    },

    {
        id: '6',
        organization: 'Hackathon Committee',
        logo: 'https://i.pravatar.cc/150?img=15',
        verified: true,

        title: '🎉 Record Participation',
        description:
            'Campus Hackathon 2026 attracted over 1,200 registrations, the highest in university history.',

        achievementType: 'milestone',

        celebrations: 538,
        reactions: 2143,
    },

    {
        id: '7',
        organization: 'Computer Science Department',
        logo: 'https://i.pravatar.cc/150?img=16',
        verified: true,

        title: '📚 100% Placement Rate',
        description:
            'The graduating batch achieved a 100% placement record with offers from leading tech companies.',

        achievementType: 'winner',

        celebrations: 782,
        reactions: 3256,
    },

    {
        id: '8',
        organization: 'Design Club',
        logo: 'https://i.pravatar.cc/150?img=17',
        verified: true,

        title: '🎨 UI/UX Championship Winners',
        description:
            'The Design Club secured first place in the National Student UI/UX Design Challenge.',

        achievementType: 'winner',

        celebrations: 241,
        reactions: 985,
    },
];

const post = {
    id: '1',

    author: {
        name: 'Sarah Johnson',
        avatar:
            'https://randomuser.me/api/portraits/women/44.jpg',

        role: 'AI Club Leader',
    },

    createdAt: '2h ago',

    category: '🚀 AI Lab Update',

    content:
        'Just toured the new AI lab node! The quantum computation density here is insane. Excited to see what students build with this infrastructure.',

    image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995',

    likes: 124,
    comments: 12,
    views: 1400,
};