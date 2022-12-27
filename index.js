const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");
const inputDiv = document.querySelector(".input_div");
const inputEl = document.querySelector(".input");

const addEditButton = document.createElement("button");
addEditButton.classList.add("addEditButton");
addEditButton.textContent = "EDIT";
inputDiv.appendChild(addEditButton);
addEditButton.style.display = "none";

const previousTask = JSON.parse(localStorage.getItem("myTodo"));
if (!previousTask) {
  myTodo = [];
} else {
  myTodo = previousTask;
}

showTodo();

addButton.addEventListener("click", createTodo);

function createTodo() {
  let input = inputEl.value.trim();

  if (input) {
    myTodo.push(input);
  }

  localStorage.setItem("myTodo", JSON.stringify(myTodo));

  inputEl.value = "";

  showTodo();
}

function showTodo() {
  let todoEl = "";

  myTodo.forEach((todo, index) => {
    todoEl += `
        <div class="item">
          <div class="item_input">${todo}</div>
          <button class="editButton" onClick="editTodo(${index})">EDIT</button>
          <button class="deleteButton">DELETE</button>
        </div>
    `;
  });

  container.innerHTML = todoEl;
}

let indexVal;

function editTodo(index) {
  inputEl.value = myTodo[index];
  indexVal = index;
  addButton.style.display = "none";
  addEditButton.style.display = "block";
}

addEditButton.addEventListener("click", () => {
  let input = inputEl.value.trim();

  if (input) {
    myTodo[indexVal] = input;
  }

  addEditButton.style.display = "none";
  addButton.style.display = "block";
  inputEl.value = "";

  localStorage.setItem("myTodo", JSON.stringify(myTodo));
  showTodo();
});
