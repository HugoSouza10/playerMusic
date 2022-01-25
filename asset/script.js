let btn_mode = document.querySelector('.btn_mode');
let moldeCover = document.querySelector('.moldeCover');
let legend_music = document.querySelector('.legend_music');
let left_progress = document.querySelector('.left_progress');
let btnRadom = document.querySelector('.controll #radom'); //Selecionei todos os botões
let btnPrevbtn = document.querySelector('.controll #prevbtn');
let btnPlaypausebtn = document.querySelector('.controll #playpausebtn');
let btnNextbtn = document.querySelector('.controll #nextbtn');
let btnRepeat = document.querySelector('.controll #repeat');

let html = document.querySelector('html'); //Selecionando o html para Modificar o mode
let darkMode = true;
let currentMusic = 0; //Aqui serve para a gente saber em qual música está
let pause = true;
//Selecionamos a tag audio
let musicAudio = document.querySelector('#musicPlay');



//Criando função para iniciar a música no momento do carregamento
function startMusic(){
      
       //Verificando se existe alguma música para rederizar
       if(currentMusic != -1){
              let musicPlaying = toPullMusic(currentMusic);

              //Rederizando html
              legend_music.querySelector('h4').innerHTML = musicPlaying.nameMusic;
              legend_music.querySelector('h5').innerHTML = musicPlaying.author;
              moldeCover.querySelector('img').setAttribute('src', `${musicPlaying.photo[0].url}`); 

       }

      
}

startMusic();


//Função para retornar a música que está procurando
function toPullMusic(current){
       return playList[current];
}




//Adicionando evento de play
btnPlaypausebtn.addEventListener('click',()=>{

        //Verificando se a música está pausada ou não
        if(pause){
              playMusic();
              document.querySelector('#playpausebtn img').src = './img/pause.png'; //Trocando ícone de play para pause
              console.log("Play");
              pause = false;
              
       }else{
              playMusic();
              document.querySelector('#playpausebtn img').src = './img/play-icone.png';
              musicAudio.pause();
              pause = true;
       }

});


//Função para tocar a música
function playMusic(){
       musicAudio.src = `${playList[currentMusic].music[0].url}`;
       musicAudio.play();
       
}

  



//Voltar música
btnPrevbtn.addEventListener('click',()=>{

        //Verificando se está na primeiro música, caso volte, então voltaremos para ultima
        if(currentMusic === 0){
              currentMusic = playList.length-1; //Pegando a ultima música da playList
              startMusic();
              playMusic();
              document.querySelector('#playpausebtn img').src = './img/pause.png'; //Trocando ícone de play para pause
        }else{
              currentMusic = currentMusic-1; 
              startMusic();
              playMusic();
              document.querySelector('#playpausebtn img').src = './img/pause.png'; //Trocando ícone de play para pause
        }
      
      
});


//Função próxima música
btnNextbtn.addEventListener('click',()=>{

       //Verificamos se estamos na ultima música. Caso esteja, voltamos para a primeira
       if(currentMusic === playList.length-1){
              currentMusic = 0;
              startMusic();
              playMusic();
              document.querySelector('#playpausebtn img').src = './img/pause.png'; //Trocando ícone de play para pause
        }else{
              currentMusic++; 
              startMusic();
              playMusic();
              document.querySelector('#playpausebtn img').src = './img/pause.png'; //Trocando ícone de play para pause
        }

});


//Função repetir

btnRepeat.addEventListener('click',()=>{
       console.log('Repetir');
});




//função modo dark

//Opção de Mode
const themes = {
       light: {
         background: 'white',
         text: '#9c9c9c',
         colorShadow: '-4px -2px 4px 0px #ffffff, 4px 2px 6px 0 #dfe4ea',
         
       },
       dark: {
         background: 'black',
         text: '#9c9c9c',
         colorShadow: 'none',
         
       }
};



/*FUNÇÃO PARA MODIFICAR O MODE */

function setTheme(newTheme) {
       const themeColors = themes[newTheme]; // Seleciona o tema para aplicar
     
       Object.keys(themeColors).map(function(key) {
         html.style.setProperty(`--${key}`, themeColors[key]); // Altera as variáveis no css
       });
}



//Click para escolher o modo
btn_mode.addEventListener('click',()=>{
       if(darkMode === true){
              setTheme('dark');
              darkMode = false;
          }else{
              setTheme('light');
              darkMode = true;
          }
         // setTheme(darkMode ? 'dark': 'light');
});

      














