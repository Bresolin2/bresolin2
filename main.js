fetch('data/produtos.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    data.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h4>${prod.nome}</h4><p>R$ ${prod.preco.toFixed(2)}</p><button>Adicionar ao Carrinho</button>`;
      list.appendChild(card);
    });
  });
