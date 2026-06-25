const path = require('path');

exports.config = {
    runner: 'local',
    specs: [
        path.resolve(__dirname, '../test/api/**/*.js')
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    reporters: ['spec']
};