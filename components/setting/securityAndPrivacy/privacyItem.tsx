import { FilterOption, FilterPopover } from "@/components/popover";
import ThemeText from "@/components/ui/ThemeText";
import { MaterialIcons } from "@expo/vector-icons";
import { PressableFeedback } from "components/hero-ui";
import { View } from "react-native";

type PrivacyItemProps = {
    icon: keyof typeof MaterialIcons.glyphMap;
    iconColor: string;
    title: string;
    value: string;
    onPress?: () => void;
    index: number;
};

const options: FilterOption[] = [
    { id: "1", label: "University Only", iconName: "school" },
    { id: "2", label: "Public", iconName: "public" },
    { id: "3", label: "Private", iconName: "lock" }
];

export const PrivacyItem = ({
    icon,
    iconColor,
    title,
    value,
    onPress,
    index
}: PrivacyItemProps) => {

    return (
        <View className="relative">
            <PressableFeedback
                onPress={onPress}
                className="flex-row items-center px-4 py-4 z-0"
            >
                <View className="h-11 w-11 items-center justify-center rounded-xl bg-white/4">

                    <MaterialIcons
                        name={icon}
                        size={20}
                        color={iconColor}
                    />

                </View>

                <View className="ml-3 flex-1">

                    <ThemeText>
                        {title}
                    </ThemeText>

                    <ThemeText className="mt-1 text-xs text-zinc-500">
                        {value}
                    </ThemeText>
                </View>
            </PressableFeedback>
            <View className="absolute right-3.5 top-5">
                <FilterPopover
                    activeItemId={value}
                    zIndex={index * 1000}
                    itemStyle={{
                        labelClassName: "text-sm"
                    }}
                    items={options}
                    showActiveIcon={false}
                    showActiveColor
                    activeIsOpenText="Options"
                    activeIsOpenTextPosition="left"
                    activeContent={
                        <MaterialIcons
                            name="chevron-right"
                            size={18}
                            color="#9CA3AF"
                        />
                    }
                    triggerClassName="px-3 py-2"

                />
            </View>
        </View>
    );
};