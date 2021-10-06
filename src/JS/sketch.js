let imagenInicio;
let imagenFondo;
let imagenPiedras;
let imagenPersonaje;
let cancionRecord;
let cancionJuego;
let estadoJuego = false; // 0 = Pantalla de inicio, 1 = juego activo
let record = 0;
let recordAnterior = 0;
let marcador = 0;
let movimentoLateral = 0;
let salto = 310;
let validacionSubir = false; 
let validacionBajar = false; 
let wx = [600,900];
let yaJugo = false;


 

function preload() {
    imagenFondo = loadImage('https://i.ibb.co/nmkBYvs/Background.jpg');
    imagenPersonaje = loadImage('https://i.ibb.co/H7pyGRc/Caballero.gif');
    imagenPiedras = loadImage('https://i.ibb.co/cCkZ43Y/Piedra.png');
    cancionJuego = loadSound('/src/sonidos/Musica.mp3');
}
function setup() {
// put setup code here
    createCanvas(1500,750);
    textSize(40);
}

function draw() {
    if (estadoJuego == true) {
        imageMode(CORNER);
        image(imagenFondo, movimentoLateral, 0);
        image(imagenFondo, movimentoLateral + imagenFondo.width, 0);
        movimentoLateral -= 5; //Desplazamiento a la izquierda de la imagen de fondo


        if (movimentoLateral < -imagenFondo.width) movimentoLateral = 0;    
        
        if (keyIsPressed === true && salto == 310 ) {
           validacionSubir = true;
        }
        if (validacionSubir) {
            salto = salto - 4;          
            if (salto ===  186) {
                validacionSubir = false;
                validacionBajar = true;
            }
          }
        if (validacionBajar) {
            salto = salto + 4;
            if (salto === 310) {
                validacionBajar = false;
            }
        }
        for (let i = 1 ; i < wx.length; i++) {
            imageMode(CENTER)
            image(imagenPiedras, wx[i], 420 ,[90],[90])
            if (wx[i] < 0) {
              wx[i] = width;
            }      
            wx[i] -= 5 //Desplazamiento a la izquierda de la imagen de pared
            
            if (wx[i] == (width/2 - 450)) {
                marcador++;
                record = max(record, marcador);
            }

            if ((salto <= 310 && salto >= 240) && (wx[i] == (width/2 - 470))){
               estadoJuego = false;   
               cancionJuego.stop()
            }
        }
        image(imagenPersonaje, 160, salto)
        fill(0, 0, 0); 
        text("Puntaje: " +marcador, width/2-60,50)
        yaJugo = true;
    }
    else{
        imageMode(CORNER);
        image(imagenFondo, 0, 0);
        if (yaJugo) {
            text("Perdiste", (width/2 - 250),(height/2 - 100))
            text("Puntaje: " +(marcador - 1),  (width/2 - 250),(height/2 - 50))    
            // if(marcador =>)
        }
    }
}

function mousePressed() {
    if (estadoJuego == false) {
      estadoJuego = true;
      recordAnterior = record;
      marcador = 0;
      wx = [600,900]
      noCursor()
      cancionJuego.play()
    }
  }
  