import { ClassesSection, HeroSection, QuickActionsSection } from '@/components/overview';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function Classes() {

    return (
        <ScreenContent path='(tab)/classes' bottomBarHeight={100}>
            <HeroSection />
            <ClassesSection />
            <QuickActionsSection />
        </ScreenContent>
    );
}
