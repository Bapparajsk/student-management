import { View } from 'react-native';

// import { QuizFilterPopover } from '../popover/popover';
import { FilterPopover, type FilterOption } from '../popover/popover';

// const QUIZ_FILTERS: Tab[] = [
//     {
//         Icon: MaterialIcons,
//         iconName: 'apps',
//         value: 'all',
//         component: () => <View>
//             <QuizCard
//                 title="SQL Joins Mastery"
//                 chapter="Chapter 4"
//                 difficulty="Hard"
//                 questions={20}
//                 duration={15}
//                 xp={120}
//                 participants={1248}
//                 accuracy={82}
//                 badge='Trending'
//                 status="active"
//             />

//             <QuizCard
//                 title="Normalization Rules"
//                 chapter="Chapter 5"
//                 difficulty="Medium"
//                 questions={15}
//                 duration={10}
//                 xp={90}
//                 participants={986}
//                 accuracy={95}
//                 status="completed"
//                 score={10}
//             />

//             <QuizCard
//                 title="Transaction Management"
//                 chapter="Chapter 8"
//                 difficulty="Expert"
//                 questions={25}
//                 duration={20}
//                 xp={250}
//                 participants={0}
//                 accuracy={0}
//                 status="locked"
//             />
//         </View>
//     },
//     {
//         Icon: MaterialIcons,
//         iconName: 'auto-awesome',
//         value: 'AI',
//         component: () => <View className="h-40 w-full bg-blue-500" />
//     },
//     {
//         Icon: MaterialIcons,
//         iconName: 'edit-note',
//         value: 'practice',
//         component: () => <View className="h-40 w-full bg-green-500" />
//     },
//     {
//         Icon: MaterialIcons,
//         iconName: 'mock',
//         value: 'mock',
//         component: () => <View className="h-40 w-full bg-yellow-500" />
//     },
//     {
//         Icon: MaterialIcons,
//         iconName: 'emoji-events',
//         value: 'challenge',
//         component: () => <View className="h-40 w-full bg-purple-500" />
//     }
// ];

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
        </View>
    )
}