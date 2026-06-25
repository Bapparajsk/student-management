import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import ThemeText from '../ui/ThemeText';
import { LoadingDots } from '../ui/loading';

type QuizTimeoutModalProps = {
    title?: string;
    description?: string;
};

export const QuizTimeoutModal = ({
    title = 'Challenge Complete',
    description = 'Time limit reached. Calculating your results...',
}: QuizTimeoutModalProps) => {

    const router = useRouter();

    useEffect(() => {
        const id = setInterval(() => {
            router.replace({
                pathname: "/quiz_game/game_over" as any,
                params: {
                    score: 8,
                },
            });
        }, 10000);

        return () => clearInterval(id);

    }, [])

    return (
        <View className="items-center rounded-4xl border border-white/10 bg-[#101827] px-6 py-8" >

            {/* Icon */}

            <View className="h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <MaterialIcons
                    name="flag"
                    size={36}
                    color="#22D3EE"
                />
            </View>

            {/* Title */}

            <ThemeText className="mt-5 text-2xl font-poppins-semibold">
                {title}
            </ThemeText>

            {/* Description */}

            <ThemeText
                numberOfLines={4}
                className="mt-2 text-center text-zinc-400">
                {description}
            </ThemeText>

            {/* Loading */}

            <LoadingDots />
        </View>
    );
};
