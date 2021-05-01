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
        label: "Challenge1: Todo",
        url: "challenge1/index.html"
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

