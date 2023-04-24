addEventListener("DOMContentLoaded", () =>{
    const tabela = document.createElement('table');
    tabela.id = 'tabela';
    const cabecalho = document.createElement('thead');
    cabecalho.id = "cabecalho";
    const corpo = document.createElement('tbody');
    corpo.id = 'corpo';
    const rodape = document.createElement('tfoot');
    rodape.id = 'rodape';
    const linhaCab = cabecalho.appendChild(document.createElement('tr'));
    linhaCab.appendChild(document.createElement('th')).innerText = 'Descrição';
    linhaCab.appendChild(document.createElement('th')).innerText = 'Estoque';

    tabela.append(cabecalho, corpo, rodape);
    document.body.appendChild(tabela);
    atualizarTabela();
})

document.getElementById('add').addEventListener('click', (event) => {
    event.preventDefault();
    const desc = document.getElementById('descricao').value;
    const est = document.getElementById('estoque').value;

    if(!desc || !est || isNaN(est)){
        alert('Valores inválidos');
    } else{
        let produto = {
            descricao: desc,
            estoque: est
        };
        const produtos = window.localStorage.getItem('produtos') === null ? [] : JSON.parse(window.localStorage.getItem('produtos'));
        produtos.push(produto);
        window.localStorage.setItem('produtos', JSON.stringify(produtos));
        atualizarTabela();
    }
})

const atualizarTabela = () =>{
    document.getElementById('corpo').innerText = '';
    const produtos = JSON.parse(window.localStorage.getItem('produtos'));
    if(produtos.length > 0){
        for(let produto of produtos){
            const linhaCorp = document.getElementById('corpo').appendChild(document.createElement('tr'));
            linhaCorp.appendChild(document.createElement('td')).innerText = produto.descricao;
            linhaCorp.appendChild(document.createElement('td')).innerText = produto.estoque;
        }

        const linhas = document.querySelectorAll('tbody tr');
        for(let linha of linhas){
            linha.addEventListener('click', selecionarCelula);
        }
    }
    atulizarContagem(produtos);
}

const atulizarContagem = (produtos) =>{
    document.getElementById('rodape').innerText = '';
    const linhaRod = document.getElementById('rodape').appendChild(document.createElement('tr'));
    const qtdProd = linhaRod.appendChild(document.createElement('td'));
    if(!produtos || produtos.length == 0){
        qtdProd.innerText = 'Lista de produtos vazia';
    }else{
        const somaProdutos = (cont, contAtual) =>{
            cont += parseInt(contAtual.estoque);
            return cont;
        }
        qtdProd.innerText = 'Quantidade total em estoque: ' + produtos.reduce(somaProdutos, 0);
    }
}


const selecionarCelula = (event) => {
    const linha = event.target.parentElement;
    if(linha.classList.contains('selecionado') && event.target.id !== 'rem'){
        linha.classList.remove('selecionado');
        const btn = document.getElementById('rem');
        linha.removeChild(btn);
    } else{
        linha.classList.add('selecionado');
        const btn = document.createElement('button');
        btn.innerText = 'Remover';
        btn.id = 'rem';
        linha.appendChild(btn);
        btn.onclick = (event) =>{
            const linha = event.target.parentElement;
            const produto = linha.getElementsByTagName('td')[0].textContent;
            removerProduto(produto);
            linha.remove();
        }   
    }
}

const removerProduto = (prod) =>{
    const produtos = JSON.parse(window.localStorage.getItem('produtos'));
    produtos.forEach((produto, i) => {
        if(produto.descricao === prod){
            produtos.splice(i,1);
        }
    });
    window.localStorage.setItem('produtos', JSON.stringify(produtos));
    atualizarTabela();
}