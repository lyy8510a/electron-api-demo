var schedule = require('node-schedule')


var rule = new schedule.RecurrenceRule()
// rule.minute = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
rule.second = 30;
// Tell main process to show the menu when demo button is clicked
const createScheduleBtn = document.getElementById('create-schedule')

createScheduleBtn.addEventListener('click', () => {
  schedule.scheduleJob(rule, function () {
    console.log(new Date(), '每分钟里面第30秒的时候.')
  })

})
