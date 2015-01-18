var growl = require('growl');
var ipChanged = require('./if/publicIpChanged.js');
var killTorrents = require('./then/killTorrents.js');

module.exports = {
    start: function () {
        growl('automatic.js started');
        performRecipes();
    }
}


function performRecipes() {
    setTimeout(function () {  
        killTorrents();
        ipChanged();
        
        
        performRecipes();
    }, 9000);

}