
//global function for calendar
Date.prototype.addDays = function(days) {
      this.setDate( this.getDate() + days )
      return this
}
Date.prototype.addMonths = function(months) {
      this.setMonth( this.getMonth() + months )
      return this
}

const calendario = new Date()


const showCalendar = (calendar) => {

  document.querySelector(".agenda h1").innerHTML = calendar.toDateString()
  var now = new Date()
  var req = { query: {} }
  var year = req.query.year || 1900 + calendar.getYear()
  var month = req.query.month || calendar.getMonth()
  var day = req.query.day || calendar.getDate()

  console.log('year', year, 'month', month, 'day', day)
  var cal = new Date(year, month, 1 )
  cal.addDays(-1 * ( cal.getDay()+1 ) )
  var calendarArray = ['<div class="weekday">S</div>',
              '<div class="weekday">M</div>',
              '<div class="weekday">T</div>',
              '<div class="weekday">W</div>',
              '<div class="weekday">T</div>',
              '<div class="weekday">F</div>',
              '<div class="weekday">S</div>' ]

  for (let i = 1; i < 43; i++) {
      cal.addDays(1)
      calendarArray.push( '<a href="#" ' + ( calendar.getMonth() !== cal.getMonth() ? 'class="noMonth" ' : ( now.getMonth() !== cal.getMonth() && now.getDate() === cal.getDate() ? 'class="today"' : 'class="day"' ) ) + ' onclick="onDayOfTheMonth(event)" >' + `${ cal.getDate() }` + '</a>' )
  }


  document.querySelectorAll(".cal-header .monthName").forEach( (e,i) => {
      calendar.addMonths(i)
      e.innerHTML = calendar.toLocaleString('default', { month: 'long'}) + ' - ' + calendar.toLocaleString('default', { year: 'numeric'})
  })
  document.querySelector('.date').innerHTML = calendarArray.join('')
}

const prevBtn = () => {
  calendario.addMonths(-1)
  showCalendar(calendario)
}
const nextBtn = () => {
  calendario.addMonths(1)
  showCalendar(calendario)
}

const onDayOfTheMonth = (event) => {
  // debugger
  let d = parseInt( event.currentTarget.innerText )
  calendario.setDate( d )
  if ( event.currentTarget.className === 'noMonth' ) {
     if (d<14) calendario.addMonths(1)
     else calendario.addMonths(-1)
  }
  showCalendar(calendario)
}

showCalendar(calendario)