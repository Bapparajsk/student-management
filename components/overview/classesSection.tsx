import { colors } from "@/utils/theme";
import { FlashList, FlashListProps } from "@shopify/flash-list";

import { useCallback } from 'react';
import { View } from 'react-native';
import { CARD_WIDTH, ClassCard } from "../ui/classCard";
import { HeaderTitle } from "./headerTitle";



export const ClassesSection = () => {

    const renderItem: FlashListProps<number>['renderItem'] = useCallback(() => <ClassCard />, []);
    const keyExtractor: FlashListProps<number>['keyExtractor'] = useCallback((item) => item.toString(), []);

    return (
        <View className='mt-3'>
            <HeaderTitle
                leftText="Today&apos;s classes"
                rightText="see all"
                rightTextColor={colors.info}
            />

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
                    marginTop: 8,
                }}
                ItemSeparatorComponent={() => (
                    <View style={{ width: 16 }} />
                )}
            />
        </View>
    )
}