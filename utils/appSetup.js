const loginScreen = require('../pages/mobile/loginScreen');

class AppSetup {
    async startFromLoginPage() {
        await driver.terminateApp('com.saucelabs.mydemoapp.android');
        await driver.activateApp('com.saucelabs.mydemoapp.android');
        await loginScreen.navigateToLoginPage();
    }
}

module.exports = new AppSetup();