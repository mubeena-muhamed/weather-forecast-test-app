import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_FRONTEND_BASE_URL || 'http://localhost:8081',
    specPattern: 'cypress/e2e/**/*.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
