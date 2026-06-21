import {
    FlashList,
    FlashListProps,
    ListRenderItem,
} from '@shopify/flash-list';
import { ReactNode, useCallback } from 'react';
import { Dimensions, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export type ListProps<T> = {
    data: T[];
    renderItem: ListRenderItem<T>;
    horizontal?: boolean;
    estimatedItemSize?: number;
    separatorSize?: number;
    emptyComponent?: ReactNode;
    loadingComponent?: ReactNode;
    isLoading?: boolean;
    keyExtractor?: (item: T, index: number) => string;
} & Omit<
    FlashListProps<T>,
    'data' | 'renderItem' | 'keyExtractor'
>;

export default function List<T>({
    data,
    renderItem,
    horizontal = false,
    estimatedItemSize = 300,
    separatorSize = 16,
    emptyComponent,
    loadingComponent,
    isLoading,
    keyExtractor,
    ...flashListProps
}: ListProps<T>) {
    const separator = useCallback(
        () => (
            <View
                style={{
                    width: horizontal ? separatorSize : 0,
                    height: horizontal ? 0 : separatorSize,
                }}
            />
        ),
        [horizontal, separatorSize]
    );

    if (isLoading && loadingComponent) {
        return <>{loadingComponent}</>;
    }

    return (
        <FlashList
            data={data}
            horizontal={horizontal}
            renderItem={renderItem}
            keyExtractor={
                keyExtractor ??
                ((_, index) => index.toString())
            }
            ItemSeparatorComponent={separator}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
            drawDistance={horizontal ? 800 : SCREEN_WIDTH * 2}
            scrollEventThrottle={16}
            ListEmptyComponent={
                <>
                    {emptyComponent}
                </>
            }
            {...flashListProps}

        />
    );
}