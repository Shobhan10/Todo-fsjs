const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");

addButton.addEventListener("click", () => {
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
});
