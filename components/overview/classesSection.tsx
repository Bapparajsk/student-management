import { colors } from "@/utils/theme";

import { View } from 'react-native';
import { ClassCard } from "../ui/classCard";
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
                // contentContainerStyle = {
                //         marginTop: 0,
                //     }
                data={[1, 2, 3]}
                renderItem={({ item }) => (
                    <ClassCard
                        // classData
                        isFullWidth={false}
                    />
                )}
            />

        </View>
    )
}