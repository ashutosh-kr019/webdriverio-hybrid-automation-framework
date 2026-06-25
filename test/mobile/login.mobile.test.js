const loginScreen = require('../../pages/mobile/loginScreen');
const loginData = require('../../data/mobile/loginData.json');
const appSetup = require('../../utils/appSetup');

describe('Sauce Demo Login Flow', () => {
    beforeEach(async () => {
        await appSetup.startFromLoginPage();

    });

    it('Should show error message when password is empty', async () => {
        await loginScreen.loginWithoutPassword(loginData.validUser.email);
        await loginScreen.verifyErrorMesage('Enter Password');

    });

    it('Should login and logout successfully', async () => {
        await loginScreen.login(loginData.validUser.email,loginData.validUser.password);
        await loginScreen.logout();
        await loginScreen.verifyCancelButton();
        await loginScreen.confirmLogoutButton.click();
        await loginScreen.verifySuccessLogout();

    });

});