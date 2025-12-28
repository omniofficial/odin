// Constructor review

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // readyet method to convert YES / NO to "Read the book" and "Not read yet"
    this.readyet = function () {
        if (this.read === "YES") {
            return "Read the book";
        } else if (this.read === "NO") {
            return "Not read yet";
        } else {
            return "Unknown status";
        }
    };

    // info method
    this.info = function () {
        return (
            this.title +
            " by " +
            this.author +
            ", " +
            this.pages +
            " pages, " +
            this.readyet()
        );
    };
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "NO");
theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

console.log(theHobbit.info());
