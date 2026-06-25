const base = require('./wdio.conf');
const path = require('path');

exports.config = {
    ...base.config,
    port: 4723,
    maxInstances: 1,
    services: ['appium'],
    specs: [
    path.resolve(__dirname,'../test/mobile/**/*js')
    ],

    capabilities: [{
        maxInstances: 1,
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.resolve(__dirname,'../app/mda-2.2.0-25.apk'),
        'appium:noReset': false,
        'appium:autoGrantPermissions': true
    }],

    afterTest: async function (
        test,
        context,
        { passed }
        ) {
        if (!passed) {
            await browser.saveScreenshot(`./screenshots/${Date.now()}.png`
            );
        }
    }
};