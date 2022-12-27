const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");
const inputDiv = document.querySelector(".input_div");

// const addEditButton = document.createElement("button");
// addEditButton.classList.add("addEditButton");
// addEditButton.textContent = "EDIT";
// inputDiv.appendChild(addEditButton);
// addEditButton.style.display = "none";

const previousTask = JSON.parse(localStorage.getItem("myTodo"));

if (!previousTask) {
  myTodo = [];
} else {
  myTodo = previousTask;
}

showTodo();

addButton.addEventListener("click", createTodo);

function createTodo() {
  let input = document.querySelector(".input").value;

  if (input) {
    myTodo.push(input.trim());
  }

  localStorage.setItem("myTodo", JSON.stringify(myTodo));

  document.querySelector(".input").value = "";

  showTodo();
}

function showTodo() {
  let todoEl = "";

  myTodo.forEach((todo) => {
    todoEl += `
        <div class="item">
          <div class="item_input">${todo}</div>
          <button class="editButton">EDIT</button>
          <button class="deleteButton">DELETE</button>
        </div>
    `;
  });

  container.innerHTML = todoEl;
}
