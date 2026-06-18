import {
    Pressable,
    Text,
    View
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Avatar } from '../hero-ui';


export function CreatePostCard() {
    return (
        <View className="rounded-3xl border border-white/10 bg-white/4 p-3 mt-3">

            <View className="flex-row items-center">

                <Avatar size='sm'>
                    <Avatar.Image
                        source={{ uri: 'https://avatars.githubusercontent.com/u/24874282?v=4' }}
                        animation={{
                            opacity: {
                                value: [0.3, 1],
                                timingConfig: { duration: 300 },
                            },
                        }}

                    />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>

                <Pressable className="ml-3 flex-1 rounded-full bg-white/4 px-4 py-3">
                    <Text numberOfLines={1} className="text-zinc-500">
                        Share with campus...
                    </Text>
                </Pressable>

                <View className="ml-3 flex-row gap-2">

                    <ActionIcon
                        icon="image"
                        color="#00D5BE"
                    />

                    <ActionIcon
                        icon="poll"
                        color="#818CF8"
                    />

                    <ActionIcon
                        icon="celebration"
                        color="#FB923C"
                    />

                    <ActionIcon
                        icon="auto-awesome"
                        color="#A855F7"
                    />

                </View>

            </View>

        </View>
    );
}

type ActionIconProps = {
    icon: keyof typeof MaterialIcons.glyphMap;
    color: string;
    onPress?: () => void;
};

export function ActionIcon({
    icon,
    color,
    onPress,
}: ActionIconProps) {
    return (
        <Pressable
            onPress={onPress}
            android_ripple={{
                color: 'rgba(255,255,255,0.1)',
                borderless: true,
            }}
            className="h-9 w-9 items-center justify-center rounded-full"
            style={{
                backgroundColor: `${color}15`,
            }}
        >
            <MaterialIcons
                name={icon}
                size={18}
                color={color}
            />
        </Pressable>
    );
}