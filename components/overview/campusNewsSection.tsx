import { colors } from '@/utils/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { View } from 'react-native';
import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';
import { HeaderTitle } from '../ui/headerTitle';

const updates = [
    {
        title: 'Tech Fest 2024',
        description:
            'Registration opens tomorrow for the annual hackathon.',
        icon: 'rocket-launch',
        color: '#7C4DFF',
    },
    {
        title: 'AI Lab Update',
        description:
            'New H100 nodes added to the research cluster.',
        icon: 'biotech',
        color: '#14B8A6',
    },
];

export const CampusNewsSection = () => {
    return (
        <View className='mt-3'>
            <HeaderTitle
                leftText="Campus News"
                rightText="see all"
                rightTextColor={colors.info}
            />
            <View className="gap-2">
                {updates.map((item, index) => (
                    <PressableFeedback
                        key={index}
                        className="flex-row items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4"
                    >
                        {/* Icon Box */}
                        <View
                            className="h-12 w-12 items-center justify-center rounded-2xl"
                            style={{
                                backgroundColor: `${item.color}15`,
                            }}
                        >
                            <MaterialIcons
                                name={item.icon as any}
                                size={24}
                                color={item.color}
                            />
                        </View>

                        {/* Content */}
                        <View className="flex-1">
                            <ThemeText className="text-base font-poppins-semibold">
                                {item.title}
                            </ThemeText>

                            <ThemeText className="mt-1 text-xs leading-5" textColor={'#A1A1AA'}>
                                {item.description}
                            </ThemeText>
                        </View>

                        {/* Arrow */}
                        <MaterialIcons
                            name="chevron-right"
                            size={22}
                            color="#A1A1AA"
                        />
                    </PressableFeedback>
                ))}
            </View>
        </View>
    )
}
