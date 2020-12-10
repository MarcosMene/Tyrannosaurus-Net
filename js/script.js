var tamanhotela = screen.width;

if (tamanhotela < 1100) {
    $("#abertura").hide();
    $("body").text("Esse jogo está adaptado apenas para tablets, laptops ou monitores com resolução acima de 1000px. Volte para a tela anterior;");
}
const dino = document.querySelector('.dino'); //seleciona dino
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
let erro;
let velocidade = 0;
let randomcactus = 0;
let totalpulos = 0;
let velocidadePuloDino = 0;
let abertura = "";
let niveljogo;

function validateForm() {


 niveljogo = document.getElementById("nivelform").elements.namedItem('nivel').value;

    if (niveljogo == "") {
        showerro();
        return false;
      }else {

      
if (niveljogo == "basico") {
    velocidade = .5;
    randomcactus = 6000;
    velocidadePuloDino = 70;
}else if (niveljogo == "medio"){
    velocidade = 1;
    randomcactus = 5000;
    velocidadePuloDino = 50;
}else if (niveljogo == "dificil"){
    velocidade = 4;
    randomcactus = 4000;
    velocidadePuloDino = 30;
}else if (niveljogo == "ninja"){
    velocidade = 10;
    randomcactus = 3000;
    velocidadePuloDino = 20;
}

        show();



function handleKeyUp(event) {
    if (event.keyCode === 32) {// codigo da tecla espaco
        if (!isJumping){
           jump();  
        }
    }
}

//funcao jump

function jump() {
    var saltosom=document.getElementById("jumpsom");

    isJumping = true;
    saltosom.play();
    let upInterval = setInterval (() => {
        if (position >= 200) {
            clearInterval(upInterval);     
            
            //descendo
            let downInterval = setInterval(() => {
                if (position <=0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                position -= 20;
                dino.style.bottom = position + 'px';    
                }
               
            }, velocidadePuloDino);
        } else {
            //subindo
        position += 20;
        dino.style.bottom = position + 'px'; 
        }
    }, velocidadePuloDino);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * randomcactus;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval (() => {
        if (cactusPosition < - 60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if (cactusPosition > 100 && cactusPosition < 160 && position < 60) {
            //game over
           dino.remove();
            cactus.remove();
            background.remove();
            clearInterval(leftInterval);
            
           gameover();
             
        }else {
        
            cactusPosition -= velocidade;
            cactus.style.left = cactusPosition + 'px';

            if (cactusPosition <-60 ) {
                totalpulos = totalpulos +1;
                var x =document.getElementById("contagem").innerText = totalpulos;
            }
           

        }
    },velocidade);

    setTimeout(createCactus, randomTime);

   
}

createCactus();

document.addEventListener('keydown', handleKeyUp);//adiciona um evento 'solta tecla'

      }
    }

    function show() {

    abertura = document.getElementById("abertura");
      abertura.remove();

      var pontos = document.getElementById("contador");
      if (pontos.style.display === "none") {
        pontos.style.display = "block";
   
  
      } else {
        pontos.style.display = "none";
      }
        
      }

      function refreshgame() {
  
        location.reload();
      }
      

      
  function showerro() {
    erro = document.getElementById("mensagemerro");
    if (erro.style.display === "none") {
      erro.style.display = "block";
 

    } else {
      erro.style.display = "none";
    }
   mensagemerro();
  }

  function mensagemerro() {
    document.getElementById('botao').innerText = 'Limpar'; 
    document.getElementById("botao").onclick = mudaTexto;
  
  }
  
  function refreshgame() {
    
    location.reload();
  }

 function mudaTexto() {
    document.getElementById('botao').innerText = 'Começar'; 
    location.reload();
 }

 function gameover() {
    
    
    final = document.getElementById("finaldojogo");
    if (final.style.display = "none") {
      final.style.display = "block";
      return;
 }
 }

function bye() {
    document.body.innerHTML = '<h1 class="game-over">Até a próxima</h1>';
}