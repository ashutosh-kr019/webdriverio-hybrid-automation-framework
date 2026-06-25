class BaseScreen {

    async click(locator) {
        await locator.waitForDisplayed({ timeout: 10000 });
        await locator.click();
    }

    async type(locator, value) {
        await locator.waitForDisplayed({ timeout: 10000 });
        await locator.click();
        await locator.clearValue();
        await locator.setValue(value);
        await driver.hideKeyboard();
    }

    async isDisplayed(locator) {
        await locator.waitForDisplayed({ timeout: 10000 });
        return await locator.isDisplayed();
    }

    async getText(locator) {
        await locator.waitForDisplayed({ timeout: 10000 });
        return await locator.getText();
    }
}

module.exports = BaseScreen;