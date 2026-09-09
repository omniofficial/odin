class Email {
    constructor(input) {
        this.value = input;
    }

    isValid() {
        // Grab the HTML element (email.input) in order to run the validity statement.
        const emailHTMLElement = this.value;

        // Return True or False
        return emailHTMLElement.validity.valid;
    }
}

export { Email };
