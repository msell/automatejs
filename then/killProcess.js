var exec = require('child_process').exec;
module.exports = function (processName) {

//    exec("pkill utorrent", function(error, stdout, stderr){
//        console.log('kill any torrents');
//        console.log(stdout);
//    });
    
    exec("pkill Airmail", function(error, stdout, stderr){
        console.log('kill airmail');
        console.log(stdout);
    });
}