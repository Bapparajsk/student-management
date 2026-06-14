import { StudyProgressCard } from '@/components/subject/note/masteryCard';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function SubjectNotesScreen() {

    return (
        <ScreenContent path={"subject/notes"} bottomBarHeight={80} header={{ backButton: { title: "Subject Notes", } }}>
            <StudyProgressCard progress={90} />
        </ScreenContent>
    )
}