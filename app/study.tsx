import { AssignmentsCard, ContinueLearningCard, HeroSection, StudyActivitySection, StudyAssistantCard, SubjectsSection } from '@/components/study';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function StudyScreen() {
    return (
        <ScreenContent path='study' bottomBarHeight={80} header={{ backButton: { showBackButton: true } }}>
            <HeroSection />
            <StudyActivitySection />
            <ContinueLearningCard />
            <SubjectsSection />
            <StudyAssistantCard />
            <AssignmentsCard />
        </ScreenContent>
    );
}