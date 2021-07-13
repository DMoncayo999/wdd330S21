const date = new Date();

//const dayOfMonth = document.querySelector(".days");

const months = 
 ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Ocbober",
 "November", "December"
 ];
    
document.querySelectorAll(".calendar span").forEach( (e,i) => { e.innerHTML = months[date.getMonth()+i]}) ;
document.querySelector(".agenda h1").innerHTML = date.toDateString();

/*let days = "";

for (let i = 1; i <= 31; i++) {
    days+= `<div>${i}</div>`; 
    dayOfMonth.innerHTML = days;
 } */
 
 
 
/*const date = new Date();

const renderCalendar = () => { 

    date.setDate(1);
    
    const dayOfMonth = document.querySelector(".days");
    
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1,0).getDate();
    
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    const firtDayIndex = date.getDay();
    
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1,0).getDay();
    
    const nextDays = 7 - lastDayIndex - 1;
    
    const months = 
     ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Ocbober",
     "November", "December"
     ];
        
    document.querySelectorAll(".calendar span").forEach( (e,i) => { e.innerHTML = months[date.getMonth()+i]}) ;
    document.querySelector(".agenda h1").innerHTML = date.toDateString();
    
    let days = "";
    
    for (let f = firstDayIndex; f > 0; f--) {
        days += `<div class="prev-days">${prevLastDay - f + 1}</div>`;   
    }
    
    for (let l = 1; l <= lastDay; l++) {
        if(l === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div>${l}</div>`; 
      }
    }
    
    for (let n = 1; n <= nextDays; n++) {
        days += `<div class="next-days">${n}</div>`
        dayOfMonth.innerHTML = days; 
    }
};

document.querySelector(".prev").addEventListener("click", () => { 
 date.setMonth(date.getMonth() - 1);
 renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
 date,setMonth(date.getMonth() + 1);
 renderCalendar();
});

renderCalendar();
 */
 
 