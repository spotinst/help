const HTTP_ROOT = process.env.HTTP_ROOT || "http://localhost";
const HTTP_PORT = process.env.HTTP_PORT || 3000;
const SKIP_BOOTSTRAP = process.env.E2E_SKIP_BOOTSTRAP === "true";
const GENERATE_REPORT = process.env.E2E_GENERATE_REPORT === "true";
const SHOW = process.env.E2E_SHOW === "true";

exports.config = {
  tests: "./test/e2e/*.test.js",
  output: "./test/e2e/output",
  helpers: {
    Puppeteer: {
      url: `${HTTP_ROOT}:${HTTP_PORT}`,
      show: SHOW,
      chrome: {
        args: ["--no-sandbox"],
        defaultViewport: {
          width: 1024,
          height: 768,
        },
      },
      executablePath: "google-chrome-unstable",
    },
  },
  include: {
    I: "./test/e2e/_steps_file.js",
  },
  bootstrap: SKIP_BOOTSTRAP || "./test/e2e/hooks/bootstrap.js",
  teardown: SKIP_BOOTSTRAP || "./test/e2e/hooks/teardown.js",
  plugins: {
    allure: {
      enabled: GENERATE_REPORT,
    },
    stepByStepReport: {
      enabled: GENERATE_REPORT,
    },
  },
  mocha: {
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        stdout: "-",
      },
      "mocha-junit-reporter": {
        stdout: "test/e2e/output/junit-console.log",
      },
    },
  },
  name: "docs",
};
