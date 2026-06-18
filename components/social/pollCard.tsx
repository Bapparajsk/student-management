import { cn } from "@/utils/ch";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { PressableFeedback } from "../hero-ui";
import ThemeText from "../ui/ThemeText";

export interface PollOption {
    id: string;
    label: string;
    votes: number;
}

export interface CommunityPoll {
    id: string;

    author: {
        name: string;
        avatar?: string;
    };

    question: string;

    totalVotes: number;

    endsIn: string;

    options: PollOption[];

    hasVoted?: boolean;

    selectedOption?: string;
}

const poll = {
    id: '1',

    author: {
        name: 'Hackathon Committee',
    },

    question:
        'Which tech stack for the upcoming Hackathon?',

    totalVotes: 256,

    endsIn: '5h left',

    hasVoted: true,

    selectedOption: 'react',

    options: [
        {
            id: 'react',
            label: 'React Native',
            votes: 108,
        },
        {
            id: 'flutter',
            label: 'Flutter',
            votes: 72,
        },
        {
            id: 'swift',
            label: 'Swift',
            votes: 38,
        },
        {
            id: 'kotlin',
            label: 'Kotlin',
            votes: 38,
        },
    ],
};

export const PollCard = () => {
    return (
        <View className="rounded-[28px] border border-white/10 bg-white/4 p-4">

            {/* Header */}
            <View className="flex-row items-center">

                <View className="h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15">
                    <MaterialIcons
                        name="poll"
                        size={20}
                        color="#00D5BE"
                    />
                </View>

                <View className="ml-3 flex-1">
                    <ThemeText className="text-sm font-poppins-semibold">
                        {poll.author.name}
                    </ThemeText>

                    <ThemeText className="text-xs text-zinc-500">
                        Official Poll • {poll.endsIn}
                    </ThemeText>
                </View>
            </View>

            {/* Question */}
            <ThemeText numberOfLines={10} className="mt-4 font-poppins-semibold">
                {poll.question}
            </ThemeText>

            {/* Options */}
            <View className="mt-4 gap-2">
                {poll.options.map(option => (
                    <PollOptionRow
                        key={option.id}
                        option={option}
                        totalVotes={poll.totalVotes}
                        selected={
                            poll.selectedOption === option.id
                        }
                    />
                ))}
            </View>

            {/* Footer */}
            <ThemeText className="mt-4 text-xs text-zinc-500">
                {poll.totalVotes} votes
            </ThemeText>
        </View>
    );
}

function PollOptionRow({
    option,
    totalVotes,
    selected,
}: any) {
    const percentage = Math.round(
        (option.votes / totalVotes) * 100
    );

    return (
        <PressableFeedback className="overflow-hidden rounded-2xl border border-white/10">

            <View
                className="absolute left-0 top-0 bottom-0 bg-cyan-500/10"
                style={{
                    width: `${percentage}%`,
                }}
            />

            <View className="flex-row items-center justify-between px-4 py-4">

                <ThemeText
                    className={cn(
                        "text-sm",
                        selected
                            ? 'font-poppins-semibold text-cyan-400'
                            : 'font-poppins-medium text-white'
                    )}
                >
                    {option.label}
                </ThemeText>

                <ThemeText className="text-sm font-poppins-semibold text-cyan-400">
                    {percentage}%
                </ThemeText>

            </View>

        </PressableFeedback>
    );
}