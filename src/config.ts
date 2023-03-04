const config = {
    BASE_API_PATH: import.meta.env.VITE_BASE_API_PATH,
    AUTHORIZATION_HEADER_NAME: "Authorization",
    BEARER_TOKEN_IDENTIFIER: "Bearer",
    LOCAL_STORAGE_TOKEN_KEY: "token",
    TUTORIALS_URL: "http://www.youtube.com/embed?listType=playlist&list=PL_c9BZzLwBRKIMP_xNTJxi9lIgQhE51rF&autoplay=1",
    PAGE_SIZE: 3,
    MARKETPLACE_CATEGORY_NAME: "Marketplace",
    SERVICES_CATEGORY_NAME: "Services",
    TOURS_CATEGORY_NAME: "Tours",
    STRIPE_KEY:
        "pk_test_51MCrHCErTQW8tQahu6XkqCiR4Kb2EPM02JB2d73LVdnt133s6ZSlB8WUBFP0nHgU5IdJAKJSIvgGoRoVyZHlluhs00QKUsiz7E",
}

export default config
