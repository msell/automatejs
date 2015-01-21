var later = require('later'),
    RSVP = require('rsvp'),
    jobExecutor = require('../jobExecutor.js');

module.exports = function(schedule){
    var promise = new RSVP.Promise(function(resolve, reject){
        var s = later.parse.text(schedule);
        var next = later.schedule(s).next(1);
        jobExecutor.addJob({"time":next, "promise": this});          
    })
    return promise;
}