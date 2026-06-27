import { MaterialIcons } from '@expo/vector-icons'
import { Image, View } from 'react-native'
import { PressableFeedback } from '../hero-ui'
import ThemeText from '../ui/ThemeText'

export const HeroHeaderCard = () => {
    return (
        <View className="overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-5">

            {/* Glow */}
            <View className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-500/10" />

            <View className="items-center">

                <View className="h-16 w-16 items-center justify-center rounded-[28px]">
                    <Image
                        source={require('../../assets/profile.jpg')} // Replace with your logo source
                        className="h-full w-full rounded-[28px]"
                        resizeMode="cover"
                    />
                </View>

                <ThemeText className="mt-4 text-2xl">
                    Bapparaj Sk
                </ThemeText>

                <ThemeText className="mt-1 text-zinc-400">
                    Semester 5 • CST
                </ThemeText>

                <ThemeText className="mt-1 text-cyan-400">
                    Full Stack Developer
                </ThemeText>

                <View className="mt-4 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">

                    <ThemeText className="text-xs font-medium text-cyan-400">
                        ✨ Verified Student
                    </ThemeText>

                </View>

                <View className="mt-5 flex-row gap-3">

                    <PressableFeedback
                        className="flex-row items-center rounded-2xl bg-cyan-500 px-5 py-3 "
                    >
                        <MaterialIcons
                            name="edit"
                            size={18}
                            color="#fff"
                        />

                        <ThemeText className="ml-2">
                            Edit Profile
                        </ThemeText>

                    </PressableFeedback>

                    <PressableFeedback
                        className="flex-row items-center rounded-2xl  border-white/10 bg-white/3 px-5 py-3"
                    >
                        <MaterialIcons
                            name="share"
                            size={18}
                            color="#fff"
                        />

                        <ThemeText className="ml-2">
                            Share
                        </ThemeText>

                    </PressableFeedback>
                </View>
            </View>
        </View>
    )
}