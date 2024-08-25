import { apiSlice } from "../../../1_app/store/api/apiSlice";
import { logOut, setCredentials } from "../authSlice";

// Define types for credentials and response data
interface Credentials {
  username: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  // Add other fields as necessary
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, Credentials>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    sendLogout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "DELETE",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled; // Optional, depending on your API response
          console.log(data);
          dispatch(logOut());
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
          }, 1000);
        } catch (err) {
          console.error("Logout failed:", err);
        }
      },
    }),
    refresh: builder.mutation<AuthResponse, void>({
      query: () => ({
        url: "/auth/refresh",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          const { accessToken } = data;
          dispatch(setCredentials({ accessToken }));
        } catch (err) {
          console.error("Token refresh failed:", err);
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const { useSignInMutation, useSendLogoutMutation, useRefreshMutation } =
  authApiSlice;
