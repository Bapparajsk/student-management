import { colors } from '@/utils/theme';
import { SimpleLineIcons } from '@expo/vector-icons';
import BottomTabBar from 'components/bottomTabBar/TabBar';
import { Tabs } from "expo-router";

export default function SubjectLayout() {

    return (
        <Tabs
            tabBar={(props) => (
                <BottomTabBar
                    externalTab={{ href: "/(tab)", name: "Overview", Icon: <SimpleLineIcons name="graph" size={22} color={colors.textSecondary} /> }}
                    {...props}
                />
            )}
            screenOptions={{ headerShown: false, animation: "fade" }}
        >
            <Tabs.Screen name="index" options={{ title: "Subject", }} />
            <Tabs.Screen name="notes" options={{ title: "Notes", }} />
            <Tabs.Screen name="quiz" options={{ title: "Quiz", }} />
        </Tabs>
    );
} 