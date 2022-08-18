const email = document.getElementById("floatingInput");

email.addEventListener("input", () => {
    if(email.validty.typeMismatch) {
        email.setCustomValidity("Por favor rellenear todos los campos correctamente.");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
});