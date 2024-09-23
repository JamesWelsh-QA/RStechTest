// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  timeout: 30 * 5000,
  expect: {

    timeout: 10000

  },

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    screenshot : 'on', // change to 'only-on-failure' if screenshots of passed tests are not required
    trace : 'retain-on-failure', //really like this feature to view recordings of tests :)

  },

  projects: [
    /* Test against desktop browsers */
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      headless : true, // change to true for execution without browser window

    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      headless : true, // change to true for execution without browser window

    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      headless : true, // change to true for execution without browser window

    },
  ],
};

module.exports = config, defineConfig;


