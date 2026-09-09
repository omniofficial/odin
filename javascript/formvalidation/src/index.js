import "./style.css";
import { validateEmail } from "./modules/validation";

function validateInputs() {
    console.log("Validate inputs ran");
    validateEmail();
}

validateInputs();
