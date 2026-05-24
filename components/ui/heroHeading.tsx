import { View } from 'react-native';
import ThemeText from './ThemeText';

export type HeroHeadingProps = {
    title: string;
    highlight: string;
}

export default function HeroHeading({ title, highlight }: HeroHeadingProps) {
    return (
        <View>
            <ThemeText className="text-3xl leading-tight">
                {title},{' '}
            </ThemeText>
            <ThemeText className="text-3xl leading-tight text-cyan-400">
                {highlight}
            </ThemeText>
        </View>
    )
}