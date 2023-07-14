const form = document.querySelector('form');
let linhas = '';
const contato = [];
const numero = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    numeroContato();
});

function adicionaLinha() {
    const nomeContato = document.getElementById('name-contact');
    const numeroContato = document.getElementById('number-contact');

    if (contato.includes(nomeContato.value) || numero.includes(numeroContato.value)) {
        alert(`O contato já foi salvo`);
    } else {
        contato.push(nomeContato.value);
        numero.push(numeroContato.value);

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    nomeContato.value = '';
    numeroContato.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');

    corpoTabela.innerHTML = linhas;
}

function numeroContato() {
    const numero = document.getElementById('numberContact');
    let numcontato = contato.length;

    if (numcontato < 10) numcontato = '0' + numcontato;

    numero.innerHTML = numcontato;
}




