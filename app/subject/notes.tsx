import { StudyProgressCard } from '@/components/subject/note/masteryCard';
import { SearchAndFilters } from '@/components/subject/note/searchAndFilters';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function SubjectNotesScreen() {

    return (
        <ScreenContent path={"subject/notes"} bottomBarHeight={80} header={{ backButton: { showBackButton: false } }}>
            <StudyProgressCard progress={90} />
            <SearchAndFilters />
        </ScreenContent>
    )
}