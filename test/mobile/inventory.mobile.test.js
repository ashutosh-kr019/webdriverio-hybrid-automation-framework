const loginScreen = require('../../pages/mobile/loginScreen');
const inventoryScreen = require('../../pages/mobile/inventoryScreen');
const loginData = require('../../data/mobile/loginData.json');
const inventoryData = require('../../data/mobile/inventoryData.json');
const appSetup = require('../../utils/appSetup');

describe('Sauce Demo Purchase Flow', () => {

    beforeEach(async () => {
        await appSetup.startFromLoginPage();
    });

    it('Should complete order successfully', async () => {
        await loginScreen.login(
            loginData.validUser.email,
            loginData.validUser.password
        );
        await inventoryScreen.openFirstProduct();
        await inventoryScreen.increaseQuantity();
        await inventoryScreen.verifyQuantity(2);
        await inventoryScreen.addToCart();
        await inventoryScreen.openCart();
        await inventoryScreen.verifyItemCount('2 Items');
        await inventoryScreen.proceedToCheckout();
        await inventoryScreen.fillShippingDetails(inventoryData.shippingDetails);
        await inventoryScreen.fillPaymentDetails(inventoryData.paymentDetails);
        await inventoryScreen.reviewOrder();
        await inventoryScreen.verifyOrderSuccess();
        await loginScreen.logout();
        await loginScreen.confirmLogoutButton.click();
        await loginScreen.verifySuccessLogout();
    });
});