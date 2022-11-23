var botaoAdicionar = document.querySelector("#buscar-calçado");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-calçacos.herokuapp.com/calçados");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var calçados = JSON.parse(resposta);

            calçados.forEach(function(calçado) {
                adicionaClienteNaTabela(calçado);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
