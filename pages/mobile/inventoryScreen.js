const BaseScreen = require('./baseScreen');
class InventoryScreen extends BaseScreen {

    get firstProduct() {
        return $('android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(0)');
    }
    get increaseQuantityButton() {return $('id=com.saucelabs.mydemoapp.android:id/plusIV');}
    get quantityLabel() {return $('id=com.saucelabs.mydemoapp.android:id/noTV');}
    get addToCartButton() {return $('id=com.saucelabs.mydemoapp.android:id/cartBt');}
    get cartButton() {return $('id=com.saucelabs.mydemoapp.android:id/cartTV');}
    get itemPrice() {return $('id=com.saucelabs.mydemoapp.android:id/priceTV');}
    get totalItems() {return $('id=com.saucelabs.mydemoapp.android:id/itemsTV');}
    get cartCheckoutButton() {return $('id=com.saucelabs.mydemoapp.android:id/cartBt');}
    get paymentButton() {return $('id=com.saucelabs.mydemoapp.android:id/paymentBtn');}
    get fullNameInput() {return $('id=com.saucelabs.mydemoapp.android:id/fullNameET');}
    get address1Input() {return $('id=com.saucelabs.mydemoapp.android:id/address1ET');}
    get address2Input() {return $('id=com.saucelabs.mydemoapp.android:id/address2ET');}
    get cityInput() {return $('id=com.saucelabs.mydemoapp.android:id/cityET');}
    get stateInput() {return $('id=com.saucelabs.mydemoapp.android:id/stateET');}
    get zipCodeInput() {return $('id=com.saucelabs.mydemoapp.android:id/zipET');}
    get countryInput() {return $('id=com.saucelabs.mydemoapp.android:id/countryET');}
    get cardNameInput() {return $('id=com.saucelabs.mydemoapp.android:id/nameET');}
    get cardNumberInput() {return $('id=com.saucelabs.mydemoapp.android:id/cardNumberET');}
    get expiryDateInput() {return $('id=com.saucelabs.mydemoapp.android:id/expirationDateET');}
    get securityCodeInput() {return $('id=com.saucelabs.mydemoapp.android:id/securityCodeET');}
    get billingAddressCheckbox() {return $('id=com.saucelabs.mydemoapp.android:id/billingAddressCB');}
    get thankYouMessage() {return $('id=com.saucelabs.mydemoapp.android:id/thankYouTV');}


    async openFirstProduct() {
        await this.click(this.firstProduct);
    }

    async increaseQuantity() {
        await this.click(this.increaseQuantityButton);
    }

    async verifyQuantity(expectedQuantity) {
        await expect(this.quantityLabel).toHaveText(expectedQuantity.toString());
    }

    async addToCart() {
        await this.click(this.addToCartButton);
    }

    async openCart() {
        await this.click(this.cartButton);
    }

    async verifyItemCount(expectedCount) {
        const itemText = await this.getText(this.totalItems);
        expect(itemText).toContain(expectedCount);
    }

    async proceedToCheckout() {
        await this.click(this.cartCheckoutButton);
    }

    async fillShippingDetails(data) {
        await this.fullNameInput.setValue(data.fullName);
        await this.address1Input.setValue(data.address1);
        await this.address2Input.setValue(data.address2);
        await this.cityInput.setValue(data.city);
        await this.stateInput.setValue(data.state);
        await this.zipCodeInput.setValue(data.zipCode);
        await this.countryInput.setValue(data.country);
        await this.click(this.paymentButton);
    }

    async fillPaymentDetails(data) {
        await this.cardNameInput.setValue(data.name);
        await this.cardNumberInput.setValue(data.cardNumber);
        await this.expiryDateInput.setValue(data.expiryDate);
        await this.securityCodeInput.setValue(data.securityCode);
        await this.click(this.paymentButton);
    }

    async reviewOrder() {
        await this.click(this.paymentButton);
    }

    async verifyOrderSuccess() {

        await this.thankYouMessage.waitForDisplayed({
            timeout: 15000
        });

        await expect(this.thankYouMessage)
            .toHaveText('Thank you for your order');
    }
}

module.exports = new InventoryScreen();