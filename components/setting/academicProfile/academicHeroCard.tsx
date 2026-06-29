import ThemeText from '@/components/ui/ThemeText'
import { Chip } from 'components/hero-ui'
import { Image, View } from 'react-native'

export const AcademicHeroCard = () => {
    return (
        <View className="overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-5">

            <View className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10" />

            <View className="items-center">

                <View className="size-20 items-center justify-center rounded-[28px] bg-white p-2">
                    <Image
                        source={require('assets/college-logo.jpg')} // Replace with your logo source
                        className="h-full w-full rounded-[28px]"
                        resizeMode="cover"
                    />
                </View>

                <ThemeText className="mt-4 text-2xl font-poppins-semibold">
                    Bapparaj Sk
                </ThemeText>

                <ThemeText className="mt-1 text-zinc-400">
                    Computer Science & Technology
                </ThemeText>

                <View className="mt-4 flex-row gap-2">

                    <Chip color='default' variant='soft'>
                        <Chip.Label className='font-poppins-medium text-sm text-zinc-400'>
                            🏫 Elitte Institute
                        </Chip.Label>
                    </Chip>

                    <Chip color='default' variant='soft'>
                        <Chip.Label className='font-poppins-medium text-sm text-zinc-400'>
                            🎓 Semester 5
                        </Chip.Label>
                    </Chip>

                </View>

                <View className="mt-4 rounded-full bg-emerald-500/10 px-4 py-2">

                    <ThemeText className="text-xs text-emerald-400">
                        ✓ Verified Student
                    </ThemeText>

                </View>

            </View>

        </View>
    )
}