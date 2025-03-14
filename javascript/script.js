let carrinho = [];
let total = 0;

function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('itensCarrinho');
    const totalCarrinho = document.getElementById('totalCarrinho');

    carrinhoLista.innerHTML = '';
    total = 0;

    carrinho.forEach(item => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoLista.appendChild(itemLista);
        total += item.preco;
    });

    totalCarrinho.textContent = total.toFixed(2);
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Compra finalizada com sucesso!');
        carrinho = [];
        atualizarCarrinho();
    }
}