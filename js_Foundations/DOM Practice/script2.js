const container = document.querySelector("#container");
// Grab the first element with id="container" from the DOM

const redParagraph = document.createElement("p");
redParagraph.classList.add("red-text");
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);

const blueHeader = document.createElement("h3");
blueHeader.classList.add("blue-text");
blueHeader.textContent = "I'm a blue h3!";
container.appendChild(blueHeader);

const contentDiv = document.createElement("div");
contentDiv.classList.add("content");

const divHeader = document.createElement("h1");
divHeader.textContent = "I'm in a div";

const divParagraph = document.createElement("p");
divParagraph.textContent = "ME TOO!";

contentDiv.appendChild(divHeader);
contentDiv.appendChild(divParagraph);
container.appendChild(contentDiv);
