import { PressableFeedback } from "@/components/hero-ui";
import { FilterPopover } from "@/components/popover";
import ThemeText from "@/components/ui/ThemeText";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

type DeviceItemProps = {
    name: string;
    platform: string;
    location: string;
    lastActive: string;
    trusted?: boolean;
    index: number;
    onLongPress?: () => void;
};

export const DeviceItem = ({
    name,
    platform,
    location,
    lastActive,
    trusted,
    index,
    onLongPress
}: DeviceItemProps) => {

    return (
        <View className="relative">
            <PressableFeedback onLongPress={() => {
                onLongPress && onLongPress();
                // enterSelectionMode();

            }} className="z-0 flex-row relative items-center rounded-2xl border border-white/5 bg-white/3 px-4 py-3"
            // style={flashStyle}
            >

                <View className="h-12 w-12 items-center justify-center rounded-xl bg-white/4">
                    <MaterialIcons
                        name="devices"
                        size={22}
                        color="#A1A1AA"
                    />
                </View>

                <View className="ml-3 flex-1">

                    <View className="flex-row items-center">

                        <ThemeText
                            numberOfLines={1}
                            className="font-poppins-medium"
                        >
                            {name}
                        </ThemeText>

                        {trusted && (
                            <MaterialIcons
                                name="verified"
                                size={14}
                                color="#34D399"
                                style={{ marginLeft: 6 }}
                            />
                        )}

                    </View>

                    <ThemeText
                        numberOfLines={1}
                        className="mt-1 text-xs text-zinc-500"
                    >
                        {platform} • {location}
                    </ThemeText>

                    <ThemeText className="text-xs text-zinc-500">
                        {lastActive}
                    </ThemeText>

                </View>


            </PressableFeedback>
            <View className="absolute top-5 right-4">
                <FilterPopover
                    activeContent={
                        <MaterialIcons
                            name="more-vert"
                            size={20}
                            color="#A1A1AA"
                        />
                    }
                    activeIsOpenText="Actions"
                    zIndex={index * 1000}
                    showActiveIcon={false}
                    showActiveColor={false}
                    triggerClassName="px-3 py-2"
                    items={[
                        {
                            id: "view-details",
                            label: "View Details",
                            iconName: "info",
                            classNames: {
                                container: "bg-blue-500/10",
                                label: "text-blue-500",
                                startIconColor: "#3B82F6",
                            }
                        },
                        {
                            id: "remove-device",
                            label: "Remove Device",
                            iconName: "delete",
                            classNames: {
                                container: "bg-red-500/10",
                                label: "text-red-500",
                                startIconColor: "#EF4444",
                            }
                        }
                    ]}
                    itemStyle={{
                        labelClassName: "text-sm"
                    }}
                />
            </View>
        </View>
    );
};