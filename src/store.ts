import { combineReducers, configureStore, MiddlewareArray } from "@reduxjs/toolkit"
import { authApi } from "./api/auth/api"
import { tbuddiApi } from "./api/tbuddiApi"
import { createSlice } from "@reduxjs/toolkit"

export const globalStore = createSlice({
    name: "globalStore",
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state: any, action: any) => {
            state.user = action.payload
        },
    },
})

export const { setUser } = globalStore.actions

const reducer = combineReducers({
    ["globalStore"]: globalStore.reducer,

    [authApi.reducerPath]: authApi.reducer,
    [tbuddiApi.reducerPath]: tbuddiApi.reducer,
})

export const store = configureStore({
    reducer,
    middleware: new MiddlewareArray().concat(authApi.middleware, tbuddiApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
