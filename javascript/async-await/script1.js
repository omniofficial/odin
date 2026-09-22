async function loadJson(url) {
    try {
        const response = await fetch(url);

        // if response succeedes
        if (response.status == 200) {
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
        }
    } catch (error) {
        console.log(error);
    }
}

loadJson("https://jsonplaceholder.typicode.com/users/1");
