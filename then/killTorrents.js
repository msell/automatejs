var exec = require('child_process').exec;
module.exports = function () {

    exec("pkill utorrent", function(error, stdout, stderr){
        console.log('kill any torrents');
        console.log(stdout);
    });
}