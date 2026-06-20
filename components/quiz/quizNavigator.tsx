import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import { type Tab, TabNavigation } from '../navigation/tabNavigation';

const QUIZ_FILTERS: Tab[] = [
    {
        Icon: MaterialIcons,
        iconName: 'apps',
        value: 'all',
        component: () => <View className="h-40 w-full bg-red-500" />
    },
    {
        Icon: MaterialIcons,
        iconName: 'auto-awesome',
        value: 'AI',
        component: () => <View className="h-40 w-full bg-blue-500" />
    },
    {
        Icon: MaterialIcons,
        iconName: 'edit-note',
        value: 'practice',
        component: () => <View className="h-40 w-full bg-green-500" />
    },
    {
        Icon: MaterialIcons,
        iconName: 'mock',
        value: 'mock',
        component: () => <View className="h-40 w-full bg-yellow-500" />
    },
    {
        Icon: MaterialIcons,
        iconName: 'emoji-events',
        value: 'challenge',
        component: () => <View className="h-40 w-full bg-purple-500" />
    }
];

export const QuizNavigator = () => {
    return (
        <View className='mt-3'>
            <TabNavigation tabs={QUIZ_FILTERS} />
        </View>
    )
}