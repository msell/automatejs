var growl = require('growl');

module.exports = {
    start: function () {
        growl('automatic.js started');
        performRecipes();
    }
}

function performRecipes() {
    setTimeout(function () {        
        growl('looking for recipes');
        performRecipes();
    }, 9000);

}