var http = require('http');
var currentIp = currentIp || '';

module.exports = function () {
    var options = {
        hostname: 'icanhazip.com'
    };

    http.get(options, function (res) {        
        var ip = '';

        res.on('data', function (chunk) {
            ip += chunk;
        });
        res.on('end', function () {
            if (res.statusCode === 200) {
                if (ip !== currentIp) {
                    console.log('ip changed from ' + currentIp + ' to ' + ip);
                    currentIp = ip;
                }
            }
        });
    })
}