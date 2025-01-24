let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(`intentos: ${intentos}`);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Usaste ${intentos} ${intentos == 1? 'intento': 'intentos'} para acertar al numero secreto`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es nenor');
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    // si ya sorteamos todos los numeros
    if ( listaNumeroSorteados.length == numeroMaximo ) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else{
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    

}
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = "";
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    // Necesitamos limpiar el input
    limpiarCaja();
    // Indicar mensaje de inicio
    // Generar el numero aleatorio
    
    // Inicializar el numero de intentos
    condicionesIniciales()
    // Deshabilitar el boton de "Nuevo Juego"
    document.querySelector('#reiniciar').setAttribute('disabled','True');
    console.log(numeroSecreto);
}
condicionesIniciales();
reiniciarJuego();
