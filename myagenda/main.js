
//global function for calendar
Date.prototype.addDays = function(days) {
      this.setDate( this.getDate() + days )
      return this
}
Date.prototype.addMonths = function(months) {
      this.setMonth( this.getMonth() + months )
      return this
}

/*
const urlParams = window.location.replaceAll(/([^&=]+)=?([^&]*)/g, (m, k , v) => {
    console.log("m", m, "k", k, "v", v)
})
*/
var now = new Date()
var req = { query: {} }
var year = req.query.year || 1900 + now.getYear()
var month = req.query.month || now.getMonth()
var day = req.query.day || now.getDate()

console.log('year', year, 'month', month, 'day', day)
now = new Date( year, month, day )
var cal = new Date( year, month, 1)
cal.addDays(-1 * ( cal.getDay()+1 ) )
  
const calendar = new Date()

document.querySelector(".agenda h1").innerHTML = calendar.toDateString()
    
document.querySelectorAll(".calendar span").forEach( (e,i) => { 
    calendar.addMonths(i)
    e.innerHTML = calendar.toLocaleString('default', { month: 'long'})
})

var calendarArray = ['<div class="weekday">S</div>', 
            '<div class="weekday">M</div>',
            '<div class="weekday">T</div>',
            '<div class="weekday">W</div>',
            '<div class="weekday">T</div>',
            '<div class="weekday">F</div>',
            '<div class="weekday">S</div>' ]
            
for (let i = 1; i < 43; i++) {
    calendarArray.push( '<a href="#" class="day" >' + `${ cal.addDays(1).getDate() }` + '</a>' )
}
document.querySelector('.date').innerHTML = calendarArray.join('')


