import { colors } from "@/utils/theme";

import { View } from 'react-native';
import ClassesList from "../ui/classList";
import { HeaderTitle } from "../ui/headerTitle";



export const ClassesSection = () => {


    return (
        <View className='mt-3'>
            <HeaderTitle
                leftText="Today&apos;s classes"
                rightText="see all"
                rightTextColor={colors.info}
            />

            <ClassesList
                horizontal
                flashListProps={{
                    contentContainerStyle: {
                        marginTop: 0,
                    }
                }}
            />
        </View>
    )
}