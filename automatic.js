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
    setTimeout(function () {
        //        ipChanged().then(killProcess('Airmail'), function(error){            
        //            growl(error);
        //        });            

//        ipChanged().then(function (data) {
//            console.log('data ' + data);
//        }) 
        //later.parse.recur().on(2).minute();
        scheduledTask("every 3 secs").then(console.log('task fired'));

        performRecipes();
    }, 9000);

}