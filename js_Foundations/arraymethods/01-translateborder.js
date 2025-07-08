// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.
function camelize(str) {
    return str
        .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
        .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) =>
                index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

let cameledBackgroundColor = camelize("background-color");
let listStyleImage = camelize("list-style-image");
let WebkitTransition = camelize("-webkit-transition");

console.log(cameledBackgroundColor);
console.log(listStyleImage);
console.log(WebkitTransition);
