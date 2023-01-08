const input = document.getElementById('texte');
const validate = document.getElementById('valider');
const todolist = document.getElementById('todolist');

validate.addEventListener('click', () => {

    // Create an "li" node:
const div = document.createElement("div");
div.classList.add("list");
// Create a text node:

const p = document.createElement("p");
p.textContent = input.value;



const button2 = document.createElement("button");
button2.classList.add("delete");
button2.textContent = 'X';

const button1 = document.createElement("button");
button1.classList.add("validate");
button1.textContent = 'V';


// Append the text node to the "li" node:
div.appendChild(p);
div.appendChild(button1);
div.appendChild(button2);

// Append the "li" node to the list:
document.getElementById("todolist").appendChild(div);

input.value ='' 

let supp = document.getElementsByClassName("delete")

var i;
for (i = 0; i < supp.length; i++) {
  supp[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

let valider = document.getElementsByClassName("validate")

var i;
for (i = 0; i < valider.length; i++) {
  valider[i].onclick = function() {
    var div = this.parentElement;
    div.style.color = "white";
    div.classList.toggle("souligne")
  }
}

})

