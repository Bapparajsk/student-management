import { FlashList, FlashListProps } from '@shopify/flash-list';
import { Dimensions, View } from 'react-native';
import { ClassCard } from './classCard';
import { SCREEN_HORIZONTAL_PADDING } from './ScreenContent';

export type ClassesListProps = {
    horizontal?: boolean;
    flashListProps?: Omit<FlashListProps<number>, 'data' | 'renderItem' | 'keyExtractor'>;
}

export const CARD_WIDTH = 332;
const ScreenWidth = Dimensions.get('window').width - SCREEN_HORIZONTAL_PADDING;

export default function ClassesList({ flashListProps, horizontal }: ClassesListProps) {
    const renderItem: FlashListProps<number>['renderItem'] = ({ item }) => (
        <ClassCard isFullWidth={!horizontal} />
    );
    const keyExtractor: FlashListProps<number>['keyExtractor'] = (item) => item.toString();

    return (
        <FlashList
            horizontal={horizontal}
            data={[1, 2]}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
            drawDistance={horizontal ? CARD_WIDTH * 2 : ScreenWidth * 2}
            decelerationRate="fast"
            snapToAlignment="start"
            scrollEventThrottle={16}
            contentContainerStyle={{
                marginTop: 8,
            }}
            ItemSeparatorComponent={() => (
                <View style={{
                    width: horizontal ? 16 : 0,
                    height: horizontal ? 0 : 16
                }} />
            )}
            {...flashListProps}
        />
    )
}