function mostrarRes() {
    let nome = document.querySelector('#p1').value;
 
    if (nome.trim() !== '') {
        let resultadoDiv = document.querySelector('#resultado');
        let novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = nome;
 
        // Coloca o novo nome no topo
        resultadoDiv.prepend(novoParagrafo);
 
        // Limpa o input
        document.querySelector('#p1').value = '';
    }
}

