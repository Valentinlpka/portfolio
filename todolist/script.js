const input = document.getElementById("texte");
const validate = document.getElementById("valider");
const todolist = document.getElementById("todolist");

validate.addEventListener("click", (event) => {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }
  if (input.value != ''  ) {
    taskList.push(input.value);
    localStorage.setItem("localItem", JSON.stringify(taskList));
    showlist();
    event.preventDefault();
  
    input.value = "";
  } else {
    alert('Il faut remplir le champ texte')
  }

});

function showlist() {
  let outPut = "";
  let taskListShow = document.getElementById("todolist");
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }
  taskList.forEach((data, index) => {
    outPut += `<div class="list">
    <p>${data}</p>
    <button class="delete" onClick="deleteItem(${index})">X</button>
    </div>`;
  });
  taskListShow.innerHTML = outPut;
}
showlist()

function deleteItem(index) {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  taskList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  showlist();

}


function updateItem() {
let valider = document.getElementsByClassName("validate");
var i;
for (i = 0; i < valider.length; i++) {
  valider[i].onclick = function () {
    var div = this.parentElement;
    console.log(this.parentElement);
    div.style.color = "white";
    div.classList.toggle("souligne");
  };
}
}