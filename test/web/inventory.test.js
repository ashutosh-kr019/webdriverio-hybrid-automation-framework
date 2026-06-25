const LoginPage = require('../../pages/web/login.page');
const InventoryPage = require('../../pages/web/inventoryPage');
const env = require('../../utils/env');

describe('Inventory Page', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login(env.USERNAME,env.PASSWORD);
    });

    it('should add product to cart', async () => {
        await InventoryPage.addToCart();
        await InventoryPage.verifyRemoveButton();
        await InventoryPage.goToCart();
        await InventoryPage.checkout("Ashutosh","singh",123456);
        // await InventoryPage.verifyOrderSuccess();
        await InventoryPage.logout();
        await LoginPage.verifyLogout();
    });
    

});