function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "Você não digitou um argumento de pesquisa";
        return;
    }

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    campoPesquisa = campoPesquisa.toLowerCase();

    // Itera sobre cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // se título inclui campoPesquisa então cria o elemento html correspondente
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p><strong>Marcas famosas</strong>: ${dado.Marcas}</p>
                    <a href="${dado.links}" target="_blank">Visite uma marca famosa de charuto desse país</a>
                </div>
            `;
        }
    }
    if(!resultados) {
        resultados = "<p>nada foi encontrado</p>"
    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}