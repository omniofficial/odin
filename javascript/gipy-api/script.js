const img = document.querySelector("img");

fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=EkJSRJwEow7YlX30KMffsIXz7xYCGMS7&s=cats&rating=g",
)
    .then(function (response) {
        return response.json();
    })

    .then(function (response) {
        img.src = response.data.images.original.url;
    });
