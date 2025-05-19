function verificaPalavra(){
    const palavra = document.getElementById("palavra").value.toLowerCase()
    const palavraCorreta = "arroz doce"
 
    if(palavra == palavraCorreta){
        window.location.href = "correto.html"
 
    }else{
        window.location.href ="errado.html"
    }
}
 