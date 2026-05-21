import { CampusNewsSection, ClassesSection, HeroSection, QuickActionsSection } from '@/components/overview';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function ClassesScreen() {
    return (
        <ScreenContent path='(tab)/classes' bottomBarHeight={80}>
            <HeroSection />
            <ClassesSection />
            <QuickActionsSection />
            <CampusNewsSection />
        </ScreenContent>
    );
}
