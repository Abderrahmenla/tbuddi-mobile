import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react"
import config from "../config"

const baseQuery = fetchBaseQuery({
    baseUrl: config.BASE_API_PATH,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem(config.LOCAL_STORAGE_TOKEN_KEY)
        if (token) {
            headers.set("Authorization", `${config.BEARER_TOKEN_IDENTIFIER} ${token}`)
        }
        return headers
    },
})

const createFetchBaseQuery = () => {
    const baseQueryWithRedirection: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
        args,
        api,
        extraOptions,
    ) => {
        const result = await baseQuery(args, api, extraOptions)
        // if (result.error && (result.error.status === 401 || result.error.status === 403)) {
        //     ;(window.location as any) = "/login"
        // }
        return result
    }
    return baseQueryWithRedirection
}

export type PaginatedResponse<T> = {
    content: T[]
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    pageable: {
        offset: number
        pageNumber: number
        pageSize: number
        paged: boolean
        sort: {
            empty: boolean
            sorted: boolean
            unsorted: boolean
        }
    }
    size: number
    sort: {
        empty: boolean
        sorted: boolean
        unsorted: boolean
    }
    totalElements: number
    totalPages: number
}

export { createFetchBaseQuery }
