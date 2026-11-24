import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import quizReducer from './quizSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    quiz: quizReducer,
  },
  middleware: (gDM) => gDM().concat(baseApi.middleware),
});
