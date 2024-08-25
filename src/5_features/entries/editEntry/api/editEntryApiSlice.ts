import { apiSlice } from "@/1_app/store/api/apiSlice";

export const editEntryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEntryById: builder.query({
      query: ({ userId, entryId }) => ({
        url: `/users/${userId}/entries/${entryId}`,
      }),
    }),
  }),
});

export const { useLazyGetEntryByIdQuery } = editEntryApiSlice;
