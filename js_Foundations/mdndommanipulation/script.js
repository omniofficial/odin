// Adding link to clickable link
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

// Adding a paragraph section and appending it to the DOM
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

// Adding a text node
const text = document.createTextNode(
    " - the premier source for web development knowledge."
);

const linkPara = document.querySelector("a");
linkPara.appendChild(text);

para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";
