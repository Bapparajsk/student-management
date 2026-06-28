import { colors } from "@/utils/theme"
import { Fontisto } from "@expo/vector-icons"
import { View } from "react-native"
import { Button } from "../hero-ui"

export const HeaderRightComponent = () => {
    return (
        <View className='flex-row items-center'>
            <Button hitSlop={10} variant='ghost' isIconOnly>
                <Fontisto name="bell" size={20} color={colors.text} />
            </Button>
            <Button hitSlop={10} variant='ghost' isIconOnly>
                <Fontisto name="search" size={20} color={colors.text} />
            </Button>
        </View>
    )
}