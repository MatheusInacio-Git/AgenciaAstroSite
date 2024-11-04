window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector(".navbar-burger");
    var menu = document.getElementById("menu");
    var menuLinks = menu.querySelectorAll("a");

    btn.addEventListener("click", function() {
        menu.classList.toggle("open");
    });

    // Adiciona um event listener para fechar o menu quando clicar fora dele
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !btn.contains(event.target) && menu.classList.contains("open")) {
            menu.classList.remove("open");
        }
    });

    // Adiciona event listener para fechar o menu quando um link é clicado
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            menu.classList.remove("open");
        });
    });
});


