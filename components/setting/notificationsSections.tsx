import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { NOTIFICATION_ITEMS, toggleNotification, useNotificationStore } from "store/setting/notificationsStore";
import { PressableFeedback, Switch } from '../hero-ui';
import ThemeText from '../ui/ThemeText';

export const NotificationsSections = () => {

    const enabled = useNotificationStore(state => state.enabled);

    return (
        <View className="overflow-hidden rounded-3xl border border-white/10 bg-white/3 mt-3">

            <View className="px-4 py-3">
                <ThemeText className="text-xs font-poppins-semibold uppercase tracking-widest text-cyan-400">
                    Notifications
                </ThemeText>
            </View>

            {NOTIFICATION_ITEMS.map(item => (
                <PressableFeedback
                    key={item.id}
                    className="flex-row items-center justify-between px-4 py-2"
                    onPress={() => toggleNotification(item.id)}
                    animation="disable-all"
                >

                    <View className="h-10 w-10 items-center justify-center rounded-xl bg-white/4">

                        <MaterialIcons
                            name={item.icon as any}
                            size={20}
                            color="#A1A1AA"
                        />

                    </View>

                    <View className='ml-4 flex-1'>
                        <ThemeText >
                            {item.title}
                        </ThemeText>
                        <ThemeText numberOfLines={2} className="mt-1 text-xs text-zinc-400">
                            {item.subtitle}
                        </ThemeText>
                    </View>



                    <Switch
                        isSelected={enabled[item.id]}
                        className="w-13 h-7"
                        onSelectedChange={() => toggleNotification(item.id)}
                    >
                        <Switch.Thumb
                            className="size-5"
                            animation={{
                                left: {
                                    value: 4,
                                    springConfig: {
                                        damping: 30,
                                        stiffness: 300,
                                        mass: 1,
                                    },
                                },
                            }}
                        />
                        <Switch.StartContent className="left-2">
                            {enabled[item.id] && (
                                <Animated.View key={item.id + "_on"} entering={ZoomIn.springify()}>
                                    <MaterialIcons name="notifications-on" size={14} color="#FFFFFF" />
                                </Animated.View>
                            )}
                        </Switch.StartContent>
                        <Switch.EndContent className="right-2">
                            {!enabled[item.id] && (
                                <Animated.View key={item.id + "_off"} entering={ZoomIn.springify()}>
                                    <MaterialIcons name="notifications-off" size={14} color="#dbeafe" />
                                </Animated.View>
                            )}
                        </Switch.EndContent>
                    </Switch>
                </PressableFeedback>
            ))}
        </View>
    )
}