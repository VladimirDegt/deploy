import { defineConfig, devices } from '@playwright/test';
import { BASE_URL_FRONT } from './src/utils/const';
import os from 'os';

const numCPUs = os.availableParallelism();
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 3 : 1,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? numCPUs : numCPUs,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: BASE_URL_FRONT,
        // testIdAttribute: 'dataTestId',
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },

    /* Configure projects for major browsers */
    projects: process.env.CI
        ? [
              {
                  name: 'Mobile Chrome - iPhone 13',
                  use: { ...devices['iPhone 13'] },
              },
          ]
        : [
              // {
              //     name: 'chromium',
              //     use: { ...devices['Desktop Chrome'] },
              // },
              //
              // {
              //     name: 'firefox',
              //     use: { ...devices['Desktop Firefox'] },
              // },
              //
              // {
              //     name: 'webkit',
              //     use: { ...devices['Desktop Safari'] },
              // },
              //
              // /* Test against mobile viewports. */
              // {
              //     name: 'Mobile Chrome - Pixel 5',
              //     use: { ...devices['Pixel 5'] },
              // },
              // {
              //     name: 'Mobile Chrome - Galaxy S21',
              //     use: { ...devices['Galaxy S21'] },
              // },
              // {
              //     name: 'Mobile Chrome - Xiaomi Mi 11',
              //     use: { ...devices['Xiaomi Mi 11'] },
              // },
              // {
              //     name: 'Mobile Safari - iPhone 13',
              //     use: { ...devices['iPhone 13'] },
              // },
              {
                  name: 'Mobile Chrome - iPhone 13',
                  use: { ...devices['iPhone 13'] },
              },
              // {
              //     name: 'Mobile Chrome - iPhone SE',
              //     use: { ...devices['iPhone SE'] },
              // },
              //
              // /* Test against generic Android viewports. */
              // {
              //     name: 'Android - Generic',
              //     use: { ...devices['Pixel 5'] },
              // },
              //
              // /* Test against branded browsers. */
              // {
              //     name: 'Microsoft Edge',
              //     use: { ...devices['Desktop Edge'], channel: 'msedge' },
              // },
              // {
              //     name: 'Google Chrome',
              //     use: { ...devices['Desktop Chrome'], channel: 'chrome' },
              // },
          ],

    /* Run your local dev server before starting the tests */
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:5173/',
        reuseExistingServer: !process.env.CI,
    },
});
