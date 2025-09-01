const container = document.querySelector("#container");
// Grab the first element with id="container" from the DOM

const content = document.createElement("div");
// Create a new <div> in memory and assign it to the variable 'content'
// At this point, it is not yet in the DOM. In memory it looks like: <div></div>

content.classList.add("content");
// Add a class named "content" to the div
// Now in memory it looks like: <div class="content"></div>

content.textContent = "This is the glorious text-content!";
// Add text inside the div
// In memory it looks like: <div class="content">This is the glorious text-content!</div>

container.appendChild(content);
// Append the div as a child of 'container' in the DOM
// Now it is visible on the page, inside <div id="container">
