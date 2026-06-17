import { cn } from '@/utils/ch';
import { colors } from '@/utils/theme';
import { SimpleLineIcons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ThemeText from '../ui/ThemeText';
import Tab from "./Tab";

export default function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {

    const insets = useSafeAreaInsets();

    const animatedStyle = useAnimatedStyle(() => {
        return {
            bottom: withTiming(15 + Math.round(insets.bottom)),
        }
    })

    return (
        <Animated.View
            style={[{
                position: 'absolute',
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                width: 'auto',

            }, animatedStyle]}
        >
            <TouchableOpacity
                activeOpacity={0.8}
                className={'w-20 h-14 rounded-full items-center justify-center overflow-hidden mr-2 border border-white/8 bg-[rgba(17,24,39,0.85)]'}
            >
                <SimpleLineIcons
                    name="graph"
                    size={22}
                    color={colors.textMuted}
                />

                <ThemeText
                    className={cn(
                        'text-xs mt-0.5 font-poppins-semibold',
                    )}
                    style={{ color: colors.textMuted }}
                >
                    Overview
                </ThemeText>
            </TouchableOpacity>
            <View
                style={[{
                    alignSelf: 'center',
                    borderRadius: 999999,
                    backgroundColor: "rgba(17,24,39,0.85)",
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingVertical: 3,
                    paddingHorizontal: 3,
                    width: 'auto',
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.08)",
                }]}
            >
                {state.routes.map((route, index) => (
                    <Tab
                        key={route.key}
                        route={route}
                        index={index}
                        descriptors={descriptors}
                        navigation={navigation}
                        state={state}
                    />
                ))}
            </View>

        </Animated.View>

    )
}