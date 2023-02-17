const config = {
    schemaFile: "https://tbuddi.marbleit.rs/api-docs",
    apiFile: "./src/api/emptyApi.ts",
    apiImport: "emptyTbuddiApi",
    outputFile: "./src/api/tbuddiApi.ts",
    exportName: "tbuddiApi",
    hooks: {
        queries: true,
        lazyQueries: true,
        mutations: true,
    },
}

module.exports = config
