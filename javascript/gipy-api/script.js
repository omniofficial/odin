// Feature 1 Logic
const randomBtn = document.querySelector("#image-btn");
randomBtn.addEventListener("click", (e) => {
    const img = document.querySelector("#random-img");
    fetch(
        "https://api.giphy.com/v1/gifs/random?api_key=EkJSRJwEow7YlX30KMffsIXz7xYCGMS7",
    )
        .then(function (response) {
            return response.json();
        })

        .then(function (response) {
            img.src = response.data.images.original.url;
        });
});

// Feature 2 Logic
const searchBar = document.querySelector("#searchBar");
const submitBtn = document.querySelector("#submit-btn");
const searchedImagesDiv = document.querySelector("#searched-img-container");

submitBtn.addEventListener("click", () => {
    searchedImagesDiv.innerHTML = "";
    const searchTerm = searchBar.value;

    fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=EkJSRJwEow7YlX30KMffsIXz7xYCGMS7&q=${searchTerm}`,
    )
        .then(function (response) {
            return response.json();
        })

        .then(function (response) {
            console.log(response);
            // Loop through full response array. Dynamically create an image, link the src to that image, and append it.

            for (let i = 0; i < response.data.length; i++) {
                const img = document.createElement("img");
                img.src = response.data[i].images.original.url;
                searchedImagesDiv.appendChild(img);
            }
        })

        .catch(function (error) {
            console.log(error);
        });
});
