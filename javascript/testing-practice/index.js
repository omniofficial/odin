function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
    console.log("String reversed");
    let reversedString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        character = string[i];
        reversedString += character;
    }

    return reversedString;
}

export { capitalize, reverseString };
