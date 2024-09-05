/*
 * Este arquivo contém a lógica para pesquisar dados e exibir os resultados em uma página HTML.
 */

// Variável global para armazenar os dados da pesquisa
let dados = [
    // ... seus dados aqui ...
];

// Função para pesquisar dados e exibir os resultados
function pesquisar() {
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Itera sobre os dados e cria os elementos HTML
    for (let dado of dados) {
        // Cria um novo elemento div para cada item
        resultados += `<div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Saiba mais na Wikipédia</a>
        </div>`;
    }

    // Atualiza o conteúdo da seção HTML com os resultados
    section.innerHTML = resultados;
}


