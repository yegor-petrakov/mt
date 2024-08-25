import { apiSlice } from "@/1_app/store/api/apiSlice";

export const entriesListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEntriesByUserId: builder.query({
      query: ({ id }) => ({
        url: `/users/${id}/entries`,
      }),
    }),
  }),
});

export const { useGetEntriesByUserIdQuery } = entriesListApiSlice;
