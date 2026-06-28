import { getDeviceStorage, getDownloadsStorage } from '@/utils/storage';
import { MaterialIcons } from '@expo/vector-icons';
import { PressableFeedback } from 'heroui-native';
import { useRef } from 'react';
import { View } from 'react-native';
import ThemeText from '../ui/ThemeText';
import ProgressLine from '../ui/progressLine';

const InsightRow = ({
    icon,
    label,
    value,
}: {
    icon: any;
    label: string;
    value: string;
}) => (
    <View className="flex-row items-center">

        <View className="h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04]">

            <MaterialIcons
                name={icon}
                size={18}
                color="#A1A1AA"
            />

        </View>

        <ThemeText className="ml-3 flex-1 text-zinc-300">
            {label}
        </ThemeText>

        <ThemeText className="font-poppins-semibold">
            {value}
        </ThemeText>

    </View>
);

export const StudyInsightsCard = () => {

    const deviceStorage = useRef<ReturnType<typeof getDeviceStorage>>(getDeviceStorage());
    const appStorage = useRef<ReturnType<typeof getDownloadsStorage>>(getDownloadsStorage());


    return (
        <View className="overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-5 mt-3">

            <View className="flex-row items-center">
                <MaterialIcons
                    name="analytics"
                    size={22}
                    color="#22D3EE"
                />

                <ThemeText className="ml-2 text-lg font-poppins-semibold">
                    Study Insights
                </ThemeText>
            </View>

            <View className="mt-5 gap-4">

                <InsightRow
                    icon="description"
                    label="Notes Downloaded"
                    value="0"
                />

                <InsightRow
                    icon="picture-as-pdf"
                    label="Offline PDFs"
                    value="0"
                />

                <InsightRow
                    icon="auto-awesome"
                    label="AI Notes Generated"
                    value="0"
                />
            </View>

            <View className="mt-5">

                <View className="flex-row items-center justify-between">

                    <ThemeText className="text-sm text-zinc-400">
                        Storage
                    </ThemeText>

                    <ThemeText className="font-poppins-medium">
                        {appStorage.current.text} Used / {deviceStorage.current.freeText} Free
                    </ThemeText>

                </View>

                <View className='mt-2'>
                    <ProgressLine
                        current={appStorage.current.bytes ?? 0}
                        total={deviceStorage.current.free ?? 1}
                        height={8}
                    />
                </View>

            </View>

            <PressableFeedback
                className="mt-5 h-12 flex-row items-center justify-center rounded-2xl bg-cyan-500/10"
            >
                <MaterialIcons
                    name="folder"
                    size={18}
                    color="#22D3EE"
                />

                <ThemeText className="ml-2 font-poppins-medium text-cyan-400">
                    Manage Downloads
                </ThemeText>

            </PressableFeedback>

        </View>
    )
}