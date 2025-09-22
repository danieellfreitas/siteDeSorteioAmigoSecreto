const nomes = []; // Cria a variável nomes como um array vazio para armazenar os nomes.

const adicionarEnter = document.getElementById('amigo'); // Seleciona o campo de entrada de texto com o id "amigo".

function adicionarAmigo(){ //Declara a função adicionarAmigo
    let nome = document.getElementById("amigo").value; //Captura o valor digitado no campo HTML com id="amigo" e guarda na variável nome.
    if(nome==""||nome==" "){ //Verifica se nome está vazio ou contém apenas um espaço.
        alert("Erro: Não é possível armazenar um nome vazio. O jogo será reiniciado!");
        location.reload(); //Se for verdade, mostra um alerta de erro e recarrega a página.
    }
    else{
    nomes.push(nome); //Caso contrário, adiciona nome ao array nomes
    const lista = document.getElementById("listaAmigos"); //Seleciona o elemento com id="listaAmigos"
    lista.innerHTML = `Amigos adicionados: ${nomes.join(", ")}`; //Atualiza o conteúdo desse elemento mostrando todos os nomes adicionados.
    }
    
}

function sortearAmigo(){ //Declara a função sortearAmigo.
    if(nomes.length==1){ //Verifica se existe apenas 1 nome no array.
        alert("Há apenas um nome na lista de sorteio, por favor inserir mais de 1 nome")
        location.reload(); //Se sim, mostra um alerta e recarrega a página.
    }
    const indiceAleatorio = Math.floor(Math.random() * nomes.length); //Gera um índice aleatório baseado no tamanho do array nomes.
    const amigoSorteado = document.getElementById("resultado"); //Seleciona o elemento com id="resultado"
    amigoSorteado.innerHTML = `O amigo sorteado foi: ${nomes[indiceAleatorio]}`; //Atualiza o conteúdo desse elemento mostrando o nome sorteado.

    const botao = document.getElementsByClassName("button-draw")[0]; //Seleciona o primeiro elemento com a classe button-draw.

    botao.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícone para sortear"> Reiniciar`; //Troca o conteúdo do botão, exibindo um ícone e o texto “Reiniciar”.

    botao.onclick = function() {
        location.reload(); // Define que, ao clicar nesse botão, a página será recarregada.
    };
}

adicionarEnter.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    adicionarAmigo();
  }
});