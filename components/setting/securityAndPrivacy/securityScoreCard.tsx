import ThemeText from '@/components/ui/ThemeText'
import { MaterialIcons } from '@expo/vector-icons'
import { View } from 'react-native'

export const SecurityScoreCard = () => {
    return (
        <View
            className="mb-6 overflow-hidden rounded-3xl border border-emerald-500/10 bg-emerald-500/3 p-4"
        >

            <View className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/10" />

            <View className="flex-row items-center justify-between">

                <View className="flex-row items-center">

                    <View
                        className=" h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10"
                    >
                        <MaterialIcons
                            name="shield"
                            size={24}
                            color="#34D399"
                        />
                    </View>

                    <View className="ml-3">

                        <ThemeText>
                            Account Protected
                        </ThemeText>

                        <ThemeText className="mt-1 text-xs text-zinc-500">
                            No security recommendations
                        </ThemeText>

                    </View>

                </View>

                <View className="items-end">

                    <ThemeText className="text-2xl font-poppins-semibold text-emerald-400">
                        92%
                    </ThemeText>

                    <ThemeText className="text-xs text-zinc-500">
                        Security Score
                    </ThemeText>

                </View>
            </View>
        </View>
    )
}
