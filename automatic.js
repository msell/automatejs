var growl = require('growl');
var ipChanged = require('./triggers/publicIpChanged.js');
var scheduledTask = require('./triggers/scheduledTask.js');
var killProcess = require('./actions/killProcess.js');
var notify = require('./actions/notify.js');
var later = require('later')

module.exports = {
    start: function () {
        growl('automatic.js started');
        performRecipes();
    }
}

function performRecipes() {
    
    var s = later.parse.text("every 3 secs");
        later.setInterval(function(){
            console.log('fire');            
            scheduledTask("daily standup").then(notify.viaGrowl).then(notify.viaConsole);
        }, s);            
}