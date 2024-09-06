/*
 * Este arquivo contém a lógica para pesquisar dados e exibir os resultados em uma página HTML.
 */
// Função para pesquisar dados e exibir os resultados
function pesquisar() {

       // Obtém a seção HTML onde os resultados serão exibidos
       let section = document.getElementById("resultados-pesquisa");

       let campoPesquisa = document.getElementById("campo-pesquisa").value   
  
// se campoPesquisa for uma string sem nada
if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma cidade.</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

         // Inicializa uma string vazia para armazenar os resultados HTML
     let resultados = "";
     let titulo = "";
     let descricao = "";
 

    // Itera sobre os dados e cria os elementos HTML
    for (let dado of dados) {
        if (dado.titulo) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
      

  // se titulo includes campoPesquisa
if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

             // Cria um novo elemento div para cada item
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Saiba mais na Wikipédia</a>
        </div>
        ` ;
             }
        }
    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
            }

    // Atualiza o conteúdo da seção HTML com os resultados
    section.innerHTML = resultados;}
        }
