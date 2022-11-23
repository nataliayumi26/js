var calçado = document.querySelectorAll(".calçado");

var tabela = document.querySelector("#tabela-calçado");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
