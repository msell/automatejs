var growl = require('growl');
var ipChanged = require('./triggers/publicIpChanged.js');
var scheduledTask = require('./triggers/scheduledTask.js');
var killProcess = require('./actions/killProcess.js');

module.exports = {
    start: function () {
        growl('automatic.js started');
        performRecipes();
    }
}

function performRecipes() {
        scheduledTask("daily standup", "every 3 secs").then(console.log('task fired'));
}