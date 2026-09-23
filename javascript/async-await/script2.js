// Receives a response
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = "HttpError";
        this.response = response;
    }
}

async function loadJson(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new HttpError(response);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(`Type of error: ${error.name}`);
        console.log("Error response:", error.response);

        throw error; // Throw the error upward back to demoGithubUser. Will cause the catch statement to fire.
    }
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
    while (true) {
        let name = prompt("Enter a name?", "iliakan");

        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            console.log("User found!");
            console.log(user);
            alert(`Full name: ${user.name}.`);
            break;
        } catch (error) {
            if (error instanceof HttpError && error.response.status == 404) {
                console.log("Error thrown. User not found. Please try again.");
            }
        }
    }
}

demoGithubUser();
