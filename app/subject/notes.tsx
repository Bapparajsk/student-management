import { StudyProgressCard } from '@/components/subject/note/masteryCard';
import AnimatedCounter from '@/components/ui/animatedCounter';
import { ScreenContent } from '@/components/ui/ScreenContent';

export default function SubjectNotesScreen() {
    return (
        <ScreenContent path={"subject/notes"} bottomBarHeight={80} header={{ backButton: { title: "Subject Notes", } }}>
            <StudyProgressCard progress={100} />
            <AnimatedCounter
                className='text-white text-3xl'
                value={10000}
                prefix="#"
            />
        </ScreenContent>
    )
}