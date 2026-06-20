import { cn } from '@/utils/ch';
import { colors } from '@/utils/theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Href, useRouter } from "expo-router";
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AIFab } from '../ui/aIFab';
import ThemeText from '../ui/ThemeText';
import Tab from "./Tab";

export type CustomBottomTabBarProps = BottomTabBarProps & {
    externalTab?: {
        Icon: any;
        name: string;
        href: Href;
    }
};

export default function BottomTabBar({ state, descriptors, navigation, externalTab }: CustomBottomTabBarProps) {

    const insets = useSafeAreaInsets();
    const router = useRouter();

    return (
        <>
            <AIFab fileType="AI_NOTE" bottomOffset={(26 + 56) + (15 + insets.bottom)} />
            <View
                style={[{
                    position: 'absolute',
                    alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 'auto',
                    bottom: 15 + insets.bottom

                }]}
            >
                {externalTab && (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        className={'w-20 h-14 rounded-full items-center justify-center overflow-hidden mr-2 border border-white/8'}
                        style={{
                            backgroundColor: "rgba(17,24,39,0.85)",
                        }}
                        onPress={() => {
                            router.dismissTo(externalTab.href);
                        }}
                    >
                        {externalTab.Icon}
                        <ThemeText
                            className={cn(
                                'text-xs mt-0.5 font-poppins-semibold',
                            )}
                            style={{ color: colors.textMuted }}
                        >
                            {externalTab.name}
                        </ThemeText>
                    </TouchableOpacity>)}
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
            </View>
        </>
    )
}