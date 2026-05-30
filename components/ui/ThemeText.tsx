import { Text, TextProps } from 'react-native';
import { cn } from 'utils/ch';

export type ThemeTextProps = TextProps & {
    children: React.ReactNode;
    textColor?: string;
}

export default function ThemeText({ children, className, textColor, style, ...rest }: ThemeTextProps) {


    return (
        <Text
            className={cn(
                "text-base font-poppins-medium text-white",
                className
            )}

            style={[{ color: textColor || 'white' }, style]}
            numberOfLines={1}

            {...rest}
        >
            {children}
        </Text>
    )
}
