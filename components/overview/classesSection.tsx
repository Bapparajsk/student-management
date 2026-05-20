import { colors } from "@/utils/theme";
import { FlashList, FlashListProps } from "@shopify/flash-list";

import { useCallback } from 'react';
import { View } from 'react-native';
import ThemeText from '../ui/ThemeText';
import { CARD_WIDTH, ClassCard } from "../ui/classCard";



export const ClassesSection = () => {

    const renderItem: FlashListProps<number>['renderItem'] = useCallback(() => <ClassCard />, []);
    const keyExtractor: FlashListProps<number>['keyExtractor'] = useCallback((item) => item.toString(), []);

    return (
        <View className='mt-2'>
            <View className='flex-row justify-between items-center'>
                <ThemeText className='text-3xl'>
                    Today&apos;s classes
                </ThemeText>
                <ThemeText className='text-gray-500 mt-1' style={{ color: colors.info }}>
                    see all
                </ThemeText>
            </View>

            <FlashList
                horizontal
                data={[1, 2]}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews
                drawDistance={CARD_WIDTH * 2}
                decelerationRate="fast"
                snapToAlignment="start"
                scrollEventThrottle={16}
                contentContainerStyle={{
                    marginTop: 16,
                }}
                ItemSeparatorComponent={() => (
                    <View style={{ width: 16 }} />
                )}
            />
        </View>
    )
}