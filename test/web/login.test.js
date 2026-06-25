const LoginPage = require('../../pages/web/login.page');
const InventoryPage = require('../../pages/web/inventoryPage');
const env = require('../../utils/env');
const loginData = require('../../data/web/loginData.json');

describe('Login Flow Tests', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should login successfully', async () => {
        await LoginPage.login(env.USERNAME,env.PASSWORD);
        await LoginPage.verifyTitle();
    });

    it('should show error for invalid login', async () => {
        await LoginPage.login(loginData.invalidUser.username,loginData.invalidUser.password);
        await LoginPage.verifyError();
    });

    it('should logout successfully', async () => {
        await LoginPage.login(env.USERNAME,env.PASSWORD);
        await InventoryPage.logout();
        await LoginPage.verifyLogout();
    });
});

