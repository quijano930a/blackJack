import _ from 'underscore';
import {pedirCarta,valorCarta,crearDeck} from './usecases/index'
(()=>{

  'use strict'
  

let deck =[];
const tipos = ['C','D','H','S']
const especiales =['A','J','Q','K']
let deckJugador =[];

let puntosJugador=0;
let puntosComputador=0;

//referencias html

const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener')
const btnNuevo   = document.querySelector('#btnNuevo')
const smallJugador = document.querySelectorAll('small')
const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputador= document.querySelector('#computadora-cartas')










// turno de la computador

const turnoComputadora=(puntosMinimos)=>{

do{
  const carta = pedirCarta(deck);
  puntosComputador = puntosComputador + valorCarta(carta);
  smallJugador[1].innerText = puntosComputador;
  const imgCarta = document.createElement('img');
  
  imgCarta.src=`./assets/cartas/${carta}.png`
  imgCarta.classList.add('carta')
  divCartasComputador.append(imgCarta)
  
}while(puntosMinimos>=puntosComputador)
  
if(puntosComputador>21){
  console.log("ganaste")
}else{
  console.log("perdiste")
}


}



deck = crearDeck(tipos,especiales);


btnPedir.addEventListener('click',()=>{

const carta = pedirCarta(deck);
puntosJugador = puntosJugador + valorCarta(carta);
smallJugador[0].innerText = puntosJugador;
const imgCarta = document.createElement('img');
imgCarta.src=`./assets/cartas/${carta}.png`
imgCarta.classList.add('carta')
divCartasJugador.append(imgCarta)

if(puntosJugador>21){
  console.warn("perdiste")
  btnPedir.disabled = true;
}else if(puntosJugador==21){
  console.warn("21 , genial")
  btnPedir.disabled = true;
  turnoComputadora(puntosJugador)

}

})

btnDetener.addEventListener('click',()=>{
  btnPedir.disabled =true;
  turnoComputadora(puntosJugador)
})


btnNuevo.addEventListener('click',()=>{

  crearDeck();
  btnPedir.disabled=false;
  puntosJugador=0;
  puntosComputador=0;
  smallJugador[0].innerText = 0;
  smallJugador[1].innerText = 0;
  divCartasJugador.innerHTML="";
  divCartasComputador.innerHTML="";



})


})();




