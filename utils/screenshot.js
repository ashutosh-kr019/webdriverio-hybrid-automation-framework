const path = require('path');

module.exports = async function(testName) {
    const fileName =`${Date.now()}_${testName}.png`;
    const filePath = path.join(process.cwd(),'screenshots',fileName);
    await browser.saveScreenshot(filePath);
};