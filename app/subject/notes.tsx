import { StudyProgressCard } from '@/components/subject/note/masteryCard';
import { SearchAndFilters, SearchBar } from '@/components/subject/note/searchAndFilters';
import { SubjectAIFab } from '@/components/subject/note/subjectAIFab';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function SubjectNotesScreen() {

    return (
        <ScreenContent fab={<SubjectAIFab fileType="PDF" />} stickyHeaderIndices={[1]} path={"subject/notes"} bottomBarHeight={80} header={{ backButton: { showBackButton: false } }}>
            <StudyProgressCard progress={90} />
            <SearchBar />
            <SearchAndFilters />
        </ScreenContent>
    )
}