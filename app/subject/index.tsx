import { SubjectsSection } from '@/components/study';
import { AIInsightCard, SemesterProgressCard } from '@/components/subject';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function Index() {

    return (
        <ScreenContent path="subject" bottomBarHeight={80} header={{ backButton: { title: "Subject", } }}>
            <SemesterProgressCard />
            <AIInsightCard />
            <SubjectsSection />
        </ScreenContent>
    )
}