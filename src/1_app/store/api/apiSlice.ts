import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  BaseQueryFn,
  BaseQueryApi,
} from "@reduxjs/toolkit/query/react"; // Import necessary functions and types from Redux Toolkit Query
import { setCredentials } from "../../../5_features/auth/authSlice"; // Import action to set user credentials
import { BASE_URL } from "../../../7_shared/constatnts/urls"; // Import the base URL for API requests
import { RootState } from "../store"; // Import RootState type for type safety in Redux state
import { ApiError } from "../types/types"; // Import ApiError type for error handling

// Define the type for the base query function arguments
type BaseQueryArgs = Parameters<BaseQueryFn<any, any, FetchBaseQueryError>>[0];

// Create a base query function using fetchBaseQuery from Redux Toolkit
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL, // Set the base URL for all API requests
  credentials: "include", // Include credentials (cookies) in requests
  prepareHeaders: (headers, { getState }) => {
    // Prepare headers for each request
    const state = getState() as RootState; // Get the current Redux state
    const accessToken = state.auth.accessToken; // Extract the access token from the state

    console.log("here is the accessToken: ", accessToken); // Log the access token for debugging

    // If an access token exists, set the Authorization header
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`); // Set the Authorization header with the Bearer token
      headers.set("Accept", "application/json, text/plain"); // Set the Accept header for the response type
      headers.set("Content-Type", "application/json;charset=UTF-8"); // Set the Content-Type header for the request body
    }
    return headers; // Return the modified headers
  },
});

// Type for the api parameter, which is used in the base query function
type ApiType = BaseQueryApi;

// Define a base query function that handles re-authentication
const baseQueryWithReauth = async (
  args: BaseQueryArgs, // Arguments for the base query
  api: ApiType, // The API object containing methods to dispatch actions
  extraOptions: any // Additional options for the query, currently typed as any
) => {
  // Execute the base query and store the result
  let result = await baseQuery(args, api, extraOptions);

  const { error } = result; // Destructure the error from the result

  // Check if the error status is 401 (Unauthorized)
  if (error?.status === 401) {
    console.log("sending refresh accessToken"); // Log that we are sending a refresh token request

    // Attempt to refresh the access token
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh", // Endpoint for refreshing the access token
        method: "POST", // Use POST method for the refresh request
      },
      api, // Pass the API object
      extraOptions // Pass any extra options
    );

    // Check if the refresh request was successful and returned data
    if (refreshResult?.data) {
      // Store the new token in the Redux state
      api.dispatch(setCredentials({ ...refreshResult.data }));

      // Retry the original query with the new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // If the refresh request failed, handle the error
      const refreshError = refreshResult.error as FetchBaseQueryError & {
        data?: ApiError; // Cast the error to include the ApiError type
      };
      // If the error status is 403 (Forbidden), modify the error message
      if (refreshError?.status === 403) {
        refreshError.data!.message = "Your login has expired."; // Set a user-friendly error message
      }
      return refreshResult; // Return the refresh result (error)
    }
  }

  return result; // Return the result of the original query
};

// Create the API slice using createApi from Redux Toolkit
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth, // Set the custom base query function
  tagTypes: [], // Define tag types for cache invalidation (currently empty)
  endpoints: () => ({}), // Define endpoints (currently none)
});
