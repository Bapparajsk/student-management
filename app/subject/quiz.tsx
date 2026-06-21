import { QuizPerformanceHero } from '@/components/quiz'
import { QuizNavigator } from '@/components/quiz/quizList'
import { ScreenContent } from '@/components/ui/ScreenContent'

export default function QuizScreen() {
    return (
        <ScreenContent path={"subject/quiz"}>
            <QuizPerformanceHero />
            <QuizNavigator />
        </ScreenContent>
    )
}