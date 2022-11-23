var titulo = document.querySelector(".titulo");
titulo.textContent = "Shoe Bazar Yumi";

var calçados = document.querySelectorAll(".cliente");

for (var i = 0; i < calçados.length; i++) {

    var cliente = clientes[i];

    var tdP = calçado.querySelector(".info-tipo");
    var tipo = tdTipo.textContent;

    var tdNumeração = calçado.querySelector(".info-numeração");
    var numeração = tdNúmero.textContent;

    var tdTipo = calçado.querySelector(".info-Tipo");

    var tipoEhValido = validaTipo(tipo);
    var numeraçãoEhValida = validaNumeração(numeração);

    if (!tipoEhValido) {
        console.log("Tipo inválido!");
        tipoEhValido = false;
        tdNumeração.textContent = "Numeração inválida";
        calçado.classList.add("calçado-invalido");
    }

    if (!corEhValida) {
        console.log("Cor inválida!");
        CorEhValida = false;
        tdCor.textContent = "Cor inválida";
        calçado.classList.add("cliente-invalido");
    }

    if (tipoEhValido && numeraçãoEhValida) {
        var marca = calculaMarca(tipo, numeração);
        tdMarca.textContent = marca;
    }
}

function calculaMarca(tipo, numeração) {
    var marca = 0;
    marca = tipo / (numeração * numeração);

    return marca.toFixed(2);
}

function validaTipo(tipo) {

    if (tipo >= 0 && tipo <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaNumeração(numeração) {

    if (numeração >= 0 && numeração <= 3.00) {
        return true;
    } else {
        return false;
    }
}
