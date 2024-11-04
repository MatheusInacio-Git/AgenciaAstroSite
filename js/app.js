// Função para atualizar o número gradualmente até 52%
window.onload = function() {
    var progressElement = document.getElementById("progress");
    var progressBar = document.getElementById("progressBar");
    var percentage = 0;

    // Função para iniciar o aumento quando o elemento estiver visível
    function startIncrease() {
        var interval = setInterval(function() {
            if (percentage < 52) {
                percentage++;
                progressElement.textContent = percentage + "%";
                progressBar.style.width = percentage + "%";
            } else {
                clearInterval(interval);
            }
        }, 65); // Altere o valor do intervalo para ajustar a velocidade da animação
    }

    // Configurando o observer para observar o elemento
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                startIncrease();
                observer.disconnect(); // Desconectar o observer depois que o elemento estiver visível
            }
        });
    });

    // Observando o elemento
    observer.observe(progressElement);
};

// WHATS

document.addEventListener("scroll", function() {
    var container2 = document.getElementById("container2");
    var link = document.querySelector(".wpp-link");
    var containerRect = container2.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Verifica se o topo do container 2 está dentro da janela visível
    if (containerRect.top >= 0 && containerRect.bottom <= windowHeight) {
      link.style.display = "inline"; // Exibe o link
    } 
});

// MENU 

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
