var _ = require('lodash');
var moment = require('moment');

var jobs = [];
var dateFormat = "MMDDYYYY:HHmmss";

module.exports = {
    addJob: function (job) {
        if(!job.time) return;
        
        job.time = moment(job.time, dateFormat)
        jobs.push(job);
    },
    start: function processJobs() {
        setTimeout(function () {
            var readyTasks = _.where(jobs, {
                'time': moment(_.now,dateFormat)
            })
            _.forEach(readyTasks, function (task) {
                task.fulfilled();
            })
            processJobs();
        }, 1000)
    }
}