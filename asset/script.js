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




//Criando função para iniciar a música no momento do carregamento
function startMusic(){
       let musicPlaying = playList[currentMusic];
       console.log('Inicializando!');


       //Rederizando html
       legend_music.querySelector('h4').innerHTML = musicPlaying.nameMusic;
       legend_music.querySelector('h5').innerHTML = musicPlaying.author;
       moldeCover.querySelector('img').setAttribute('src', `${musicPlaying.photo[0].url}`);

}

startMusic();


//Criando eventos de click em todos os botões.
btnRadom.addEventListener('click',()=>{
       console.log('Radonico');
});


btnPrevbtn.addEventListener('click',()=>{
       console.log('Anterior');
});


btnPlaypausebtn.addEventListener('click',()=>{
       console.log('Play');
});


btnNextbtn.addEventListener('click',()=>{
       console.log('Próximo');
});

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

      









/*FUNÇÃO DARK MODE

https://evertonstrack.com.br/como-implementar-dark-mode/


O QUE APRENDEMOS?

setProperty: sERVE PARA SETAR UMA PROPRIEDADE CSS

*/






