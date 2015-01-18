var http = require('http');
var currentIp = currentIp || '';
var RSVP = require('rsvp');

module.exports = function () {
    var options = {
        hostname: 'icanhazip.com'
    };

    var promise = new RSVP.Promise(function (resolve, reject) {
        http.get(options, function (res) {
            var ip = '';

            res.on('data', function (chunk) {
                ip += chunk;
            });
            res.on('end', function () {
                if (res.statusCode != 200) {
                    reject(this)
                } else {
                    var ipChanged = ip !== currentIp;
                    if (ipChanged) {
                        console.log('ip changed from ' + currentIp + ' to ' + ip);
                        currentIp = ip;
                        resolve(ip);
                    }
                    else {
                        // ip did not change, reject to break the chain here
                        reject(this);
                    }
                }
            })
        })
    })
    
    return promise;
}