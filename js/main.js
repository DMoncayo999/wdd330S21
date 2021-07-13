//  Dynamic portfolio content
const links = [
      {
        label: "Week1",
        url: "week01/index.html"
      },
      {
        label: "Week2",
        url: "week02/index.html"
      },
      {
        label: "Week3",
        url: "week03/index.html"
      },
      {
        label: "Week4",
        url: "week04/index.html"
      }, 
      {
        label: "Week5",
        url: "week05/index.html"
      }, 
      {
        label: "Challenge1: Todo",
        url: "challenge1/index.html"
      },
      {
        label: "Week7",
        url: "week07/index.html"
      },
      {
        label: "Week8",
        url: "week08/index.html"
      },
      {
        label: "Week9",
        url: "week09/index.html"
      },
      {
      label: "Week10",
        url: "week10/index.html"
      }, 
      {
        label: "Challenge2: My Agenda",
        url: "myagenda/home.html"
      }
      
]

const nav = ( items ) => {
  
  let menu = document.querySelector('#menu') // ol
  
  items.forEach( (item, inx, arr) => {
      let l = document.createElement('li')
      let a = document.createElement('a')
      a.href = item.url 
      a.innerHTML = item.label
      l.appendChild(a)
      menu.appendChild(l)
  })
}

nav( links )

