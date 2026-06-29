import { MaterialIcons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';

import { cn } from '@/utils/ch';
import { isValidValueOrDefault } from '@/utils/getOptionByValue';
import { colors } from '@/utils/theme';
import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';


export type FilterOption = {
    id: string;
    label: string;
    iconName?: keyof typeof MaterialIcons.glyphMap;
};

export type FilterPopoverItemStyle = {
    activeColor?: string;
    inactiveColor?: string;
    labelClassName?: string;
}

export type FilterPopoverProps = {
    items: FilterOption[];
    onSelect?: (item: FilterOption) => void;
    activeItemId?: string;
    itemStyle?: FilterPopoverItemStyle
    zIndex?: number;
};

export const FilterPopover = ({
    items,
    onSelect,
    activeItemId,
    itemStyle,
    zIndex
}: FilterPopoverProps) => {

    const triggerWidth = useRef(120);
    const [open, setOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<FilterOption>(items.find(item => item.id === activeItemId) || items[0]);

    return (
        <View className="relative" style={{ zIndex: zIndex || 10 }}>

            {open && (
                <PressableFeedback
                    style={{
                        position: 'absolute',
                        width: 99999,
                        height: 99999,
                        top: -1000,
                        left: -1000,
                    }}
                    onPress={() => setOpen(false)}
                />
            )}

            {/* Spacer */}
            <View className="h-12" />

            <Animated.View
                layout={LinearTransition.springify().stiffness(200).mass(0.5).damping(20)}
                className="absolute right-0 top-0 rounded-3xl border border-white/5 bg-[#1a1a2b]"
                style={{ alignSelf: 'flex-start' }}
            >
                {/* Trigger */}
                <PressableFeedback
                    onPress={() =>
                        setOpen(prev => !prev)
                    }
                    onLayout={e => {
                        triggerWidth.current =
                            e
                                .nativeEvent
                                .layout
                                .width;
                    }}
                    className="flex-row items-center px-4 py-3"
                >
                    {selectedFilter.iconName && (
                        <MaterialIcons
                            name={selectedFilter.iconName}
                            size={16}
                            color="#22D3EE"
                        />
                    )}

                    <ThemeText className={cn("ml-2", itemStyle?.labelClassName)}>
                        {selectedFilter.label}
                    </ThemeText>

                    <MaterialIcons
                        name={open ? 'expand-less' : 'expand-more'}
                        size={18}
                        color="#A1A1AA"
                        style={{ marginLeft: 8 }}
                    />
                </PressableFeedback>

                {/* Content */}
                {open && (
                    <Animated.View
                        layout={LinearTransition.springify()}
                        className="mb-3 gap-1 px-2"
                    >
                        {items.map(
                            filter => {
                                const active =
                                    selectedFilter?.id ===
                                    filter.id;

                                return (
                                    <PressableFeedback
                                        key={
                                            filter.id
                                        }
                                        onPress={() => {
                                            setSelectedFilter(filter);
                                            setOpen(false);
                                            onSelect?.(filter);
                                        }}
                                        className="flex-row items-center rounded-2xl px-3 py-3"
                                    >
                                        {filter.iconName && (
                                            <MaterialIcons
                                                name={filter.iconName}
                                                size={18}
                                                color={active ? isValidValueOrDefault(itemStyle?.activeColor, '#22D3EE') : colors.textMuted}
                                            />
                                        )}

                                        <ThemeText
                                            className={cn(`mx-3`, active && 'font-semibold', itemStyle?.labelClassName)}
                                            style={{
                                                color: active ? "#22D3EE" : colors.textMuted,
                                            }}
                                        >
                                            {filter.label}
                                        </ThemeText>
                                        {active && (
                                            <MaterialIcons
                                                name="check"
                                                size={16}
                                                color="#22D3EE"
                                            />
                                        )}
                                    </PressableFeedback>
                                );
                            }
                        )}
                    </Animated.View>
                )}
            </Animated.View>
        </View>
    );
};