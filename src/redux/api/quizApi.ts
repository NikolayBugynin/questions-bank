import type { Question } from '../../interfaces';
import { baseApi } from './baseApi';

export type MockQuizResponse = {
  fullCount?: number;
  questions?: Question[];
  response?: {
    answers: unknown[];
  };
};
export type MockQuizParams = {
  complexity?: number[];
  specialization?: number;
  skills?: number[];
  limit?: number;
};

export const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNewMockQuiz: builder.query<MockQuizResponse, MockQuizParams>({
      query: (params) => ({
        url: 'interview-preparation/quizzes/mock/new',
        params: params
          ? {
              ...(params.limit !== undefined && { limit: params.limit }),
              ...(params.specialization !== undefined && {
                specialization: params.specialization,
              }),
              ...(params.complexity && {
                complexity: params.complexity.join(','),
              }),
              ...(params.skills && { skills: params.skills.join(',') }),
            }
          : undefined,
      }),
      providesTags: ['Quiz'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetNewMockQuizQuery } = quizApi;
