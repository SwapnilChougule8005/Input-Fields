const input = document.querySelector(".input-field");
const inputIcon = document.querySelector(".input-icon");

inputIcon.addEventListener("click", (e) => {
    e.preventDefault();

    const isPassword = input.getAttribute("type") === "password";

    inputIcon.setAttribute(
        "src",
        isPassword ? "eye-off.svg" : "eye.svg" 
    );
    input.setAttribute(
        "type",
        isPassword ? "text" : "password"
    );
});