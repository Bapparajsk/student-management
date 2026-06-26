import { create } from "zustand";

type QuizResult = {
    score: number;
    totalQuestions: number;
    timeTaken: number;
};

export const useQuizResultStore = create<QuizResult>((set) => ({
    score: 0,
    totalQuestions: 0,
    timeTaken: 0,
}));


// actions
export const setQuizResult = (score: number, totalQuestions: number, timeTaken: number) => {
    useQuizResultStore.setState({
        score,
        totalQuestions,
        timeTaken,
    });
};

export const resetQuizResult = () => {
    useQuizResultStore.setState({
        score: 0,
        totalQuestions: 0,
        timeTaken: 0,
    });
};