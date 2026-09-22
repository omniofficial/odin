const img = document.querySelector("img");

async function getCats() {
    try {
        const response = await fetch(
            "https://api.giphy.com/v1/gifs/translate?api_key=EkJSRJwEow7YlX30KMffsIXz7xYCGMS7&s=cats",
        );
        const catData = await response.json();
        img.src = catData.data.images.original.url;
    } catch (error) {
        console.error(error);
    }
}
getCats();
