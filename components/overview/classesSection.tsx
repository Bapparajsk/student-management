import { colors } from "@/utils/theme";

import { View } from 'react-native';
import { ClassCard } from "../ui/classCard";
import { HeaderTitle } from "../ui/headerTitle";
import ClassesList from "../ui/list";



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