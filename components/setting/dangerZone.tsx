import { MaterialIcons } from '@expo/vector-icons'
import { View } from 'react-native'
import { Button, PressableFeedback } from '../hero-ui'
import ThemeText from '../ui/ThemeText'

export const DangerZone = () => {
    return (
        <View
            className="mt-3 overflow-hidden rounded-3xl border border-red-500/20 bg-red-500/5 px-3"
        >

            <View className="px-1 py-3">

                <ThemeText
                    className="text-xs font-poppins-semibold uppercase tracking-widest text-red-400"
                >
                    Danger Zone
                </ThemeText>

            </View>

            <Button variant='danger-soft' >
                <MaterialIcons
                    name="logout"
                    size={20}
                    color="#F87171"
                />

                <ThemeText
                    className="ml-2 font-poppins-semibold text-red-400 "
                >
                    Logout
                </ThemeText>

            </Button>

            <PressableFeedback
                className="flex-row items-center justify-center pb-4 mt-2"
            >
                <MaterialIcons
                    name="devices"
                    size={16}
                    color="#A1A1AA"
                />

                <ThemeText
                    className="ml-2 text-sm text-zinc-500 "
                >
                    Sign out from all devices
                </ThemeText>

            </PressableFeedback>

        </View>
    )
}