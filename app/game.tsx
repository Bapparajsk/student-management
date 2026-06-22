import { QuizFooter } from '@/components/quiz/QuizFooter'
import { QuizGameHeader } from '@/components/quiz/quizGameHeader'
import { QuizOptionCard } from '@/components/quiz/QuizOptionCard'
import { QuizPowerUps } from '@/components/quiz/QuizPowerUps'
import { QuizQuestionCard } from '@/components/quiz/QuizQuestionCard'
import { View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

export default function GameScreen() {
    return (
        <SafeAreaView className='flex-1'>
            <View className='h-full w-full px-4 py-4'>
                <QuizGameHeader
                    currentQuestion={1}
                    totalQuestions={10}
                    timeLeft="05:00"
                    progress={20}
                />
                <QuizQuestionCard />

                <QuizPowerUps />

                <QuizOptionCard
                    letter="A"
                    text="SELECT"
                    selected
                />

                <QuizOptionCard
                    letter="B"
                    text="INSERT"
                />

                <QuizOptionCard
                    letter="C"
                    text="UPDATE"
                />

                <QuizOptionCard
                    letter="D"
                    text="DELETE"
                />
                <QuizFooter
                    currentQuestion={2}
                    totalQuestions={20}
                    hasAnswered={true}
                />
            </View>
        </SafeAreaView>
    )
}