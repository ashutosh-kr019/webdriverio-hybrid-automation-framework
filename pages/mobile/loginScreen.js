const BaseScreen = require('./baseScreen');

class LoginScreen extends BaseScreen {

    get menuIcon() {return $('id=com.saucelabs.mydemoapp.android:id/menuIV');}
    get loginMenuItem() {return $('~Login Menu Item');}
    get logoutMenuItem() {return $('~Logout Menu Item');}
    get usernameInput() {return $('id=com.saucelabs.mydemoapp.android:id/nameET');}
    get passwordInput() {return $('id=com.saucelabs.mydemoapp.android:id/passwordET');}
    get loginButton() {return $('id=com.saucelabs.mydemoapp.android:id/loginBtn');}
    get passwordErrorMessage() {return $('id=com.saucelabs.mydemoapp.android:id/passwordErrorTV');}
    get cancelButton() {return $('id=android:id/button2');}
    get confirmLogoutButton() {return $('id=android:id/button1');}

    async navigateToLoginPage() {
        await this.menuIcon.waitForDisplayed({timeout: 30000});
        await this.menuIcon.click();
        await this.loginMenuItem.click();
    }
    async loginWithoutPassword(username) {
        await this.usernameInput.setValue(username);
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.usernameInput.clearValue();
        await this.passwordInput.clearValue();
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
    async logout() {
        await this.menuIcon.click();
        await this.logoutMenuItem.click();
    }

    async verifyErrorMesage(message){
        await expect(this.passwordErrorMessage).toHaveText(message);
    }

    async verifyCancelButton(){
        await expect(this.cancelButton).toBeDisplayed();
    }

    async verifySuccessLogout(){
        await expect(this.loginButton).toBeDisplayed();
    }

}

module.exports = new LoginScreen();
