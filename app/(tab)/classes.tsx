import type { StaticScreenProps } from '@react-navigation/native';
import { ScreenContent } from 'components/ui/ScreenContent';

import { ClassesSection, HeroSection, WeekCalendar } from "components/classes";

type Props = StaticScreenProps<{
    name: string;
}>;

export default function ClassesScreen({ route }: Props) {
    return (
        <ScreenContent path="classes" >
            <HeroSection />
            <WeekCalendar />
            <ClassesSection />
        </ScreenContent>
    );
}
