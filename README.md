## README

**Título: Catálogo Interativo de Charutos**

**Descrição:**

Este projeto web oferece um catálogo interativo de charutos, permitindo aos usuários pesquisarem por diferentes países produtores e suas respectivas marcas. Ao digitar o nome de um país ou uma palavra-chave relacionada a charutos, o usuário é apresentado a uma lista de resultados, com informações detalhadas sobre cada país, suas principais marcas e links para mais informações.

**Funcionalidades:**

* **Pesquisa:** Permite ao usuário pesquisar por países produtores de charutos, marcas e palavras-chave relacionadas.
* **Resultados detalhados:** Apresenta informações sobre cada país, incluindo descrição, marcas mais populares e links para os sites oficiais.
* **Interface intuitiva:** A interface do usuário é simples e fácil de navegar.

**Tecnologias Utilizadas:**

* **HTML:** Estrutura da página web.
* **CSS:** Estilização da página.
* **JavaScript:** Lógica de programação para a pesquisa e a exibição dos resultados.

**Estrutura do Projeto:**

* **index.html:** Página principal da aplicação.
* **style.css:** Arquivo de estilos CSS.
* **script.js:** Arquivo JavaScript com a lógica da aplicação.
* **data.js:** Arquivo contendo o array de dados com informações sobre os países e marcas de charutos.

**Como Usar:**

1. **Clonar o repositório:** Clone este repositório para sua máquina local.
2. **Abrir o arquivo index.html:** Abra o arquivo index.html em um navegador web.
3. **Realizar a pesquisa:** Digite o nome de um país, uma marca ou uma palavra-chave no campo de pesquisa e pressione Enter.

**Contribuições:**

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver alguma sugestão de melhoria, por favor, abra um issue ou faça um pull request.

**Base de Dados:**

A base de dados do projeto consiste em um array de objetos JavaScript, onde cada objeto representa um país produtor de charutos. As informações incluídas em cada objeto são:

* **titulo:** Nome do país.
* **descricao:** Descrição detalhada sobre os charutos do país.
* **Marcas:** Lista das principais marcas de charutos do país.
* **links:** Link para o site oficial de uma das principais marcas do país.
* **tags:** Palavras-chave relacionadas ao país e aos seus charutos.

**Exemplo de um objeto da base de dados:**

```javascript
{
    titulo: "Cuba",
    descricao: "Considerado o berço dos charutos premium, Cuba é famosa por seus charutos de sabor intenso e complexo...",
    Marcas: "Cohiba, Montecristo, Romeo y Julieta, Partagas, Trinidad, Ramon Allones",
    links: "[https://www.cohiba.com/](https://www.cohiba.com/)",
    tags: "havana charutos cubanos charutos premium tabaco cubano sabor intenso charutos artesanais cohiba montecristo romeo y julieta partagas trinidad ramon allones charutos lendários tradição charuteira"
}
