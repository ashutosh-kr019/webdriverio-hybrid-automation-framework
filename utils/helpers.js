class Helpers {

    static async maximizeBrowser() {
        await browser.maximizeWindow();
    }

    static async pause(seconds) {
        await browser.pause(seconds * 1000);
    }

    static getCurrentDate() {
        return new Date().toISOString();
    }

    static generateRandomEmail() {
        return `user${Date.now()}@test.com`;
    }

    static generateRandomName() {
        return `User${Date.now()}`;
    }
}

module.exports = Helpers;