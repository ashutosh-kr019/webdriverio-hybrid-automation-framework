exports.config = {

    runner: 'local',

    framework: 'mocha',

    logLevel: 'error',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    reporters: [
        'spec',
        ['allure', {
            outputDir: './reports/allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 180000
    },

    injectGlobals: true,

    onPrepare() {

        const fs = require('fs');
        const path = require('path');

        const allureDir =
            path.join(
                process.cwd(),
                'reports/allure-results'
            );

        const screenshotDir =
            path.join(
                process.cwd(),
                'screenshots'
            );

        if (!fs.existsSync(allureDir)) {
            fs.mkdirSync(allureDir, { recursive: true });
        }

        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir, { recursive: true });
        }
    }
};