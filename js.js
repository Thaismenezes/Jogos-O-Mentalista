const btn = document.getElementById('enviar');
const chuteInput = document.getElementById('chute');
var numeroSecreto = 0;
var contador = 0;


geraNumero();

btn.addEventListener('click', (event) =>{
    event.preventDefault();
    const chuteValue = chuteInput.value;
    verificaChute(chuteValue);
 
})

function geraNumero(){
    numeroSecreto = parseInt(Math.random() * 1001);
    console.log(numeroSecreto);
}

function verificaChute(chute){
     
    if (chute === "" || chute > 1000){
    alert("Número Inválido!");
            return;
    } 
       
    if (numeroSecreto == chute){
            alert("Você acertou!!!!!!!");
            reiniciaJogo();
    } else if (numeroSecreto < chute) {
            alert("Você errou! O número secreto é menor!");
    } else if (numeroSecreto > chute) {
            alert("Você errou! O número secreto é maior!")
    }

    contador ++;

    if (contador > 0){
        alert("Você jogou " + contador + " vezes!");
        chuteInput.value = "";
    }
    
    if (contador >= 10){
        alert("Suas tentativas acabaram, recarregue a página!");
        reiniciaJogo();
    }
 
}

function reiniciaJogo(){
    contador = 0;
    geraNumero();
}

