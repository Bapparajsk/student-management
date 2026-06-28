import { colors } from "@/utils/theme";
import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Href, useRouter } from "expo-router";
import { View } from "react-native";
import { Avatar, Button } from "../hero-ui";
import ThemeText from "../ui/ThemeText";

export type BackButtonProps = {
    showBackButton?: boolean;
    title?: string
    href?: Href;
}

export type HeaderProps = {
    pathName?: string;
    backButton?: BackButtonProps
};

export const HeaderLeftComponent = ({ backButton, pathName }: HeaderProps) => {

    const router = useRouter();

    const onPressBack = () => {
        if (backButton?.href) {
            router.replace(backButton.href);
        } else {
            router.back();
        }
    }

    return (
        <>
            {backButton?.showBackButton ? (
                <Button onPress={onPressBack} hitSlop={10} variant='ghost'>
                    <View className='flex-row gap-1 items-center'>
                        <Feather name="arrow-left" size={24} color={colors.info} />
                        <ThemeText textColor={colors.info} className='capitalize'>
                            {backButton.title ?? pathName}
                        </ThemeText>
                    </View>
                </Button>
            ) : (
                <View className='flex-row items-center'>
                    <Avatar >
                        <Avatar.Image source={{ uri: "https://tse1.mm.bing.net/th/id/OIP.axox6gfX5G9P4KscalXBiQHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }} asChild>
                            <Image style={{ width: '100%', height: '100%' }} contentFit="cover" />
                        </Avatar.Image>
                        <Avatar.Fallback>
                            <ThemeText>
                                JD
                            </ThemeText>
                        </Avatar.Fallback>
                    </Avatar>
                    <View className='ml-3'>
                        <ThemeText style={{ color: colors.text }}>
                            Bapparaj sk
                        </ThemeText>
                        <ThemeText className="text-xs" style={{ color: colors.textSecondary }}>
                            @bapparajsk
                        </ThemeText>
                    </View>
                </View>
            )}
        </>
    );
}