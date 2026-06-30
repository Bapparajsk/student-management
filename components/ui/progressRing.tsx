import { cn } from '@/utils/cn';
import { colors } from '@/utils/theme';
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import Svg, {
    Circle,
    Defs,
    LinearGradient,
    Stop,
} from 'react-native-svg';
import ThemeText from './ThemeText';
import { AnimatedNumber } from './animatedCounter';

export type Size = 'sm' | 'md' | 'lg';
type GradientColor =
    | `#${string}`
    | `rgba(${number}, ${number}, ${number}, ${number})`
    | `rgb(${number}, ${number}, ${number})`

type TextConfig = {
    text?: string;
    color?: string;
    className?: string;
}

export type ProgressRingProps = {
    progress: number;
    size?: Size;
    linerGradient?: GradientColor | GradientColor[];
    prefix?: string;
    suffix?: string;
    title?: TextConfig | string;
    subtitle?: TextConfig | string;
};

const SIZE_MAP = {
    sm: {
        size: 30,
        title: "text-2xl",
        subtitle: "text-[10px]",
    },
    md: {
        size: 40,
        title: "text-3xl",
        subtitle: "text-xs",
    },
    lg: {
        size: 60,
        title: "text-4xl",
        subtitle: "text-sm",
    }
} as const;

const MUTATION_MAP = 4 as const;

const radius = 45;
const circumference = 2 * Math.PI * radius;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type FormatTextType = {
    text: ProgressRingProps["title"];
    defaultText?: string;
    defaultColor?: string;
}

const formatText = ({ text, defaultText, defaultColor }: FormatTextType): TextConfig => {
    return {
        text: text ? (typeof text === "string" ? text : text.text) : defaultText || "",
        color: text && typeof text !== "string" ? text.color : defaultColor ?? '#53eafd',
        className: text && typeof text !== "string" ? text.className : "",
    }
};

export const ProgressRing = ({ progress, size = 'md', linerGradient, prefix, suffix = "%", title, subtitle }: ProgressRingProps) => {

    const variant = SIZE_MAP[size];
    const sizeValue = variant.size * MUTATION_MAP;
    const formattedTitle = formatText({ text: title, defaultText: `${progress}` });
    const formattedSubtitle = formatText({ text: subtitle, defaultText: "Complete", defaultColor: colors.textSecondary });

    const progressAnimated = useSharedValue(0);

    useEffect(() => {
        progressAnimated.value = withTiming(progress, {
            duration: 1200,
        });
    }, [progress]);

    const animatedProps = useAnimatedProps(() => {
        const strokeDashoffset =
            circumference -
            (circumference * progressAnimated.value) / 100;

        return {
            strokeDashoffset,
        };
    });
    return (
        <View style={{ width: sizeValue, height: sizeValue }} className="relative items-center justify-center">
            <Svg
                width={sizeValue}
                height={sizeValue}
                viewBox="0 0 100 100"
            >
                <Defs>
                    <LinearGradient
                        id="progressGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        {Array.isArray(linerGradient)
                            ? linerGradient.map((color, index) => (
                                <Stop
                                    key={index}
                                    offset={`${(index / (linerGradient.length - 1)) * 100}%`}
                                    stopColor={color}
                                />
                            ))
                            : linerGradient
                                ? [
                                    <Stop
                                        key="single"
                                        offset="0%"
                                        stopColor={linerGradient}
                                    />,
                                ]
                                : []}
                    </LinearGradient>
                </Defs>

                {/* Background Ring */}
                <Circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="8"
                    fill="none"
                />

                {/* Progress Ring */}
                <AnimatedCircle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="url(#progressGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    animatedProps={animatedProps}
                    transform="rotate(-90, 50, 50)"
                />
            </Svg>

            {/* Center */}
            <View className="absolute items-center">
                <View className='flex-row items-center'>
                    <AnimatedNumber prefix={prefix} suffix={suffix} color={formattedTitle.color} value={formattedTitle.text || "0"} size={size} />
                </View>

                <ThemeText className={cn("text-xs", variant.subtitle, formattedSubtitle.className)} textColor={formattedSubtitle.color}>
                    {formattedSubtitle.text}
                </ThemeText>
            </View>
        </View>
    )
};