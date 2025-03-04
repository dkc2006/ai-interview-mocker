/** @type {import("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_OafkWK2edU9R@ep-round-snow-a8r6m3uj-pooler.eastus2.azure.neon.tech/ai-interview-mocker?sslmode=require',
    }
};