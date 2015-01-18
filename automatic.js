var growl = require('growl');
var ipChanged = require('./if/publicIpChanged.js');
var killProcess = require('./then/killProcess.js');

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

        ipChanged().then(function (data) {
            console.log('data ' + data);

        }),
        function (error) {
            console.log(error);
        }

        performRecipes();
    }, 9000);

}