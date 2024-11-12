function montrasmsboasvindas() {
    const popup = document.getElementById("welcome-popup");
popup.style.display = "block";
setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => {
        popup.style.display = "none";
    }, 500);
}, 3000);
}
document.addEventListener("DOMContentLoaded", function()  {
    mostrasmsboasvindas();
});