import { emptyTbuddiApi as api } from "./emptyApi"
const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({
        updateItem: build.mutation<UpdateItemApiResponse, UpdateItemApiArg>({
            query: (queryArg) => ({
                url: `/api/shop/${queryArg.propertyId}/items/${queryArg.id}`,
                method: "PUT",
                body: queryArg.createOrUpdatePurchasableItemRequest,
            }),
        }),
        deleteItem: build.mutation<DeleteItemApiResponse, DeleteItemApiArg>({
            query: (queryArg) => ({ url: `/api/shop/${queryArg.propertyId}/items/${queryArg.id}`, method: "DELETE" }),
        }),
        setDefaultCard: build.mutation<SetDefaultCardApiResponse, SetDefaultCardApiArg>({
            query: (queryArg) => ({
                url: `/api/account/cards/default`,
                method: "PUT",
                body: queryArg.changeDefaultCardRequest,
            }),
        }),
        getManagementLoggersByName: build.query<
            GetManagementLoggersByNameApiResponse,
            GetManagementLoggersByNameApiArg
        >({
            query: (queryArg) => ({ url: `/management/loggers/${queryArg.name}` }),
        }),
        postManagementLoggersByName: build.mutation<
            PostManagementLoggersByNameApiResponse,
            PostManagementLoggersByNameApiArg
        >({
            query: (queryArg) => ({ url: `/management/loggers/${queryArg.name}`, method: "POST", body: queryArg.body }),
        }),
        createStay: build.mutation<CreateStayApiResponse, CreateStayApiArg>({
            query: (queryArg) => ({ url: `/api/stays`, method: "POST", body: queryArg.createStayRequest }),
        }),
        createItem: build.mutation<CreateItemApiResponse, CreateItemApiArg>({
            query: (queryArg) => ({
                url: `/api/shop/${queryArg.propertyId}/items`,
                method: "POST",
                body: queryArg.createOrUpdatePurchasableItemRequest,
            }),
        }),
        purchaseItem: build.mutation<PurchaseItemApiResponse, PurchaseItemApiArg>({
            query: (queryArg) => ({ url: `/api/shop/purchases`, method: "POST", body: queryArg.purchaseRequest }),
        }),
        getMyProperties: build.query<GetMyPropertiesApiResponse, GetMyPropertiesApiArg>({
            query: () => ({ url: `/api/host/properties` }),
        }),
        createProperty: build.mutation<CreatePropertyApiResponse, CreatePropertyApiArg>({
            query: (queryArg) => ({
                url: `/api/host/properties`,
                method: "POST",
                body: queryArg.createPropertyRequest,
            }),
        }),
        requestPasswordReset: build.mutation<RequestPasswordResetApiResponse, RequestPasswordResetApiArg>({
            query: (queryArg) => ({
                url: `/api/auth/reset-password/init`,
                method: "POST",
                body: queryArg.resetPasswordInitRequest,
            }),
        }),
        finishPasswordReset: build.mutation<FinishPasswordResetApiResponse, FinishPasswordResetApiArg>({
            query: (queryArg) => ({
                url: `/api/auth/reset-password/finish`,
                method: "POST",
                body: queryArg.resetPasswordFinishRequest,
            }),
        }),
        registerHostUser: build.mutation<RegisterHostUserApiResponse, RegisterHostUserApiArg>({
            query: (queryArg) => ({
                url: `/api/auth/hosts/register`,
                method: "POST",
                body: queryArg.registerHostUserRequest,
            }),
        }),
        authorize: build.mutation<AuthorizeApiResponse, AuthorizeApiArg>({
            query: (queryArg) => ({ url: `/api/auth/authenticate`, method: "POST", body: queryArg.loginRequest }),
        }),
        getSubscriptions: build.query<GetSubscriptionsApiResponse, GetSubscriptionsApiArg>({
            query: () => ({ url: `/api/account/subscriptions` }),
        }),
        createSubscription: build.mutation<CreateSubscriptionApiResponse, CreateSubscriptionApiArg>({
            query: (queryArg) => ({
                url: `/api/account/subscriptions`,
                method: "POST",
                body: queryArg.createOrUpdateSubscriptionRequest,
            }),
        }),
        cancelSubscription: build.mutation<CancelSubscriptionApiResponse, CancelSubscriptionApiArg>({
            query: () => ({ url: `/api/account/subscriptions`, method: "DELETE" }),
        }),
        updateSubscription: build.mutation<UpdateSubscriptionApiResponse, UpdateSubscriptionApiArg>({
            query: (queryArg) => ({
                url: `/api/account/subscriptions`,
                method: "PATCH",
                body: queryArg.createOrUpdateSubscriptionRequest,
            }),
        }),
        changePassword: build.mutation<ChangePasswordApiResponse, ChangePasswordApiArg>({
            query: (queryArg) => ({
                url: `/api/account/change-password`,
                method: "POST",
                body: queryArg.changePasswordRequest,
            }),
        }),
        getCards: build.query<GetCardsApiResponse, GetCardsApiArg>({
            query: () => ({ url: `/api/account/cards` }),
        }),
        createCard: build.mutation<CreateCardApiResponse, CreateCardApiArg>({
            query: (queryArg) => ({ url: `/api/account/cards`, method: "POST", body: queryArg.createCardRequest }),
        }),
        deleteProperty: build.mutation<DeletePropertyApiResponse, DeletePropertyApiArg>({
            query: (queryArg) => ({ url: `/api/host/properties/${queryArg.id}`, method: "DELETE" }),
        }),
        updateProperty: build.mutation<UpdatePropertyApiResponse, UpdatePropertyApiArg>({
            query: (queryArg) => ({
                url: `/api/host/properties/${queryArg.id}`,
                method: "PATCH",
                body: queryArg.updatePropertyRequest,
            }),
        }),
        getAccount: build.query<GetAccountApiResponse, GetAccountApiArg>({
            query: () => ({ url: `/api/account` }),
        }),
        deleteAccount: build.mutation<DeleteAccountApiResponse, DeleteAccountApiArg>({
            query: () => ({ url: `/api/account`, method: "DELETE" }),
        }),
        updateAccount: build.mutation<UpdateAccountApiResponse, UpdateAccountApiArg>({
            query: (queryArg) => ({ url: `/api/account`, method: "PATCH", body: queryArg.updateAccountRequest }),
        }),
        threaddump: build.query<ThreaddumpApiResponse, ThreaddumpApiArg>({
            query: () => ({ url: `/management/threaddump` }),
        }),
        loggers: build.query<LoggersApiResponse, LoggersApiArg>({
            query: () => ({ url: `/management/loggers` }),
        }),
        info: build.query<InfoApiResponse, InfoApiArg>({
            query: () => ({ url: `/management/info` }),
        }),
        health: build.query<HealthApiResponse, HealthApiArg>({
            query: () => ({ url: `/management/health` }),
        }),
        getManagementHealth: build.query<GetManagementHealthApiResponse, GetManagementHealthApiArg>({
            query: () => ({ url: `/management/health/**` }),
        }),
        env: build.query<EnvApiResponse, EnvApiArg>({
            query: () => ({ url: `/management/env` }),
        }),
        getManagementEnvByToMatch: build.query<GetManagementEnvByToMatchApiResponse, GetManagementEnvByToMatchApiArg>({
            query: (queryArg) => ({ url: `/management/env/${queryArg.toMatch}` }),
        }),
        configprops: build.query<ConfigpropsApiResponse, ConfigpropsApiArg>({
            query: () => ({ url: `/management/configprops` }),
        }),
        getManagementConfigpropsByPrefix: build.query<
            GetManagementConfigpropsByPrefixApiResponse,
            GetManagementConfigpropsByPrefixApiArg
        >({
            query: (queryArg) => ({ url: `/management/configprops/${queryArg.prefix}` }),
        }),
        caches: build.query<CachesApiResponse, CachesApiArg>({
            query: () => ({ url: `/management/caches` }),
        }),
        caches2: build.mutation<Caches2ApiResponse, Caches2ApiArg>({
            query: () => ({ url: `/management/caches`, method: "DELETE" }),
        }),
        getManagementCachesByCache: build.query<
            GetManagementCachesByCacheApiResponse,
            GetManagementCachesByCacheApiArg
        >({
            query: (queryArg) => ({ url: `/management/caches/${queryArg.cache}` }),
        }),
        deleteManagementCachesByCache: build.mutation<
            DeleteManagementCachesByCacheApiResponse,
            DeleteManagementCachesByCacheApiArg
        >({
            query: (queryArg) => ({ url: `/management/caches/${queryArg.cache}`, method: "DELETE" }),
        }),
        getHostStays: build.query<GetHostStaysApiResponse, GetHostStaysApiArg>({
            query: (queryArg) => ({
                url: `/api/stays/host`,
                params: { page: queryArg.page, size: queryArg.size, sort: queryArg.sort },
            }),
        }),
        getGuestStays: build.query<GetGuestStaysApiResponse, GetGuestStaysApiArg>({
            query: (queryArg) => ({
                url: `/api/stays/guest`,
                params: { page: queryArg.page, size: queryArg.size, sort: queryArg.sort },
            }),
        }),
        searchItems: build.query<SearchItemsApiResponse, SearchItemsApiArg>({
            query: (queryArg) => ({
                url: `/api/shop/items`,
                params: {
                    name: queryArg.name,
                    subCategoryId: queryArg.subCategoryId,
                    categoryId: queryArg.categoryId,
                    propertyId: queryArg.propertyId,
                    page: queryArg.page,
                    size: queryArg.size,
                    sort: queryArg.sort,
                },
            }),
        }),
        getCategories: build.query<GetCategoriesApiResponse, GetCategoriesApiArg>({
            query: () => ({ url: `/api/shop/categories` }),
        }),
        getHostPurchaseHistory: build.query<GetHostPurchaseHistoryApiResponse, GetHostPurchaseHistoryApiArg>({
            query: (queryArg) => ({
                url: `/api/purchase-history`,
                params: {
                    page: queryArg.page,
                    size: queryArg.size,
                    sort: queryArg.sort,
                    propertyId: queryArg.propertyId,
                    startDate: queryArg.startDate,
                    endDate: queryArg.endDate,
                    ownerEmail: queryArg.ownerEmail,
                },
            }),
        }),
        getPlans: build.query<GetPlansApiResponse, GetPlansApiArg>({
            query: () => ({ url: `/api/plans` }),
        }),
        getAllCountries: build.query<GetAllCountriesApiResponse, GetAllCountriesApiArg>({
            query: () => ({ url: `/api/countries` }),
        }),
        activateAccount: build.query<ActivateAccountApiResponse, ActivateAccountApiArg>({
            query: (queryArg) => ({ url: `/api/auth/activate`, params: { key: queryArg.key } }),
        }),
        deleteCard: build.mutation<DeleteCardApiResponse, DeleteCardApiArg>({
            query: (queryArg) => ({ url: `/api/account/cards/${queryArg.cardId}`, method: "DELETE" }),
        }),
    }),
    overrideExisting: false,
})
export { injectedRtkApi as tbuddiApi }
export type UpdateItemApiResponse = /** status 200 OK */ PurchasableItemResponse
export type UpdateItemApiArg = {
    id: number
    propertyId: string
    createOrUpdatePurchasableItemRequest: CreateOrUpdatePurchasableItemRequest
}
export type DeleteItemApiResponse = unknown
export type DeleteItemApiArg = {
    id: number
    propertyId: string
}
export type SetDefaultCardApiResponse = unknown
export type SetDefaultCardApiArg = {
    changeDefaultCardRequest: ChangeDefaultCardRequest
}
export type GetManagementLoggersByNameApiResponse = /** status 200 OK */ object
export type GetManagementLoggersByNameApiArg = {
    name: string
}
export type PostManagementLoggersByNameApiResponse = /** status 200 OK */ object
export type PostManagementLoggersByNameApiArg = {
    name: string
    body: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | "OFF"
}
export type CreateStayApiResponse = unknown
export type CreateStayApiArg = {
    /** CreateStayRequest */
    createStayRequest: CreateStayRequest
}
export type CreateItemApiResponse = /** status 200 OK */ PurchasableItemResponse
export type CreateItemApiArg = {
    /** property id */
    propertyId: string
    /** item to create */
    createOrUpdatePurchasableItemRequest: CreateOrUpdatePurchasableItemRequest
}
export type PurchaseItemApiResponse = unknown
export type PurchaseItemApiArg = {
    /** purchase request */
    purchaseRequest: PurchaseRequest
}
export type GetMyPropertiesApiResponse = /** status 200 list of properties */ PropertyResponse[]
export type GetMyPropertiesApiArg = void
export type CreatePropertyApiResponse = /** status 200 property */ PropertyResponse
export type CreatePropertyApiArg = {
    /** - property details */
    createPropertyRequest: CreatePropertyRequest
}
export type RequestPasswordResetApiResponse = unknown
export type RequestPasswordResetApiArg = {
    /** - reset password request */
    resetPasswordInitRequest: ResetPasswordInitRequest
}
export type FinishPasswordResetApiResponse = unknown
export type FinishPasswordResetApiArg = {
    resetPasswordFinishRequest: ResetPasswordFinishRequest
}
export type RegisterHostUserApiResponse = unknown
export type RegisterHostUserApiArg = {
    /** - host user details */
    registerHostUserRequest: RegisterHostUserRequest
}
export type AuthorizeApiResponse = /** status 200 JWT token */ JwtToken
export type AuthorizeApiArg = {
    /** - login details */
    loginRequest: LoginRequest
}
export type GetSubscriptionsApiResponse = /** status 200 list of subscriptions */ SubscriptionResponse[]
export type GetSubscriptionsApiArg = void
export type CreateSubscriptionApiResponse = unknown
export type CreateSubscriptionApiArg = {
    /** - subscription details */
    createOrUpdateSubscriptionRequest: CreateOrUpdateSubscriptionRequest
}
export type CancelSubscriptionApiResponse = unknown
export type CancelSubscriptionApiArg = void
export type UpdateSubscriptionApiResponse = unknown
export type UpdateSubscriptionApiArg = {
    createOrUpdateSubscriptionRequest: CreateOrUpdateSubscriptionRequest
}
export type ChangePasswordApiResponse = unknown
export type ChangePasswordApiArg = {
    /** - change password request */
    changePasswordRequest: ChangePasswordRequest
}
export type GetCardsApiResponse = /** status 200 OK */ CardResponse[]
export type GetCardsApiArg = void
export type CreateCardApiResponse = unknown
export type CreateCardApiArg = {
    createCardRequest: CreateCardRequest
}
export type DeletePropertyApiResponse = unknown
export type DeletePropertyApiArg = {
    id: string
}
export type UpdatePropertyApiResponse = /** status 200 OK */ PropertyResponse
export type UpdatePropertyApiArg = {
    /** - property id */
    id: string
    /** - property details */
    updatePropertyRequest: UpdatePropertyRequest
}
export type GetAccountApiResponse = /** status 200 account details */ AccountResponse
export type GetAccountApiArg = void
export type DeleteAccountApiResponse = unknown
export type DeleteAccountApiArg = void
export type UpdateAccountApiResponse = /** status 200 account details */ AccountResponse
export type UpdateAccountApiArg = {
    /** - account details */
    updateAccountRequest: UpdateAccountRequest
}
export type ThreaddumpApiResponse = /** status 200 OK */ object
export type ThreaddumpApiArg = void
export type LoggersApiResponse = /** status 200 OK */ object
export type LoggersApiArg = void
export type InfoApiResponse = /** status 200 OK */ object
export type InfoApiArg = void
export type HealthApiResponse = /** status 200 OK */ object
export type HealthApiArg = void
export type GetManagementHealthApiResponse = /** status 200 OK */ object
export type GetManagementHealthApiArg = void
export type EnvApiResponse = /** status 200 OK */ object
export type EnvApiArg = void
export type GetManagementEnvByToMatchApiResponse = /** status 200 OK */ object
export type GetManagementEnvByToMatchApiArg = {
    toMatch: string
}
export type ConfigpropsApiResponse = /** status 200 OK */ object
export type ConfigpropsApiArg = void
export type GetManagementConfigpropsByPrefixApiResponse = /** status 200 OK */ object
export type GetManagementConfigpropsByPrefixApiArg = {
    prefix: string
}
export type CachesApiResponse = /** status 200 OK */ object
export type CachesApiArg = void
export type Caches2ApiResponse = /** status 200 OK */ object
export type Caches2ApiArg = void
export type GetManagementCachesByCacheApiResponse = /** status 200 OK */ object
export type GetManagementCachesByCacheApiArg = {
    cache: string
}
export type DeleteManagementCachesByCacheApiResponse = /** status 200 OK */ object
export type DeleteManagementCachesByCacheApiArg = {
    cache: string
}
export type GetHostStaysApiResponse = /** status 200 Page<StayResponse> */ PageStayResponse
export type GetHostStaysApiArg = {
    /** Zero-based page index (0..N) */
    page?: number
    /** The size of the page to be returned */
    size?: number
    /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[]
}
export type GetGuestStaysApiResponse = /** status 200 Page<StayResponse> */ PageStayResponse
export type GetGuestStaysApiArg = {
    /** Zero-based page index (0..N) */
    page?: number
    /** The size of the page to be returned */
    size?: number
    /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[]
}
export type SearchItemsApiResponse = /** status 200 list of items */ PagePurchasableItemResponse
export type SearchItemsApiArg = {
    name?: string
    subCategoryId?: number
    categoryId?: number
    propertyId: string
    /** Zero-based page index (0..N) */
    page?: number
    /** The size of the page to be returned */
    size?: number
    /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[]
}
export type GetCategoriesApiResponse =
    /** status 200 list of item categories and subcategories */ ItemCategoryResponse[]
