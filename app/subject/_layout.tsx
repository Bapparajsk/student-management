import BottomTabBar from 'components/bottomTabBar/TabBar';
import { Tabs } from "expo-router";

export default function SubjectLayout() {

    return (
        <Tabs
            tabBar={(props) => <BottomTabBar {...props} />}
            screenOptions={{ headerShown: false, animation: "fade" }}
        >
            <Tabs.Screen name="index" options={{ title: "Subject", }} />
            <Tabs.Screen name="notes" options={{ title: "Notes", }} />
            <Tabs.Screen name="tasks" options={{ title: "Tasks", }} />
            <Tabs.Screen name="quiz" options={{ title: "Quiz", }} />
        </Tabs>
    );
} 