import { useTheme } from "@react-navigation/native";
import { Text, TextProps } from 'react-native';
import { cn } from 'utils/ch';

export type ThemeTextProps = TextProps & {
    children: React.ReactNode;
    textColor?: string;
}

export default function ThemeText({ children, className, textColor, ...rest }: ThemeTextProps) {

    const { colors } = useTheme();

    return (
        <Text
            className={cn(
                "text-base font-poppins-medium",
                className
            )}
            style={[{ color: textColor || colors.text }]}
            {...rest}
        >
            {children}
        </Text>
    )
}
