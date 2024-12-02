document.getElementById("menu").addEventListener("click", function () {
    const navBar = document.getElementById("navbar");
    const menuButton = document.getElementById("menu");

    // Alterna a visibilidade do navbar
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
    }

    // Esconde o botão de menu quando o navbar é mostrado
    menuButton.style.display = "none";
});

document.getElementById("Close").addEventListener("click", function () {
    const navBar = document.getElementById("navbar");
    const menuButton = document.getElementById("menu");

    // Esconde o navbar e mostra o botão de menu
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
        menuButton.style.display = "block";
    }
});


