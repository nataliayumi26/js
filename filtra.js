var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var calçados = document.querySelectorAll(".calçado");

    if (this.value.length > 0) {
        for (var i = 0; i < calçados.length; i++) {
            var calçado = calçados[i];
            var tdtipo = calçados.querySelector(".info-tipo");
            var tipo = tdtipo.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                calçado.classList.add("invisivel");
            } else {
                calçado.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < calçados.length; i++) {
            var calçado = calçados[i];
           calçado.classList.remove("invisivel");
        }
    }
});
