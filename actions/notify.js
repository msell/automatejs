var growl = require('growl')
RSVP = require('rsvp');

module.exports = {
    viaGrowl: function (message) {
        return new RSVP.Promise(function (resolve, reject) {
            growl(message);
            resolve(message);
        })
    },
    viaEmail: function (to, subject, body) {
        return new RSVP.Promise(function (resolve, reject) {
            console.log('email not implemented yet');
            resolve();
        })
    },
    viaConsole: function (message) {
        return new RSVP.Promise(function (resolve, reject) {
            console.log(message); // caller could pass chalk message
            resolve(message);
        })
    }

}