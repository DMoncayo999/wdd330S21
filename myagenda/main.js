
//global function for calendar
Date.prototype.addDays = function(days) {
      this.setDate( this.getDate() + days )
      return this
}
Date.prototype.addMonths = function(months) {
      this.setMonth( this.getMonth() + months )
      return this
}

var myCalendar = new Date()
var myAgenda = (localStorage.getItem("agenda")==null) ? {} : JSON.parse(localStorage.getItem("agenda"))
localStorage.setItem("agenda", JSON.stringify( myAgenda ))


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
      e.innerHTML = calendar.toLocaleString('default', { month: 'long'}) + ' - '  + calendar.toLocaleString('default', { year: 'numeric'})
  })
  document.querySelector('.date').innerHTML = calendarArray.join('')
}

const prevBtn = () => {
  myCalendar.addMonths(-1)
  showCalendar(myCalendar)
}
const nextBtn = () => {
  myCalendar.addMonths(1)
  showCalendar(myCalendar)
}

const onDayOfTheMonth = (event) => {
  let d = parseInt( event.currentTarget.innerText )
  myCalendar.setDate( d )
  if ( event.currentTarget.className === 'noMonth' ) {
     if (d<14) myCalendar.addMonths(1)
     else myCalendar.addMonths(-1)
  }
  // load Agenda
  myAgenda = JSON.parse(localStorage.getItem("agenda"))

  let day = myCalendar.toDateString()
  if ( myAgenda[day] ) {
    let data = myAgenda[day]
    document.querySelectorAll("input[name]")
                  .forEach( (e,i) => {
                    let val = data[e.name]
                    e.value = val ? val : ''
                  } )
  } else {
    document.querySelectorAll("input[name]")
                  .forEach( (e,i) => {
                    e.value = ''
                  } )
  }

  showCalendar(myCalendar)
}

const onAgendaSave = (event) => {
              event.preventDefault()
              let data = {}
              // Object.keys( data ).forEach( key => { data[key] = AuthContext[key] })
              document.querySelectorAll("input[name]")
                    .forEach( (e,i) => {
                      data[e.name] = e.value
                    } )
              myAgenda[`${myCalendar.toDateString()}`] = data
              localStorage.setItem("agenda", JSON.stringify( myAgenda ))
}

showCalendar(myCalendar)