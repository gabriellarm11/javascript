const btnAdicionar = document.querySelector('button.adicionar');
const btnRemover = document.querySelector('button.remover');
const box = document.querySelector('.box1');
 
btnAdicionar.addEventListener('click', (e) => {
    box.classList.add('estiloAtivo');
 
   
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('ativo'));
 
    e.target.classList.add('ativo');
  });
 
  btnRemover.addEventListener('click', (e) => {
    box.classList.remove('estiloAtivo');
 
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('ativo'));
   
    e.target.classList.add('ativo');
  });