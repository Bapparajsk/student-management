import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';

const SUPPORT_ITEMS = [
    {
        icon: 'support-agent',
        title: 'Contact Support',
        subtitle: 'Get help from our team',
    },
    {
        icon: 'help-center',
        title: 'Help Center',
        subtitle: 'FAQs & guides',
    },
    {
        icon: 'bug-report',
        title: 'Report a Bug',
        subtitle: 'Found an issue?',
    },
    {
        icon: 'star-rate',
        title: 'Rate App',
        subtitle: 'Share your feedback',
    },
];

export const SupportCard = () => {
    return (
        <View className="overflow-hidden rounded-3xl border border-white/10 bg-white/3 mt-3">
            <View className="px-4 py-3">
                <ThemeText className="text-xs font-poppins-semibold uppercase tracking-widest text-cyan-400">
                    Support
                </ThemeText>

                <ThemeText className="mt-1 text-xs text-zinc-500">
                    Need help? We&apos;re here for you.
                </ThemeText>
            </View>

            {SUPPORT_ITEMS.map(item => (
                <PressableFeedback
                    key={item.title}
                    className="flex-row items-center px-4 py-4"
                >
                    <View className="h-10 w-10 items-center justify-center rounded-xl bg-white/4">

                        <MaterialIcons
                            name={item.icon as any}
                            size={20}
                            color="#A1A1AA"
                        />

                    </View>

                    <View className="ml-3 flex-1">

                        <ThemeText>
                            {item.title}
                        </ThemeText>

                        <ThemeText className="text-xs text-zinc-500">
                            {item.subtitle}
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