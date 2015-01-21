var later = require('later'),
    RSVP = require('rsvp');

module.exports = function (name, schedule) {
    var promise = new RSVP.Promise(function (resolve, reject) {        
        var s = later.parse.text(schedule);
        later.setInterval(function(){
            console.log('fire');
            resolve(name);
        }, s);
    })
    return promise;
}