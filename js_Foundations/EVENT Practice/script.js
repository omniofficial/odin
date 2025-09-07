function alertFunction() {
    alert("GOOD JOB ON CLICKIN ME!");
}

const btn = document.querySelector("#btn");

// Updated method for event listeners
btn.addEventListener("click", alertFunction);

