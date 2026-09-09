import { Email } from "./email";
const emailError = document.querySelector("#email + span.error");

function validateEmail() {
    // DOM Input Element
    const emailInput = document.getElementById("email");

    // Email Object
    const email = new Email(emailInput);

    // Occurs whenever the user is types / changes the email input
    emailInput.addEventListener("input", (event) => {
        // Clear the previous custom validity before checking validity.valid.
        // Otherwise, the old custom error keeps validity.valid false
        // even after the input becomes valid.
        emailInput.setCustomValidity("");

        // Check if validity for email is valid.
        if (email.isValid()) {
            // Set to no error content (will be shown on DOM)
            emailError.textContent = "";

            // Validity will be empty. Evaluates to TRUE.
            emailInput.setCustomValidity("");
        } else {
            showEmailError(email, emailInput);
        }
        console.log(emailInput.value);
        console.log(emailInput.validity.valid);
        console.log(emailInput.validationMessage);
    });
}

function showEmailError(email, emailInput) {
    if (emailInput.validity.valueMissing) {
        const errorMessage = "Please enter an email address.";

        // Give browser the error
        emailInput.setCustomValidity(errorMessage);

        // Give user the error
        emailError.textContent = errorMessage;
    } else if (emailInput.validity.typeMismatch) {
        const errorMessage = "Input is not an email.";

        // Give browser the error
        emailInput.setCustomValidity(errorMessage);

        // Give user the error
        emailError.textContent = errorMessage;
    }
}

export { validateEmail };
