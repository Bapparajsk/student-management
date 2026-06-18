import { TabNavigation } from '@/components/social';
import { ScreenContent } from '@/components/ui/ScreenContent';
import React from 'react';

export default function SocialScreen() {
    return (
        <ScreenContent path='(tab)/social' bottomBarHeight={80}>
            <TabNavigation />
            {/* <CommunityHeroCard />
            <TrendingDiscussions />
            <ActiveClubs />
            <UpcomingEvents />
            <ConnectStudents /> */}
        </ScreenContent>
    )
}


