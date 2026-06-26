import { CampusNewsSection, ClassesSection, HeroSection, QuickActionsSection } from '@/components/overview';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function OverviewScreen() {
    return (
        <ScreenContent path='(tab)/overview'>
            <HeroSection />
            <ClassesSection />
            <QuickActionsSection />
            <CampusNewsSection />
        </ScreenContent>
    );
}
