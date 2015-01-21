var RSVP = require('rsvp');

module.exports = function (name) {
    var promise = new RSVP.Promise(function (resolve, reject) {        
        resolve(name);
    })
    return promise;
}