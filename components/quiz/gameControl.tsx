import {
    reset,
    start
} from '@/store/quizGame/quizTimerStore';
import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { setCurrentQuestionIndex, setDefaultNavigations, useQuizNavigationStore } from "store/quizGame/quizNavigactionStore";
import { QuizFooter } from './QuizFooter';
import { QuizGameHeader } from './quizGameHeader';
import QuizOptionsSectionMemo from "./QuizOptionsSection";

export type QuizData = {
    id: string;
    chapter: string;
    difficulty: string;
    question: string;
    options: string[];
    correctAnswer: number;
};

export const QUIZ_DATA: QuizData[] = [
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
        question: 'ACID stands forcorrectAnswer?',
        options: [
            'Atomicity, Consistency, Isolation, Durability',
            'Accuracy, Consistency, Integrity, Durability',
            'Atomicity, Control, Isolation, Durability',
            'Atomicity, Consistency, Integrity, Dependency',
        ],
        correctAnswer: 0,
    },
];
export const GameControl = () => {
    const pagerRef = useRef<PagerView>(null);

    const currentQuestionIndex = useQuizNavigationStore(state => state.currentQuestionIndex);

    const totalQuestions = QUIZ_DATA.length;

    useEffect(() => {
        reset(30); // 5 min
        start();
        setDefaultNavigations(totalQuestions);

    }, []);

    const handleNext = () => {

        if (currentQuestionIndex === totalQuestions - 1) {
            return;
        }

        pagerRef.current?.setPage(
            currentQuestionIndex + 1
        );
    };

    return (
        <View className="h-full w-full px-4 py-4">

            <QuizGameHeader
                currentQuestion={currentQuestionIndex + 1}
                timeLeft="05:00"
            />

            <PagerView
                ref={pagerRef}
                style={{ flex: 1 }}
                initialPage={0}
                offscreenPageLimit={1}
                overdrag={false}
                onPageSelected={(e) =>
                    setCurrentQuestionIndex(
                        e.nativeEvent
                            .position
                    )
                }
            >
                {QUIZ_DATA.map(
                    (
                        quiz,
                        index
                    ) => (
                        <QuizOptionsSectionMemo
                            key={quiz.id}
                            questionIndex={
                                index
                            }
                            {...quiz}
                        />
                    )
                )}
            </PagerView>

            <QuizFooter
                currentQuestion={
                    currentQuestionIndex +
                    1
                }
                onPress={handleNext}
                hasAnswered={true}

            />

        </View>
    );
};