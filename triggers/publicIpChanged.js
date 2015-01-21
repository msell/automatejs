var http = require('http');
var RSVP = require('rsvp');
var lastIp = '';

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
                    reject();
                }
                
                ip = ip.replace('\n', '');
                lastIp = lastIp.replace('\n', '');
                
                if (ip == lastIp){
                    console.log('ip didnt change.. reject promise')
                    reject();
                } else {
                    console.log('ip changed from ' + lastIp + ' to ' + ip);
                    lastIp = ip;
                    resolve(ip);
                }
            })
        })
    })

    return promise;
}
