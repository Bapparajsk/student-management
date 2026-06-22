import { QuizStatus } from "@/components/quiz/QuizOptionCard";
import { create } from "zustand";

export type QuizNavigationType = {
    questionIndex: number;
    status: QuizStatus;
    selectedOption?: number;
};

type QuizNavigationStore = {
    currentQuestionIndex: number;
    totalQuestions: number;
    navigations: QuizNavigationType[];
};

export const useQuizNavigationStore =
    create<QuizNavigationStore>(() => ({
        currentQuestionIndex: 0,
        totalQuestions: 0,
        navigations: [],
    }));

/**
 * Actions
 */

export const setDefaultNavigations = (
    total: number
) => {
    useQuizNavigationStore.setState({
        currentQuestionIndex: 0,
        totalQuestions: total,

        navigations: Array.from(
            { length: total },
            (_, index) => ({
                questionIndex: index,
                status: "unanswered",
                selectedOption: undefined,
            })
        ),
    });
};

export const setCurrentQuestionIndex = (
    index: number
) => {
    useQuizNavigationStore.setState({
        currentQuestionIndex: index,
    });
};

export const updateNavigation = ({
    index,
    status,
    selectedOption,
}: {
    index: number;
    status: QuizStatus;
    selectedOption?: number;
}) => {
    useQuizNavigationStore.setState(
        (state) => {
            if (
                index < 0 ||
                index >=
                state.navigations.length
            ) {
                return state;
            }

            const current =
                state.navigations[index];

            if (
                current.status === status &&
                current.selectedOption ===
                selectedOption
            ) {
                return state;
            }

            const navigations = [
                ...state.navigations,
            ];

            navigations[index] = {
                ...current,
                status,
                selectedOption,
            };

            return {
                navigations,
            };
        }
    );
};