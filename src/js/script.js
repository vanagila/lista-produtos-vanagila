const ul = document.querySelector(".containerListaProdutos ul");

const mostrarPreco = document.getElementById("precoTotal");

const carrinho = document.querySelector("#carrinho ul");

//lista
const montarListaProdutos = (listaProdutos) => {
  ul.innerHTML = " ";

  listaProdutos.forEach((produto) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const componentes = document.createElement("ol");
    const botaoCarrinho = document.createElement("button");

    img.src = produto.img;
    img.alt = produto.nome;
    h3.innerText = produto.nome;
    p.innerText = produto.preco;
    span.innerText = produto.secao;
    botaoCarrinho.innerHTML = "Adicionar ao Carrinho";
    botaoCarrinho.addEventListener("click", () => {
      adicionarProdutoAoCarrinho(produto);
    });

    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(componentes);
    li.appendChild(botaoCarrinho);
    ul.appendChild(li);

    for (let counter = 0; counter < produto.componentes.length; counter++) {
      const listaComponentes = document.createElement("li");

      listaComponentes.innerText = produto.componentes[counter];
      componentes.appendChild(listaComponentes);
    }
  });
};

function somaCarrinho(produto) {
  const somaPreco = document.getElementById("precoTotal");
  somaPreco.innerText = parseInt(somaPreco.innerText) + parseInt(produto.preco);
}

//carrinho
function adicionarProdutoAoCarrinho(produto) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const span = document.createElement("span");

  img.src = produto.img;
  img.alt = produto.nome;
  h3.innerText = produto.nome;
  p.innerText = produto.preco;
  p.classList.add("paragrafo");
  span.innerText = produto.secao;

  carrinho.appendChild(li);
  li.appendChild(img);
  li.appendChild(h3);
  li.appendChild(p);
  li.appendChild(span);

  somaCarrinho(produto);
}

//hortifruti
const filtrarPorHortifruti = () => {
  const listaHortifruti = produtos.filter((produto) => {
    return produto.secao === "Hortifruti";
  });

  //preço
  /*const precoHortifruti = listaHortifruti.reduce((soma, produto) => {
    return (soma += produto.preco);
  }, 0);

  mostrarPreco.innerText = precoHortifruti;*/

  montarListaProdutos(listaHortifruti);
};

const botaoMostrarHortifruti = document.querySelector(
  ".estiloGeralBotoes--filtrarHortifruti"
);

botaoMostrarHortifruti.addEventListener("click", filtrarPorHortifruti);

//campo de busca
const filtrarPorBusca = () => {
  let busca = document.querySelector(".campoBuscaPorNome").value;

  const buscaPorNome = produtos.filter((produto) => {
    busca = busca.toLowerCase();
    return (
      produto.nome.toLowerCase() === busca ||
      produto.categoria.toLowerCase() === busca ||
      produto.secao.toLowerCase() === busca
    );
  });

  montarListaProdutos(buscaPorNome);
};

const botaoPorNome = document.querySelector(
  ".estiloGeralBotoes--botaoBuscaPorNome"
);

botaoPorNome.addEventListener("click", filtrarPorBusca);

//mostrar todos
const mostrarTodos = () => {
  const mostrarTodosItens = produtos.filter((produto) => {
    return produto;
  });

  montarListaProdutos(mostrarTodosItens);
};

const botaoMostrarTodos = document.querySelector(
  ".estiloGeralBotoes--mostrarTodos"
);

botaoMostrarTodos.addEventListener("click", mostrarTodos);
