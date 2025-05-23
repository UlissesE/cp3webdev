let inputNome = document.getElementById('nome');
let inputPreco = document.getElementById('preco');
let inputCategoria = document.getElementById('categoria');
let btnEnviar = document.getElementById('btnEnviar');
let produtoInteiro = document.getElementById('produto');
let mensagem = document.getElementById('mensagem');
let form = document.getElementById('formulario');

btnEnviar.addEventListener('click', function clicar(event) {
    event.preventDefault()

    let nome = inputNome.value;
    let preco = inputPreco.value;
    let categoria = inputCategoria.value;
    
    preco = Math.round(preco * 100) / 100;
    preco = preco.toFixed(2);

    if (preco < 0) {
        mensagem.textContent = 'Preço Inválido';
        return
    }
    
    const boxItem = document.createElement('div')

    boxItem.innerHTML = `
    <p> Produto: ${nome} - R$${preco} - Categoria: ${categoria}</p>
    `

    produtoInteiro.append(boxItem);

    if (categoria === 'Alimentos') {
        boxItem.style.backgroundColor = "#EDBE00FF"
    }

    if (categoria === 'Tecnologia') {
        boxItem.style.fontWeight = 'bold'
    }

    mensagem.textContent = 'Sucesso!'

    form.reset();
})

