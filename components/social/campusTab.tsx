import { memo } from 'react';
import { View } from 'react-native';
import { ActiveClubs } from "./activeClubs";
import { CampusHeroCard } from './campusHeroCard';
import { TrendingDiscussions } from "./trendingDiscussions";
import { UpcomingEvents } from "./upcomingEvents";

const CampusTab = () => {
    return (
        <View>
            <CampusHeroCard />
            <TrendingDiscussions />
            <ActiveClubs />
            <UpcomingEvents />
        </View>
    )
}

export default memo(CampusTab);