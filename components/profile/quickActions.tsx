import { MaterialIcons } from '@expo/vector-icons';
import { Href, useRouter } from "expo-router";
import { View } from 'react-native';
import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';
import { HeaderTitle } from '../ui/headerTitle';

type QuickAction = {
    id: string;
    title: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    color: string;
};

const ACTIONS: QuickAction[] = [
    {
        id: 'schedule',
        title: 'Schedule',
        icon: 'calendar-month',
        color: '#22D3EE',
    },
    {
        id: 'documents',
        title: 'Documents',
        icon: 'description',
        color: '#818CF8',
    },
    {
        id: 'certificates',
        title: 'Certificates',
        icon: 'workspace-premium',
        color: '#FACC15',
    },
    {
        id: 'courses',
        title: 'Courses',
        icon: 'school',
        color: '#34D399',
    },
    {
        id: 'clubs',
        title: 'Clubs',
        icon: 'groups',
        color: '#A78BFA',
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: 'settings',
        color: '#FB923C',
    },
];

function QuickActionCard({
    action,
    href
}: {
    action: QuickAction;
    href: Href;
}) {

    const router = useRouter();

    const handlePress = () => {
        router.push(href);
    };

    return (
        <PressableFeedback
            onPress={handlePress}
            className="flex-1 items-center overflow-hidden rounded-[28px] border border-white/10 bg-white/4 px-3 py-5"
        >
            {/* Glow */}
            <View
                className="absolute -right-5 -top-5 h-16 w-16 rounded-full"
                style={{
                    backgroundColor: `${action.color}15`,
                }}
            />

            {/* Icon */}
            <View
                className="h-14 w-14 items-center justify-center rounded-3xl"
                style={{
                    backgroundColor: `${action.color}20`,
                }}
            >
                <MaterialIcons
                    name={action.icon}
                    size={26}
                    color={action.color}
                />
            </View>

            {/* Title */}
            <ThemeText className="mt-3 text-center text-sm font-poppins-semibold">
                {action.title}
            </ThemeText>
        </PressableFeedback>
    );
}

export const QuickActionsGrid = () => {
    return (
        <View>
            <HeaderTitle leftText="Quick Actions" />
            {/* Grid */}
            <View className="gap-3">
                <View className="flex-row gap-3">
                    <QuickActionCard action={ACTIONS[0]} href={"/"} />
                    <QuickActionCard action={ACTIONS[1]} href={"/"} />
                    <QuickActionCard action={ACTIONS[2]} href={"/"} />
                </View>

                <View className="flex-row gap-3">
                    <QuickActionCard action={ACTIONS[3]} href={"/"} />
                    <QuickActionCard action={ACTIONS[4]} href={"/"} />
                    <QuickActionCard action={ACTIONS[5]} href={"/setting"} />
                </View>
            </View>
        </View>
    );
}