const base = require('./wdio.conf');
const path = require('path');
const env = require('../utils/env');

exports.config = {
    ...base.config,
    specs: [
        path.join(process.cwd(),'test/web/**/*.js')
    ],

    maxInstances: 1,
    baseUrl: env.BASE_URL,
    capabilities: [{
        browserName: 'chrome',
        maxInstances: 1,
        maxInstancesPerCapability: 1,
        'goog:chromeOptions': {
            args: [
                '--start-maximized',
                '--disable-notifications',
                '--disable-background-networking',
                '--disable-sync',
                '--log-level=3'
            ]
        }
    }],

    afterTest: async function (
    test,
    context,
    { error, passed }
) {

    if (!passed) {

        await browser.saveScreenshot(
            `./screenshots/${Date.now()}_${test.title}.png`
        );
    }
}

};