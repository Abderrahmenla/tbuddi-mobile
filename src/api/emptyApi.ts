import { createApi } from "@reduxjs/toolkit/query/react"
import { createFetchBaseQuery } from "~/api/factories"

export const emptyTbuddiApi = createApi({
    baseQuery: createFetchBaseQuery(),
    endpoints: () => ({}),
})
