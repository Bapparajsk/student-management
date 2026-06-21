import { View } from 'react-native';

import { FilterPopover, type FilterOption } from '../popover';
import QuizCard from './quizCard';


const FILTERS: FilterOption[] = [
    {
        id: 'all',
        label: 'All',
        iconName: 'apps',
    },
    {
        id: 'practice',
        label: 'Practice',
        iconName: 'edit-note',
    },
    {
        id: 'mock',
        label: 'Mock',
        iconName: 'timer',
    },
    {
        id: 'challenge',
        label: 'Challenge',
        iconName: 'emoji-events',
    },
    {
        id: 'ai',
        label: 'AI Quiz',
        iconName: 'auto-awesome',
    },
];

export const QuizNavigator = () => {
    return (
        <View className='mt-3'>
            <FilterPopover items={FILTERS} />
            <QuizCard
                title="SQL Joins Mastery"
                chapter="Chapter 4"
                difficulty="Hard"
                questions={20}
                duration={15}
                xp={120}
                participants={1248}
                accuracy={82}
                badge='Trending'
                status="active"
            />

            <QuizCard
                title="Normalization Rules"
                chapter="Chapter 5"
                difficulty="Medium"
                questions={15}
                duration={10}
                xp={90}
                participants={986}
                accuracy={95}
                status="completed"
                score={10}
            />

            <QuizCard
                title="Transaction Management"
                chapter="Chapter 8"
                difficulty="Expert"
                questions={25}
                duration={20}
                xp={250}
                participants={0}
                accuracy={0}
                status="locked"
            />
        </View>
    )
}