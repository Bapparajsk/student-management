import { MaterialIcons } from '@expo/vector-icons';
import { Href, useRouter } from 'expo-router';
import { View } from 'react-native';
import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';

export type AccountItem = {
    icon: string;
    title: string;
    subtitle: string[];
    href: Href;
};

const ACCOUNT_ITEMS: AccountItem[] = [
    {
        icon: 'person',
        title: 'Personal Info',
        subtitle: ["Name", "Email", "Phone"],
        href: "/setting/personalInfo" as Href,
    },
    {
        icon: 'school',
        title: 'Academic Profile',
        subtitle: ["Semester", "Department", "University"],
        href: "/setting/academicProfile" as Href,
    },
    {
        icon: 'security',
        title: 'Security & Privacy',
        subtitle: ["Password", "Devices", "Data Privacy"],
        href: "/setting/securityPrivacy" as Href,
    },
];

export const AccountSections = () => {

    const router = useRouter();

    return (
        <View className="overflow-hidden rounded-3xl border border-white/10 bg-white/3 mt-3">

            <View className="px-4 py-3">
                <ThemeText className="text-xs uppercase tracking-widest text-cyan-400 font-poppins-semibold">
                    Account
                </ThemeText>
            </View>

            {ACCOUNT_ITEMS.map(item => (
                <PressableFeedback
                    key={item.title}
                    className="flex-row items-center px-4 py-4 overflow-hidden"
                    onPress={() => router.push(item.href)}
                >
                    <View className="h-10 w-10 items-center justify-center rounded-xl bg-white/4">

                        <MaterialIcons
                            name={item.icon as any}
                            size={20}
                            color="#A1A1AA"
                        />

                    </View>

                    <View className="ml-4 flex-1">
                        <ThemeText>
                            {item.title}
                        </ThemeText>

                        <ThemeText className="mt-1 text-xs text-zinc-400">
                            {item.subtitle.join(' • ')}
                        </ThemeText>
                    </View>

                    <MaterialIcons
                        name="chevron-right"
                        size={20}
                        color="#71717A"
                    />

                </PressableFeedback>
            ))}

        </View>
    )
}