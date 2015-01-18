var growl = require('growl');
var ipChanged = require('./if/publicIpChanged.js');

module.exports = {
    start: function () {
        growl('automatic.js started');
        performRecipes();
    }
}


function performRecipes() {
    setTimeout(function () {                
        ipChanged();
        
        
        performRecipes();
    }, 9000);

}