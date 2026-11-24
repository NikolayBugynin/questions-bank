import type { PaginatedResponse, Skill } from '../../interfaces';
import { baseApi } from './baseApi';

export type SkillParams = {
  specializations?: number[];
};

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<PaginatedResponse<Skill>, SkillParams>({
      query: (params) => ({
        url: 'skills',
        params: params?.specializations?.length
          ? { specializations: params.specializations.join(', ') }
          : undefined,
      }),
      providesTags: ['Skill'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSkillsQuery } = skillsApi;
