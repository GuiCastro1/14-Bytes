// document.getElementById("menu").addEventListener("click", function () {
//     const navBar = document.getElementById("navbar");
//     const menuButton = document.getElementById("menu");

//     // Alterna a visibilidade do navbar
//     if (navBar.style.display === "block") {
//         navBar.style.display = "none";
//     } else {
//         navBar.style.display = "block";
//     }

//     // Esconde o botão de menu quando o navbar é mostrado
//     menuButton.style.display = "none";
// });

// document.getElementById("Close").addEventListener("click", function () {
//     const navBar = document.getElementById("navbar");
//     const menuButton = document.getElementById("menu");

//     // Esconde o navbar e mostra o botão de menu
//     if (navBar.style.display === "block") {
//         navBar.style.display = "none";
//         menuButton.style.display = "block";
//     }
// });


document.getElementById("BodySizing").addEventListener("resize", function () {
    if (window.innerWidth >= 750) {
        document.getElementById("NavBar").style.display = "block"
    } else {
        document.getElementById("NavBar").style.display = "none"
    }
});
document.getElementById("BodySizing").addEventListener("resize", function () {
    if (window.innerWidth >= 750) {
        document.querySelector(".FirstTitle").style.display = "block"
    } else {
        document.querySelector(".FirstTitle").style.display = "none"
    }
});

document.getElementById("Menu").addEventListener("click", function () {

    if (document.getElementById("NavBar").style.display == "block") {

        document.getElementById("NavBar").style.display = "none"
    } else {
        document.getElementById("NavBar").style.display = "block"
    }
});
document.getElementById("Close").addEventListener("click", function () {
    if (document.getElementById("NavBar").style.display = "block") {
        document.getElementById("NavBar").style.display = "none"
    }
});

let imagens =document.querySelectorAll(".iii")
let imgp =document.querySelector("#ImagemPrincipal")

imagens.forEach((imagem)=>{
    imagem.addEventListener("click", (event)=>{
        imgp.src=event.target.src
    })
})

let imagensMenores = document.querySelectorAll(".imagem-menor");
let imagemPrincipal = document.querySelector("#imagem-principal");
let overlay = document.querySelector("#overlay");
let descricaoTexto = document.querySelector("#descricao-texto");
let link = document.querySelector("#link");
let fecharOverlay = document.querySelector("#fechar-overlay");

imagensMenores.forEach((imagem) => {
    imagem.addEventListener("click", (event) => {
        imagemPrincipal.src = event.target.src;
        descricaoTexto.textContent = event.target.dataset.descricao;
        link.href = event.target.dataset.link;  // Define o link correspondente
        overlay.classList.add("active");
    });
});

fecharOverlay.addEventListener("click", () => {
    overlay.classList.remove("active");
});
