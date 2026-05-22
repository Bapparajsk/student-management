import { cn } from '@/utils/ch';
import { format, getCurrentWeekDays } from '@/utils/date';
import { useMemo } from 'react';
import { View } from 'react-native';
import { PressableFeedback, Surface } from '../hero-ui';
import ThemeText from '../ui/ThemeText';

export const WeekCalendar = () => {

    const weekDays = useMemo(() => getCurrentWeekDays(), []);

    return (
        <Surface className="mt-3 bg-white/3format flex-row gap-x-0.5 p-3 justify-center border border-white/5" >
            {weekDays.map((item, index) => {
                const isActive = item.isToday;

                return (
                    <PressableFeedback
                        isDisabled={isActive}
                        key={index}
                        className={cn(
                            'relative w-13 items-center justify-center rounded-2xl px-3 py-3',
                            isActive ? 'border border-violet-400/30 bg-[#241c39]' : 'opacity-50'
                        )}
                        style={
                            isActive
                                ? {
                                    shadowColor: '#8B5CF6',
                                    shadowOffset: {
                                        width: 0,
                                        height: 0,
                                    },
                                    shadowOpacity: 0.4,
                                    shadowRadius: 20,
                                    elevation: 6,
                                }
                                : undefined
                        }
                    >
                        {/* Top Indicator */}
                        {isActive && (
                            <View
                                className="absolute top-0 h-1 w-8 rounded-full bg-violet-400"
                                style={{
                                    shadowColor: '#A78BFA',
                                    shadowOffset: {
                                        width: 0,
                                        height: 0,
                                    },
                                    shadowOpacity: 1,
                                    shadowRadius: 8,
                                }}
                            />
                        )}

                        {/* Day */}
                        <ThemeText
                            className={cn('text-xs',
                                isActive ? 'text-violet-300' : 'text-zinc-400'
                            )}
                        >
                            {format(item.day)}
                        </ThemeText>

                        {/* Date */}
                        <ThemeText
                            className={cn('mt-1 text-xl font-poppins-semibold',
                                isActive ? 'text-violet-200' : 'text-white'
                            )}
                        >
                            {item.date.day}
                        </ThemeText>
                    </PressableFeedback>
                );
            })}
        </Surface>
    );
};