import { MaterialIcons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';

import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';


export type FilterOption = {
    id: string;
    label: string;
    iconName: keyof typeof MaterialIcons.glyphMap;
};

export type FilterPopoverProps = {
    items: FilterOption[];
    onSelect?: (item: FilterOption) => void;
};

export const FilterPopover = ({
    items,
    onSelect,
}: FilterPopoverProps) => {

    const triggerWidth = useRef(120);
    const [open, setOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<FilterOption | null>(null);

    return (
        <View className="relative z-10 ">

            {open && (
                <PressableFeedback
                    style={{
                        position: 'absolute',
                        width: 99999,
                        height: 99999,
                        top: -1000,
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
                        setOpen(
                            prev =>
                                !prev
                        )
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
                    <MaterialIcons
                        name={
                            selectedFilter
                                ? selectedFilter.iconName
                                : 'apps'
                        }
                        size={16}
                        color="#22D3EE"
                    />

                    <ThemeText className="ml-2 font-semibold text-white">
                        {selectedFilter
                            ? selectedFilter.label
                            : 'Filter'}
                    </ThemeText>

                    <MaterialIcons
                        name={
                            open
                                ? 'expand-less'
                                : 'expand-more'
                        }
                        size={18}
                        color="#A1A1AA"
                        style={{
                            marginLeft: 8,
                        }}
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
                                            setSelectedFilter(
                                                filter
                                            );

                                            setOpen(
                                                false
                                            );

                                            onSelect?.(
                                                filter
                                            );
                                        }}
                                        className="flex-row items-center rounded-2xl px-3 py-3"
                                    >
                                        <MaterialIcons
                                            name={
                                                filter.iconName
                                            }
                                            size={
                                                18
                                            }
                                            color={
                                                active
                                                    ? '#22D3EE'
                                                    : '#71717A'
                                            }
                                        />

                                        <ThemeText
                                            className={`mx-3 ${active
                                                ? 'font-semibold text-cyan-400'
                                                : 'text-zinc-300'
                                                }`}
                                        >
                                            {
                                                filter.label
                                            }
                                        </ThemeText>
                                        {active && (
                                            <MaterialIcons
                                                name="check"
                                                size={
                                                    16
                                                }
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