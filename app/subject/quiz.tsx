import { ScreenContent } from "@/components/ui/ScreenContent";
import { Portal, PortalHost } from "heroui-native";
import { Text, View } from "react-native";

export default function AppLayout() {
    return (
        <ScreenContent path="quiz">
            <View className="p-5">
                <Text>Header Content</Text>
            </View>

            <View className="flex-1 p-5">
                <Text>Main Content Area</Text>
                <CustomNotification />
            </View>

            {/* Portal host positioned at the top of the screen */}
            <PortalHost name="notification-host" />
        </ScreenContent>
    );
}

function CustomNotification() {
    return (
        <Portal name="notification-portal" hostName="notification-host">
            <View className="absolute top-0 left-0 right-0 bg-blue-500 p-4">
                <Text>This notification appears at the top via Portal</Text>
            </View>
        </Portal>
    );
}