import { cn } from '@/utils/ch';
import { colors } from '@/utils/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Chip } from 'heroui-native';
import { Avatar } from "heroui-native/avatar";
import { Button } from "heroui-native/button";
import { Card } from "heroui-native/card";
import { PressableFeedback } from "heroui-native/pressable-feedback";
import { FC } from "react";
import { View } from 'react-native';
import ThemeText from './ThemeText';
import { useRouter } from 'expo-router';

const chips = ["SCT", "ETCE", "CE", "EE"];

export type ClassCardProps = {
    isFullWidth?: boolean;
}


export const ClassCard: FC<ClassCardProps> = ({ isFullWidth }) => {

    const router = useRouter();

    return (
        <PressableFeedback onPress={() => router.push("subject/abc")} className={cn("overflow-hidden rounded-3xl", isFullWidth ? "w-full" : "w-80")}>
            <View className="absolute h-full w-1 bottom-0 bg-purple-400" />

            <Card className="min-w-60 rounded-3xl border border-white/10 bg-white/5 relative">
                <Card.Body>
                    {/* Top Section */}
                    <View className="mb-3 flex-row items-center justify-between">

                        {/* Time Badge */}
                        <View className='flex-row gap-1'>
                            <View className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1">
                                <ThemeText className="text-xs" style={{ color: colors.secondary }}>
                                    10:00 AM
                                </ThemeText>
                            </View>
                            <View className="rounded-full border border-white/20 px-3 py-1">
                                <ThemeText className="text-xs" style={{ color: colors.textMuted }}>
                                    1h
                                </ThemeText>
                            </View>
                            <View className="rounded-full flex-row gap-1 border border-white/20 px-3 py-1">
                                <FontAwesome name="book" size={12} color={colors.textMuted} />
                                <ThemeText className="text-xs" style={{ color: colors.textMuted }} >
                                    Theory
                                </ThemeText>
                            </View>
                        </View>

                        <Button variant="outline" size="sm" isIconOnly>
                            <MaterialIcons
                                name="notifications"
                                size={18}
                                color="#A1A1AA"
                            />
                        </Button>
                    </View>

                    {/* Subject */}
                    <ThemeText className="mb-1 text-2xl font-poppins-semibold">
                        Data Structures
                    </ThemeText>

                    {/* Location */}
                    <View className="flex-row items-center gap-1">
                        <MaterialIcons
                            name="location-on"
                            size={16}
                            color="#A1A1AA"
                        />

                        <ThemeText className="text-sm" textColor={colors.textSecondary}>
                            Room 402, CS Building
                        </ThemeText>
                    </View>
                </Card.Body>
                <Card.Footer className="border-t border-white/10 pt-2 mt-2">
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center gap-2">
                            <Button variant="danger-soft" isIconOnly className="flex-row items-center gap-2 px-0 py-1">
                                <Avatar>
                                    <Avatar.Image />
                                    <Avatar.Fallback />
                                </Avatar>
                            </Button>
                            <ThemeText className="text-sm" textColor={colors.textSecondary}>
                                Prof. John Doe
                            </ThemeText>
                        </View>
                        <View className="flex-row flex-wrap max-w-30">
                            {chips.map((item, index) => (
                                <View key={index} className="w-1/2 p-1">
                                    <Chip
                                        className="font-poppins-medium"
                                        variant={index === 0 ? "secondary" : "soft"}
                                    >
                                        <ThemeText
                                            className="text-xs"
                                            textColor={index === 0 ? undefined : colors.secondary}
                                        >
                                            {item}
                                        </ThemeText>
                                    </Chip>
                                </View>
                            ))}
                        </View>
                    </View>

                </Card.Footer>
            </Card>
        </PressableFeedback>
    )
}
