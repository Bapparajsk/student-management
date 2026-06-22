import { QuizFooter } from '@/components/quiz/QuizFooter'
import { QuizGameHeader } from '@/components/quiz/quizGameHeader'
import { QuizOptionCard } from '@/components/quiz/QuizOptionCard'
import { QuizPowerUps } from '@/components/quiz/QuizPowerUps'
import { QuizQuestionCard } from '@/components/quiz/QuizQuestionCard'
import { useRef, useState } from 'react'
import { View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { SafeAreaView } from "react-native-safe-area-context"

export const QUIZ_DATA = [
    {
        id: '1',
        chapter: 'Chapter 4',
        difficulty: 'Medium',
        question: 'Which SQL statement is used to retrieve data from a database?',
        options: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
        correctAnswer: 0,
    },
    {
        id: '2',
        chapter: 'Chapter 4',
        difficulty: 'Medium',
        question: 'Which clause is used to filter records?',
        options: ['ORDER BY', 'GROUP BY', 'WHERE', 'HAVING'],
        correctAnswer: 2,
    },
    {
        id: '3',
        chapter: 'Chapter 4',
        difficulty: 'Easy',
        question: 'Which SQL statement is used to insert new data?',
        options: ['ADD', 'INSERT INTO', 'CREATE', 'UPDATE'],
        correctAnswer: 1,
    },
    {
        id: '4',
        chapter: 'Chapter 4',
        difficulty: 'Medium',
        question: 'Which command removes a table and all its data?',
        options: ['DELETE', 'REMOVE', 'DROP', 'TRUNCATE'],
        correctAnswer: 2,
    },
    {
        id: '5',
        chapter: 'Chapter 4',
        difficulty: 'Hard',
        question: 'Which JOIN returns all matching rows from both tables?',
        options: ['LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN', 'INNER JOIN'],
        correctAnswer: 2,
    },
    {
        id: '6',
        chapter: 'Chapter 5',
        difficulty: 'Medium',
        question: 'Which key uniquely identifies a record?',
        options: ['Foreign Key', 'Candidate Key', 'Primary Key', 'Composite Key'],
        correctAnswer: 2,
    },
    {
        id: '7',
        chapter: 'Chapter 5',
        difficulty: 'Medium',
        question: 'What does DBMS stand for?',
        options: [
            'Database Management System',
            'Data Backup Management System',
            'Database Monitoring Service',
            'Data Base Machine System',
        ],
        correctAnswer: 0,
    },
    {
        id: '8',
        chapter: 'Chapter 6',
        difficulty: 'Hard',
        question: 'Normalization reduces?',
        options: [
            'Data redundancy',
            'Storage size',
            'Network traffic',
            'CPU usage',
        ],
        correctAnswer: 0,
    },
    {
        id: '9',
        chapter: 'Chapter 6',
        difficulty: 'Medium',
        question: 'Which normal form removes partial dependency?',
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        correctAnswer: 1,
    },
    {
        id: '10',
        chapter: 'Chapter 7',
        difficulty: 'Hard',
        question: 'ACID stands for?',
        options: [
            'Atomicity, Consistency, Isolation, Durability',
            'Accuracy, Consistency, Integrity, Durability',
            'Atomicity, Control, Isolation, Durability',
            'Atomicity, Consistency, Integrity, Dependency',
        ],
        correctAnswer: 0,
    },
];

export default function GameScreen() {
    const pagerRef = useRef<PagerView>(null);

    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if (
            currentPage <
            QUIZ_DATA.length - 1
        ) {
            pagerRef.current?.setPage(
                currentPage + 1
            );
        }
    };

    return (
        <SafeAreaView className="flex-1">
            <View className="h-full w-full px-4 py-4">

                <QuizGameHeader
                    currentQuestion={
                        currentPage + 1
                    }
                    totalQuestions={
                        QUIZ_DATA.length
                    }
                    timeLeft="05:00"
                    progress={
                        ((currentPage + 1) /
                            QUIZ_DATA.length) *
                        100
                    }
                />

                <PagerView
                    ref={pagerRef}
                    style={{ flex: 1 }}
                    initialPage={0}
                    offscreenPageLimit={2}
                    overdrag={false}
                    onPageSelected={(e) => {
                        setCurrentPage(
                            e.nativeEvent.position
                        );
                    }}
                >
                    {QUIZ_DATA.map(question => (
                        <View
                            key={question.id}
                            style={{ flex: 1 }}
                        >
                            <QuizQuestionCard
                            // chapter={question.chapter}
                            // difficulty={question.difficulty}
                            // question={question.question}
                            />

                            <QuizPowerUps />

                            {question.options.map(
                                (
                                    option,
                                    optionIndex
                                ) => (
                                    <QuizOptionCard
                                        key={optionIndex}
                                        letter={String.fromCharCode(
                                            65 +
                                            optionIndex
                                        )}
                                        text={option}
                                    />
                                )
                            )}
                        </View>
                    ))}
                </PagerView>

                <QuizFooter
                    currentQuestion={
                        currentPage + 1
                    }
                    totalQuestions={
                        QUIZ_DATA.length
                    }
                    onPress={handleNext}
                    hasAnswered={true}
                />

            </View>
        </SafeAreaView>
    );
}