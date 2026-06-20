import { colors } from "@/utils/theme";
import { View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { Tabs } from "../../hero-ui";

export const TabTrigger = ({ isSelected, value, Icon, name }: { isSelected?: boolean; value: string; Icon: any; name: string }) => {
    return (
        <Tabs.Label>
            <View className='flex-row items-center gap-1 py-1'>
                <Icon name={name} size={18} color={isSelected ? colors.text : colors.textMuted} />
                <Tabs.Label className='font-poppins-medium text-sm' style={{ color: isSelected ? colors.text : colors.textMuted }}>
                    {value}
                </Tabs.Label>
            </View>
        </Tabs.Label>
    )
}

export const AnimatedContentContainer = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <Animated.View
        entering={FadeIn.duration(200)}
        exiting={FadeOut.duration(200)}
        className="gap-6"
    >
        {children}
    </Animated.View>
);