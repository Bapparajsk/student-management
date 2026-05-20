import { ClassesSection, HeroSection } from '@/components/overview';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function Classes() {

    return (
        <ScreenContent path='(tab)/classes'>
            <HeroSection />
            <ClassesSection />
        </ScreenContent>
    );
}
