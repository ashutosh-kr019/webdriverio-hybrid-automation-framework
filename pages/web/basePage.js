class BasePage {
    async open(path = '/') {
        return browser.url(path);
    }

    async click(el) {
        await el.waitForDisplayed({ timeout: 10000 });
        await el.waitForClickable({ timeout: 10000 });
        await el.click();
    }

    async setValue(el, value) {
        await el.waitForDisplayed({ timeout: 10000 });
        await el.clearValue();
        await el.setValue(value);
    }

    async getText(el) {
        await el.waitForDisplayed({ timeout: 10000 });
        return el.getText();
    }

    async waitForVisible(el, timeout = 10000) {
        await el.waitForDisplayed({ timeout });
    }

    async waitForClickable(el, timeout = 10000) {
        await el.waitForClickable({ timeout });
    }

    async isVisible(el) {
        return el.isDisplayed();
    }
}

module.exports = BasePage;