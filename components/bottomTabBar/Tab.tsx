import { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import { colors } from "@/utils/theme";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
    NavigationRoute,
    ParamListBase,
} from '@react-navigation/native';

import Animated, {
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

import If from '@/components/If';
import getIcon from '@/lib/icon';
import ThemeText from 'components/ui/ThemeText';
import { Image } from 'expo-image';
import { cn } from 'utils/ch';

export type TabProps =
    Pick<
        BottomTabBarProps,
        "descriptors" | "navigation" | "state"
    > & {
        route: NavigationRoute<ParamListBase, string>;
        index: number;
    };

const isProfileTab = (label: string) => label.toLowerCase() === 'profile';
const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function Tab({
    route,
    index,
    descriptors,
    state,
    navigation,
}: TabProps) {

    const { options } = descriptors[route.key];

    const label =
        options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
                ? options.title
                : route.name;

    const { active, inactive } = useMemo(() => {
        return getIcon(label.toString().toLowerCase());
    }, [label]);

    const isFocused = state.index === index;

    const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: withSpring(
                        isFocused ? 1 : 0,
                        {
                            duration: 350,
                            mass: 0.5,
                        }
                    ),
                },
            ],
            opacity: withSpring(
                isFocused ? 1 : 0,
                {
                    duration: 350,
                    mass: 0.5,
                }
            ),
        };
    }, [isFocused]);

    return (
        <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            className={'w-20 h-14 rounded-full items-center justify-center overflow-hidden'}
        >
            <Animated.View
                className='absolute h-full w-full rounded-full'
                style={[animatedStyle, { backgroundColor: colors.primary + "50" }]}
            />

            {isProfileTab(label.toString()) ?
                <Image
                    style={{
                        width: 22,
                        height: 22,
                        borderRadius: 9999,
                    }}
                    source={"https://picsum.photos/seed/696/3000/2000"}
                    placeholder={{ blurhash }}
                    contentFit="cover"
                    transition={1000}
                />
                :
                <If condition={isFocused}>
                    <If.Then>
                        <active.Icon
                            name={active.name}
                            size={22}
                            color={colors.primary}
                        />
                    </If.Then>

                    <If.Else>
                        <inactive.Icon
                            name={inactive.name}
                            size={22}
                            color={colors.text}
                        />
                    </If.Else>
                </If>}

            <ThemeText
                className={cn(
                    'text-xs mt-0.5 font-poppins-semibold',
                )}
                style={{ color: isFocused ? colors.primary : colors.text }}
            >
                {label.toString()}
            </ThemeText>
        </TouchableOpacity>
    );
}