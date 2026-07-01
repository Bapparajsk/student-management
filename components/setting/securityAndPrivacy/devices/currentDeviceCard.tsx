import ThemeText from "@/components/ui/ThemeText";
import { MaterialIcons } from "@expo/vector-icons";
import { PressableFeedback } from "components/hero-ui";
import { View } from "react-native";

export const CurrentDeviceCard = () => {
    return (
        <View className="overflow-hidden rounded-3xl border border-cyan-500/10 bg-white/3 p-4">
            <View className="flex-row items-start">

                <View className="h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <MaterialIcons
                        name="laptop-mac"
                        size={28}
                        color="#22D3EE"
                    />
                </View>

                <View className="ml-3 flex-1">

                    <View className="flex-row items-center">

                        <ThemeText
                            className="font-poppins-semibold text-lg"
                        >
                            MacBook Air M5
                        </ThemeText>

                    </View>

                    <ThemeText className="mt-1 text-sm text-zinc-500">
                        macOS • Chrome
                    </ThemeText>
                    <ThemeText className="mt-1 text-sm text-zinc-500">
                        Mumbai, India
                    </ThemeText>

                </View>

            </View>

            <View className="mt-4 flex-row items-center justify-between">

                <View
                    className="rounded-full bg-emerald-500/10 px-3 py-1"
                >
                    <ThemeText className="text-xs text-emerald-400">
                        ● Active Now
                    </ThemeText>
                </View>

                <PressableFeedback
                    className="rounded-2xl bg-white/4 px-4 py-2"
                >
                    <ThemeText className="text-cyan-400">
                        View Details
                    </ThemeText>
                </PressableFeedback>

            </View>

        </View>
    );
};