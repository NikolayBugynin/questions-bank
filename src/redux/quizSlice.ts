import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Question } from '../interfaces';

type QuizState = {
  questions: Question[];
};

const initialState: QuizState = { questions: [] };

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
    },
    resetQuiz(state) {
      state.questions = [];
    },
  },
});

export const { setQuestions, resetQuiz } = quizSlice.actions;
export const selectQuestions = (state: { quiz: QuizState }) =>
  state.quiz.questions;

export default quizSlice.reducer;
