import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { PressableFeedback } from '../hero-ui';
import ThemeText from '../ui/ThemeText';
import { HeaderTitle } from '../ui/headerTitle';

type ProfessionalReadinessCardProps = {
    placementScore: number;

    resumeScore: number;
    interviewScore: number;
    dsaScore: number;

    skills: string[];
};

type ProgressItemProps = {
    title: string;
    value: number;
    color: string;
};

function ProgressItem({
    title,
    value,
    color,
}: ProgressItemProps) {
    return (
        <View className="mb-4">
            <View className="mb-1 flex-row items-center justify-between">
                <ThemeText className="text-xs text-zinc-400">
                    {title}
                </ThemeText>

                <ThemeText className="text-xs font-poppins-medium">
                    {value}/100
                </ThemeText>
            </View>

            <View className="h-2 overflow-hidden rounded-full bg-white/5">
                <View
                    className="h-full rounded-full"
                    style={{
                        width: `${value}%`,
                        backgroundColor: color,
                    }}
                />
            </View>
        </View>
    );
}

export function ProfessionalReadinessCard({
    placementScore,

    resumeScore,
    interviewScore,
    dsaScore,

    skills,
}: ProfessionalReadinessCardProps) {
    return (
        <View className="mt-5">
            {/* Section Title */}
            <HeaderTitle
                leftText="Professional Readiness"
            />

            {/* Skills Card */}
            <View className="mb-4 rounded-3xl border border-white/10 bg-white/4 p-5">

                <View className="mb-4 flex-row items-center">
                    <View className="mr-3 rounded-full bg-cyan-500/15 p-2">
                        <MaterialIcons
                            name="code"
                            size={18}
                            color="#00D5BE"
                        />
                    </View>

                    <ThemeText className="text-base font-poppins-semibold">
                        Technical Stack
                    </ThemeText>
                </View>

                <View className="flex-row flex-wrap gap-2">
                    {skills.map((skill) => (
                        <PressableFeedback
                            key={skill}
                            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2"
                        >
                            <ThemeText className="text-xs text-cyan-300">
                                {skill}
                            </ThemeText>
                        </PressableFeedback>
                    ))}
                </View>
            </View>

            {/* Placement Card */}
            <View className="rounded-3xl border border-white/10 bg-white/4 p-5">

                <View className="mb-5 flex-row items-center justify-between">

                    <View>
                        <ThemeText className="text-base font-poppins-semibold">
                            Placement Readiness
                        </ThemeText>

                        <ThemeText className="mt-1 text-xs text-zinc-500">
                            Overall career preparedness
                        </ThemeText>
                    </View>

                    <View className="items-center">
                        <ThemeText
                            className="text-3xl font-poppins-semibold"
                            textColor="#818CF8"
                        >
                            {placementScore}%
                        </ThemeText>
                    </View>

                </View>

                <ProgressItem
                    title="Resume Score"
                    value={resumeScore}
                    color="#00D5BE"
                />

                <ProgressItem
                    title="Interview Score"
                    value={interviewScore}
                    color="#818CF8"
                />

                <ProgressItem
                    title="DSA Readiness"
                    value={dsaScore}
                    color="#FACC15"
                />

                <View className="mt-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">

                    <View className="flex-row items-center">
                        <MaterialIcons
                            name="rocket-launch"
                            size={18}
                            color="#4ADE80"
                        />

                        <ThemeText className="ml-2 font-poppins-semibold text-emerald-400">
                            Placement Ready
                        </ThemeText>
                    </View>

                    <ThemeText className="mt-1 text-xs text-emerald-300/80">
                        Keep practicing aptitude and mock interviews
                        to improve your chances.
                    </ThemeText>

                </View>

            </View>
        </View>
    );
}