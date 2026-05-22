import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { View } from 'react-native'
import { Button, Card } from '../hero-ui'
import ThemeText from '../ui/ThemeText'

export const HeroSection = () => {
    return (
        <Card className='rounded-3xl border border-white/10 bg-[#0F172A]'>
            {/* Background Pattern */}

            <View className="absolute inset-0 opacity-45">
                <View className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/40" />
                <View className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-violet-500/40" />
            </View>

            {/* Content */}
            <View className="relative z-10 gap-5">

                {/* Top Section */}
                <View className='flex-row justify-between items-start'>
                    <View className="gap-2">
                        <View>
                            <ThemeText className="text-3xl leading-tight">
                                Ready for your day,{' '}
                            </ThemeText>
                            <ThemeText className="text-3xl leading-tight text-cyan-400">
                                Alex?
                            </ThemeText>
                        </View>

                        <View className="flex-row items-center gap-2 ">
                            <MaterialIcons
                                name="schedule"
                                size={18}
                                color="#2DD4BF"
                            />

                            <ThemeText className="text-xs text-zinc-400">
                                09:45 AM
                            </ThemeText>
                        </View>
                    </View>
                    <Button variant='ghost' isIconOnly>
                        <FontAwesome6 name="chart-line" size={20} color="#C7C4D8" />
                    </Button>
                </View>

                {/* Stats Card */}
                <View className="flex-row items-center rounded-2xl border border-white/10 bg-white/5 p-4">

                    {/* Left */}
                    <View className="flex-1">
                        <ThemeText className="mb-1 text-sm text-zinc-400">
                            Today&apos;s Progress
                        </ThemeText>

                        <ThemeText className="text-2xl font-poppins-semibold text-white">
                            4 Classes
                        </ThemeText>
                    </View>

                    {/* Divider */}
                    <View className="mx-4 h-12 w-px bg-white/10" />

                    {/* Right */}
                    <View className="flex-1 items-end">
                        <ThemeText className="mb-1 text-sm text-zinc-400">
                            Attendance
                        </ThemeText>

                        <ThemeText className="text-2xl font-poppins-semibold text-teal-400">
                            85%
                        </ThemeText>
                    </View>
                </View>
            </View>
        </Card>
    )
}