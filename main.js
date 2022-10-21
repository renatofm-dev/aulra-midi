function tocaSom(seletorAudio) {

    document.querySelector(seletorAudio).play();   

    const elemento = document.querySelector(seletorAudio);

    /*if(elemento ===null) {
        alert('elemento nao encontrado')
    }*/

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        alert('elemento nao encontrado')
    }
}

//é  importante a gente referenciar tudo aquilo que seja CONSTANTE 
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto estrutura de repetição dependente de uma variavel externa (contador)
/*while(contador < listaDeTeclas.length) {
        //classList: instrução para acessar a lista de classes do nosso contador 
        //sendo 1 a classe a ser retornada
    const tecla = listaDeTeclas[contador];    
    const instrumento = tecla.classList[1];
        //teremos que atribuir um texto dinamico capaz de satisfazer a id de audio
        //sendo ela #som_instrumento (instrumento será nosso texto dinamico)
        //${} tamplate string: 
    const idAudio = `#som_${instrumento}`;
        
    listaDeTeclas [contador].onclick = function() {
        tocaSom(idAudio)
    };

    contador++;
}
    //console.log(contador)*/
    //for: maneira mais pratica do laço while sendo a estrutura dele = for(variavel; condição; inremento)
    for(let contador = 0; contador < listaDeTeclas.length; contador++) {
        const tecla = listaDeTeclas[contador];    
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`;

        tecla.onclick = function() {
            tocaSom(idAudio)
        };

        tecla.onkeydown = function(evento) {
            
            //condição SE: estrutura condicional
            if (evento.code === 'Space'|| evento.code === 'Enter') {
                tecla.classList.add('ativa');
            }
        }

        tecla.onkeyup = function() {
            tecla.classList.remove('ativa');
        }
    }
