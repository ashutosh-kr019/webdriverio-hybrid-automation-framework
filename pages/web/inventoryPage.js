const BasePage = require('./basePage');

class InventoryPage extends BasePage {

    get menuButton() {return $('#react-burger-menu-btn');}
    get logoutLink() {return $('#logout_sidebar_link');}
    get addToCartButton(){ return $('#add-to-cart-sauce-labs-backpack')}
    get removeButton(){return $('#remove-sauce-labs-backpack')}
    get cartLink(){return $('#shopping_cart_container')}
    get checkoutButton(){return $('#checkout')}
    get checkoutFirstName(){return $('#first-name')}
    get checkoutLastName(){return $('#last-name')}
    get checkoutPostalCode(){return $('#postal-code')}
    get checkoutContinue() {return $('#continue')}
    get checkoutFinish() {return $('#finish')}
    get backToProductButton() {return $('#back-to-products')}
    get successMessage() {return $('.complete-header');}

    async logout() {
        await this.click(this.menuButton);
        await this.click(this.logoutLink);
    }

    async addToCart(){await this.click(this.addToCartButton);}
    async verifyRemoveButton(){await expect(this.removeButton).toBeDisplayed();}
    async goToCart(){await this.click(this.cartLink);}
    async checkout(first, last, zip){
        await this.click(this.checkoutButton);
        await this.setValue(this.checkoutFirstName, first);
        await this.setValue(this.checkoutLastName, last);
        await this.setValue(this.checkoutPostalCode, zip);
        await this.click(this.checkoutContinue);
        await this.click(this.checkoutFinish);
        await this.click(this.backToProductButton);
    }

    async verifyOrderSuccess(){
        await this.click(this.backToProductButton);
    }
    
}

module.exports = new InventoryPage();