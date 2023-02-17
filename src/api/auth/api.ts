import { createApi } from "@reduxjs/toolkit/query/react"
import { LoginRequest, LoginResponse } from "./models"
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import config from "../../config"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: config.BASE_API_PATH,
    }),
    endpoints: (builder) => ({
        authenticate: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: `/api/auth/authenticate`,
                method: "POST",
                body,
            }),
        }),
    }),
})

export const { useAuthenticateMutation } = authApi
