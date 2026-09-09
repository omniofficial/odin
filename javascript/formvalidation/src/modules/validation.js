import { Email } from "./email";

function validateEmail() {
    const emailInput = document.getElementById("email");
    const email = new Email(emailInput);

    // Occurs whenever the user is types / changes the email input
    emailInput.addEventListener("input", (event) => {
        if (email.isValid()) {
            emailInput.setCustomValidity("");
        } else if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity("Expected an email. Error.");
        }
    });
}

export { validateEmail };
