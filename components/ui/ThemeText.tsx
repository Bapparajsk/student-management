import { Text, TextProps } from 'react-native';
import { cn } from 'utils/ch';

/**
 * @field textColor: Optional prop to set the text color. If not provided, it defaults to white.
 */

export type ThemeTextProps = TextProps & {
    children: React.ReactNode;
    textColor?: string;
}

export default function ThemeText({ children, className, textColor, ...rest }: ThemeTextProps) {


    return (
        <Text
            className={cn(
                "text-base font-poppins-medium text-white",
                className
            )}
            {...rest}
        >
            {children}
        </Text>
    )
}
