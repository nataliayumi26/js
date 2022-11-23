var botaoSugerir = document.querySelector("#sugerir-calçado");
botaoSugerir.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-sugerir");

    var calçado = obtemCalçadoDoFormulario(form);

    var erros = validaCalçado(calçado);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaCalçadoNaTabela(cliente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemCalçadoDoFormulario(form) {

    var cliente = {
        tipo: form.tipo.value,
        numeraçaõ: form.numeração.value,
        cor: form.vor.value,
        marca: calculaTamanho(form.tipo.value, form.numeração.value)
    }

    return calçado;
}

function montaTr(calçado) {
    var calçadoTr = document.createElement("tr");
   calçadoTr.classList.add("calçado");

   calçadoTr.appendChild(montaTd(calçado.tipo, "info-nome"));
   calçadoTr.appendChild(montaTd(calçado.numeração, "info-peso"));
  calçadoTr.appendChild(montaTd(calçado.cor, "info-cor"));
  calçadoTr.appendChild(montaTd(calçado.marca, "info-marca"));

    return calçadoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaCalçado(calçado){

    var erros = [];

    if (calçado.nome.length == 0) {
        erros.push("O nome não pode estar em branco");
    }

    if (calçado.peso.length == 0) {
        erros.push("A numeração não pode estar em branco");
    }

    if (calçado.altura.length == 0) {
        erros.push("A altura não pode estar em branco");
    }

    if (!validaTipo(calçado.tipo)) {
        erros.push("Tipo inválido");
    }

    if (!validaNumeraçaõ(calçado.numeração)) {
        erros.push("Numeração inexistente");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaCalçadoNaTabela(calçado) {
    var calçadoTr = montaTr(calçado);
    var tabela = document.querySelector("#tabela-calçado");
    tabela.appendChild(calçadoTr);
}
