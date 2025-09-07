const list = document.querySelector("ul");

const input = document.querySelector("input");

const btn = document.querySelector("button");

function handleClick() {
    // After the click, store the current input value into a variable
    const itemText = input.value;
    // Empty input value
    input.value = "";

    // Create three elements:
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deletebtn = document.createElement("button");

    listItem.appendChild(span);
    listItem.appendChild(deletebtn);

    span.textContent = itemText;
    deletebtn.textContent = "Delete";
    list.appendChild(listItem);

    // Add an event listener for the delete button
    deletebtn.addEventListener("click", () => {
        listItem.remove();
    });
}

btn.addEventListener("click", handleClick);
