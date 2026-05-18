import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Tab from "./Tab";

export default function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {

    const insets = useSafeAreaInsets();
    const { dark, colors } = useTheme();

    const animatedStyle = useAnimatedStyle(() => {
        return {
            bottom: withTiming(10 + Math.round(insets.bottom)),
        }
    })

    return (
        <Animated.View
            style={[{
                position: 'absolute',
                alignSelf: 'center',
                borderRadius: 999999,
                backgroundColor: dark ? colors.card : colors.background,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingVertical: 3,
                paddingHorizontal: 5,
                shadowColor: '#000',
                width: 'auto',
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.15,
                shadowRadius: 3.5,
                elevation: 3,
            }, animatedStyle]}
            pointerEvents="box-none"

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
        </Animated.View>
    )
}