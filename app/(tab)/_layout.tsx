import { BottomTabBar } from "@/components/navigation/bottomTabBar";
import { Tabs } from "expo-router";

export default function TabsLayout() {

    return (
        <Tabs
            tabBar={(props) => <BottomTabBar {...props} />}
            screenOptions={{ headerShown: false, animation: "shift" }}
        >
            <Tabs.Screen name="index" options={{ title: "Overview", }} />
            <Tabs.Screen name="classes" options={{ title: "Classes", }} />
            <Tabs.Screen name="social" options={{ title: "Social", }} />
            <Tabs.Screen name="profile" options={{ title: "Profile", }} />
        </Tabs>
    );
} 