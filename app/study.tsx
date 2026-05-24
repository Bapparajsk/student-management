import { HeroSection, StudyActivityCard } from '@/components/study';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function StudyScreen() {
    return (
        <ScreenContent path='study' bottomBarHeight={80} header={{ showBackButton: true }}>
            <HeroSection />
            <StudyActivityCard />
        </ScreenContent>
    );
}