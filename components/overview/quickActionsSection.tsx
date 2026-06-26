import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Button } from 'heroui-native/button';
import { View } from 'react-native';
import ThemeText from '../ui/ThemeText';
import { HeaderTitle } from '../ui/headerTitle';

const actions = [
    {
        label: 'Library',
        name: 'library-outline',
        color: '#7C4DFF',
        Icon: Ionicons
    },
    {
        label: 'Quiz',
        name: 'sports-esports',
        color: '#14B8A6',
        Icon: MaterialIcons
    },
    {
        label: 'Notes',
        name: 'document-text',
        color: '#7C4DFF',
        Icon: Ionicons
    },
    {
        label: 'Dining',
        name: 'restaurant',
        color: '#14B8A6',
        Icon: MaterialIcons
    },
    {
        label: 'Shuttle',
        name: 'directions-bus',
        color: '#7C4DFF',
        Icon: MaterialIcons
    },
    {
        label: 'Support',
        name: 'support-agent',
        color: '#14B8A6',
        Icon: MaterialIcons
    },

    {
        label: 'Events',
        name: 'event',
        color: '#7C4DFF',
        Icon: MaterialIcons
    },
    {
        label: 'Fees',
        name: 'payments',
        color: '#14B8A6',
        Icon: MaterialIcons
    },
    {
        label: 'Health',
        name: 'medical-services',
        color: '#7C4DFF',
        Icon: MaterialIcons
    },

    {
        label: 'Map',
        color: '#14B8A6',
        name: "map-marked-alt",
        Icon: FontAwesome5
    },
];

export const QuickActionsSection = () => {
    return (
        <View className='mt-3'>
            <HeaderTitle
                leftText="Quick Actions"
            />
            <View className="flex-row flex-wrap justify-center items-center gap-y-5">
                {actions.map(({ label, name, color, Icon }, index) => (
                    <View
                        key={index}
                        className="w-1/5 items-center justify-center gap-y-1"
                    >
                        {/* Icon Card */}
                        <Button
                            className="rounded-2xl"
                            variant='outline'
                            size='lg'
                            isIconOnly
                        >
                            <Icon
                                name={name}
                                size={28}
                                color={color}
                            />
                        </Button>

                        {/* Label */}
                        <ThemeText className="text-xs font-poppins-medium">
                            {label}
                        </ThemeText>
                    </View>
                ))}
            </View>
        </View>
    )
}