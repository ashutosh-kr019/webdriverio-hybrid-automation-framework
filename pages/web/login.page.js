const BasePage = require('./basePage');
const env = require('../../utils/env');

class LoginPage extends BasePage {
    get usernameInput() {return $('#user-name');}
    get passwordInput() {return $('#password');}
    get loginButton() {return $('#login-button');}
    get errorMessage() {return $('.error-message-container');}

    async open() {await browser.url(env.BASE_URL);}

    async login(username, password) {
        await this.setValue(this.usernameInput,username);
        await this.setValue(this.passwordInput,password);
        await this.click(this.loginButton);
    }

    async verifyTitle(){await expect(browser).toHaveTitle('Swag Labs');}
    async verifyError(){await expect(this.errorMessage).toBeDisplayed();}
    async verifyLogout(){await expect(this.loginButton).toBeDisplayed();}
}

module.exports = new LoginPage();