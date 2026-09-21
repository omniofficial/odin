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
