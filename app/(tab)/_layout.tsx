import BottomTabBar from 'components/bottomTabBar/TabBar';
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            tabBar={(props) => <BottomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen name="index" options={{ title: "Overview", }} />
            <Tabs.Screen name="classes" options={{ title: "Classes", }} />
            <Tabs.Screen name="setting" options={{ title: "Setting", }} />
            <Tabs.Screen name="profile" options={{ title: "Profile", }} />
        </Tabs>
    );
} 