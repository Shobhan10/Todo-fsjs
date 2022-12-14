const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");
const inputDiv = document.querySelector(".input_div");

const addEditButton = document.createElement("button");
addEditButton.classList.add("addEditButton");
addEditButton.textContent = "EDIT";
inputDiv.appendChild(addEditButton);
addEditButton.style.display = "none";

function createTodo() {
  let input = document.querySelector(".input").value;

  if (input) {
    const item = document.createElement("div");
    item.classList.add("item");
    container.append(item);

    const itemInput = document.createElement("div");
    itemInput.classList.add("item_input");
    itemInput.textContent = input;
    item.append(itemInput);

    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.textContent = "EDIT";
    item.append(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "DELETE";
    item.append(deleteButton);

    document.querySelector(".input").value = "";
  }
  const todos = document.querySelectorAll(".item");
  console.log(todos);

  // for (let todo = 0; todo < todos.length; todo++) {
  //   todos[todo].addEventListener("click", () => console.log("clicked"));
  // }

  const editButton = document.querySelectorAll(".editButton");
  const itemInput = document.querySelectorAll(".item_input");

  for (let todo = 0; todo < todos.length; todo++) {
    editButton[todo].addEventListener("click", () => {
      document.querySelector(".input").value = itemInput[todo].innerText;

      addButton.style.display = "none";

      addEditButton.style.display = "block";

      addEditButton.addEventListener("click", () => {
        itemInput[todo].innerText = document.querySelector(".input").value;
        addEditButton.style.display = "none";
        addButton.style.display = "block";
        document.querySelector(".input").value = "";
      });
    });
  }
}

addButton.addEventListener("click", createTodo);