export type GetCategoriesApiArg = void
export type GetHostPurchaseHistoryApiResponse = /** status 200 OK */ PagePurchaseHistoryResponse
export type GetHostPurchaseHistoryApiArg = {
    /** Zero-based page index (0..N) */
    page?: number
    /** The size of the page to be returned */
    size?: number
    /** Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[]
    propertyId?: string
    startDate?: string
    endDate?: string
    ownerEmail?: string
}
export type GetPlansApiResponse = /** status 200 list of plans */ PlanResponse[]
export type GetPlansApiArg = void
export type GetAllCountriesApiResponse = /** status 200 list of countries */ CountryResponse[]
export type GetAllCountriesApiArg = void
export type ActivateAccountApiResponse = unknown
export type ActivateAccountApiArg = {
    /** - activation key */
    key: string
}
export type DeleteCardApiResponse = unknown
export type DeleteCardApiArg = {
    cardId: string
}
export type ItemSubCategoryDto = {
    id: number
}
export type PurchasableItemResponse = {
    id?: number
    name?: string
    imageUrl?: string
    description?: string
    price?: number
    quantity?: number
    itemSubCategory?: ItemSubCategoryDto
}
export type CreateOrUpdatePurchasableItemRequest = {
    name: string
    image?: string
    description: string
    price: number
    quantity: number
    itemSubCategory: ItemSubCategoryDto
}
export type ChangeDefaultCardRequest = {
    cardId?: string
}
export type PropertyDto = {
    id: string
}
export type CreateStayRequest = {
    start: string
    end: string
    property: PropertyDto
}
export type PurchaseRequest = {
    itemId: number
}
export type PropertyResponse = {
    createdDate?: string
    lastModifiedDate?: string
    id?: string
    name?: string
    addressLine1?: string
    addressLine2?: string
    zipCode?: string
    phoneNumber?: string
    emailAddress?: string
    coverImage?: string
    airbnbLink?: string
    bookingLink?: string
    agodaLink?: string
    description?: string
    isActive?: boolean
    city?: string
    country?: number
}
export type CountryDto = {
    id: number
}
export type CreatePropertyRequest = {
    name: string
    addressLine1: string
    addressLine2?: string
    zipCode: string
    phoneNumber: string
    emailAddress: string
    coverImage: string
    city: string
    airbnbLink?: string
    bookingLink?: string
    agodaLink?: string
    description: string
    isActive?: boolean
    country: CountryDto
}
export type ResetPasswordInitRequest = {
    email: string
}
export type ResetPasswordFinishRequest = {
    key?: string
    newPassword?: string
}
export type RegisterHostUserRequest = {
    password: string
    firstName?: string
    lastName?: string
    email?: string
    langKey?: string
    imageUrl?: string
    phoneNumber: string
    countryId: number
    zipCode: string
    address: string
    city: string
}
export type JwtToken = {
    idToken?: string
}
export type LoginRequest = {
    email: string
    password: string
    rememberMe?: boolean
}
export type SubscriptionResponse = {
    id?: string
    planId?: string
    planName?: string
    planDescription?: string
    planAmount?: string
    active?: boolean
    propertyCount?: number
}
export type CreateOrUpdateSubscriptionRequest = {
    planId: string
}
export type ChangePasswordRequest = {
    currentPassword?: string
    newPassword?: string
}
export type CardResponse = {
    brand?: string
    currency?: string
    description?: string
    expMonth?: number
    expYear?: number
    id?: string
    issuer?: string
    last4?: string
    name?: string
    status?: string
    tokenizationMethod?: string
    default?: boolean
}
export type CreateCardRequest = {
    token: string
}
export type UpdatePropertyRequest = {
    name?: string
    addressLine1?: string
    addressLine2?: string
    zipCode?: string
    phoneNumber?: string
    emailAddress?: string
    coverImage?: string
    city?: string
    airbnbLink?: string
    bookingLink?: string
    agodaLink?: string
    description?: string
    isActive?: boolean
    country?: CountryDto
}
export type AuthorityDto = {
    name: string
}
export type AccountResponse = {
    createdDate?: string
    lastModifiedBy?: string
    lastModifiedDate?: string
    id?: number
    firstName?: string
    lastName?: string
    email?: string
    langKey?: string
    imageUrl?: string
    phoneNumber?: string
    street?: string
    country?: CountryDto
    zipCode?: string
    address?: string
    city?: string
    authorities?: AuthorityDto[]
}
export type UpdateAccountRequest = {
    firstName?: string
    lastName?: string
    email?: string
    langKey?: string
    image?: string
    phoneNumber?: string
    street?: string
    countryId?: number
    zipCode?: string
    address?: string
    city?: string
}
export type UserDto = {
    id?: number
    firstName?: string
    lastName?: string
    email?: string
    imageUrl?: string
    phoneNumber?: string
}
export type StayResponse = {
    id?: number
    start?: string
    end?: string
    guest?: UserDto
    property?: PropertyDto
}
export type SortObject = {
    empty?: boolean
    sorted?: boolean
    unsorted?: boolean
}
export type PageableObject = {
    offset?: number
    sort?: SortObject
    pageNumber?: number
    pageSize?: number
    paged?: boolean
    unpaged?: boolean
}
export type PageStayResponse = {
    totalPages?: number
    totalElements?: number
    size?: number
    content?: StayResponse[]
    number?: number
    sort?: SortObject
    first?: boolean
    last?: boolean
    pageable?: PageableObject
    numberOfElements?: number
    empty?: boolean
}
export type PagePurchasableItemResponse = {
    totalPages?: number
    totalElements?: number
    size?: number
    content?: PurchasableItemResponse[]
    number?: number
    sort?: SortObject
    first?: boolean
    last?: boolean
    pageable?: PageableObject
    numberOfElements?: number
    empty?: boolean
}
export type ItemCategoryResponse = {
    id?: number
    name?: string
    subCategories?: ItemSubCategoryDto[]
}
export type PurchasableItemDto = {
    id?: number
    name?: string
    imageUrl?: string
    description?: string
    price?: number
    property?: PropertyDto
    itemSubCategory?: ItemSubCategoryDto
}
export type PurchaseHistoryResponse = {
    id?: number
    createdDate?: string
    buyer?: UserDto
    item?: PurchasableItemDto
}
export type PagePurchaseHistoryResponse = {
    totalPages?: number
    totalElements?: number
    size?: number
    content?: PurchaseHistoryResponse[]
    number?: number
    sort?: SortObject
    first?: boolean
    last?: boolean
    pageable?: PageableObject
    numberOfElements?: number
    empty?: boolean
}
export type PlanResponse = {
    id?: string
    name?: string
    description?: string
    currency?: string
    amount?: string
    propertyCount?: number
}
export type CountryResponse = {
    id?: number
    name?: string
}
export const {
    useUpdateItemMutation,
    useDeleteItemMutation,
    useSetDefaultCardMutation,
    useGetManagementLoggersByNameQuery,
    useLazyGetManagementLoggersByNameQuery,
    usePostManagementLoggersByNameMutation,
    useCreateStayMutation,
    useCreateItemMutation,
    usePurchaseItemMutation,
    useGetMyPropertiesQuery,
    useLazyGetMyPropertiesQuery,
    useCreatePropertyMutation,
    useRequestPasswordResetMutation,
    useFinishPasswordResetMutation,
    useRegisterHostUserMutation,
    useAuthorizeMutation,
    useGetSubscriptionsQuery,
    useLazyGetSubscriptionsQuery,
    useCreateSubscriptionMutation,
    useCancelSubscriptionMutation,
    useUpdateSubscriptionMutation,
    useChangePasswordMutation,
    useGetCardsQuery,
    useLazyGetCardsQuery,
    useCreateCardMutation,
    useDeletePropertyMutation,
    useUpdatePropertyMutation,
    useGetAccountQuery,
    useLazyGetAccountQuery,
    useDeleteAccountMutation,
    useUpdateAccountMutation,
    useThreaddumpQuery,
    useLazyThreaddumpQuery,
    useLoggersQuery,
    useLazyLoggersQuery,
    useInfoQuery,
    useLazyInfoQuery,
    useHealthQuery,
    useLazyHealthQuery,
    useGetManagementHealthQuery,
    useLazyGetManagementHealthQuery,
    useEnvQuery,
    useLazyEnvQuery,
    useGetManagementEnvByToMatchQuery,
    useLazyGetManagementEnvByToMatchQuery,
    useConfigpropsQuery,
    useLazyConfigpropsQuery,
    useGetManagementConfigpropsByPrefixQuery,
    useLazyGetManagementConfigpropsByPrefixQuery,
    useCachesQuery,
    useLazyCachesQuery,
    useCaches2Mutation,
    useGetManagementCachesByCacheQuery,
    useLazyGetManagementCachesByCacheQuery,
    useDeleteManagementCachesByCacheMutation,
    useGetHostStaysQuery,
    useLazyGetHostStaysQuery,
    useGetGuestStaysQuery,
    useLazyGetGuestStaysQuery,
    useSearchItemsQuery,
    useLazySearchItemsQuery,
    useGetCategoriesQuery,
    useLazyGetCategoriesQuery,
    useGetHostPurchaseHistoryQuery,
    useLazyGetHostPurchaseHistoryQuery,
    useGetPlansQuery,
    useLazyGetPlansQuery,
    useGetAllCountriesQuery,
    useLazyGetAllCountriesQuery,
    useActivateAccountQuery,
    useLazyActivateAccountQuery,
    useDeleteCardMutation,
} = injectedRtkApi
