import type { PaginatedResponse, Specialization } from '../../interfaces';
import { baseApi } from './baseApi';

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<PaginatedResponse<Specialization>, void>({
      query: () => 'specializations',
      providesTags: ['Specialization'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpecializationsQuery } = specializationApi;
