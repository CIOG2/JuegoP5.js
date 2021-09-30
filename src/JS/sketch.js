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
let x = 0;
let py = 50;
let dy = 3;
let wx = [600,900];
let wy = [400,600];

function preload() {
    imagenFondo = loadImage('https://i.ibb.co/nmkBYvs/Background.jpg');
    imagenPersonaje = loadImage('https://i.ibb.co/H7pyGRc/Caballero.gif');

}

function setup() {
// put setup code here
    createCanvas(1000,500);

    textSize(40);
}

function draw() {
    imageMode(CORNER);
    image(imagenFondo, x, 0);
    image(imagenFondo,  x+ imagenFondo.width, 0);
    x -= 5 //Desplazamiento a la izquierda de la imagen de fondo
    dy += 1 //Desplazamiento adicional para el personaje
    py = py + dy //Posicion actual del personaje en Y
    if (x < -imagenFondo.width) x = 0
}




