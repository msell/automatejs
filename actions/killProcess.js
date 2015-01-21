var exec = require('child_process').exec;
module.exports = function (processName) {

    exec("pkill " + processName, function (error, stdout, stderr) {
        console.log('killing ' + processName);
        console.log(stdout);
    });
}