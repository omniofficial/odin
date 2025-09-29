function setTheme() {
    const root = document.documentElement;

    // If root.className === "dark", then newTheme = "light" etc.
    const newTheme = root.className === "dark" ? "light" : "dark";

    // Assign newTheme to class name.
    root.className = newTheme;

    // Changes the theme name on the page, the text.
    document.querySelector(".theme-name").textContent = newTheme;
}

document.querySelector(".theme-toggle").addEventListener("click", setTheme);
