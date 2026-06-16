import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
                borderRadius: 999999,
                backgroundColor: "rgba(17,24,39,0.85)",
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingVertical: 3,
                paddingHorizontal: 5,
                width: 'auto',
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.08)",
            }, animatedStyle]}
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