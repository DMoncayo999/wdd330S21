// add x "close" button in each list item
const nodeList = document.getElementsByTagName("li");
for (let i = 0; i < nodeList.length; i++) {
     const span = document.createElement("span");
     const txt = document.createTextNode("\u2715");
     span.className = "closeBtn";
     span.appendChild(txt);
     nodeList[i].appendChild(span);
   }

//Remove task from list 
const closeList = document.getElementsByClassName("closeBtn");
for (let i = 0; i < closeList.length; i++) {
     closeList[i].onclick = function() {
     const div = this.parentElement;
     div.style.display = "none";
   }
 }

//Check mark for complete task 
const todoList = document.querySelector("ul");
todoList.addEventListener( 'click', function(e) {
     // console.log( "Event Object passed::", e )
     if ( e.target.tagName === 'LI') {
     e.target.classList.toggle("checkMark");
    }
  }, false);


//filtering complete, incomplete and all tasks
function showComplete() {
     const liList = document.getElementsByTagName("li");
     for (let i= 0; i < liList.length; i++) {
         if (liList[i].className !== "checkMark") {
                liList[i].style.display = "none"
         }  else {
                liList[i].style.display = "block"
         }    
     }
}

function hideComplete() {
     const mark = document.getElementsByClassName('checkMark');
     var i;
     for (i = 0; i < mark.length; i++) {
         mark[i].style.display = "none";
     }
}

function showAll() {
     const liList = document.getElementsByTagName("li");
     for(let i=0; i<liList.length; i++)
        liList[i].style.display = "block"
}

//Create new task when click add button 
function newTask() {
      const li = document.createElement("li");
      const addValue = document.getElementById("taskInput").value;
      const task = document.createTextNode(addValue);
      li.appendChild(task);
      if (addValue === '') {
        alert("Nothing to do today?");
      } else {
        document.getElementById("listTask").appendChild(li);
      }
      document.getElementById("taskInput").value = "";
     
      const span = document.createElement("span");
      var txt = document.createTextNode("\u2715");
      span.className = "closeBtn";
      span.appendChild(txt);
      li.appendChild(span);
    
      for (i = 0; i < closeList.length; i++) {
        closeList[i].onclick = function() {
          const div = this.parentElement;
          div.style.display = "none";
        }
      }
   }