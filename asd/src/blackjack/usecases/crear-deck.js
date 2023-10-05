import _ from 'underscore';

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array <string>} tiposDeCarta Ejemplo : ['C','D','H','S']
 * @param {Array <string>} tiposEspeciales  Ejemplo : ['A','J','Q','K']
 * @returns {Array <string>} retorna una nuevo deck de cartas
 */

export const crearDeck =(tiposDeCarta,tiposEspeciales)=>{


    if(!tiposDeCarta) throw new Error ('tipos de carta es obligatorio');

    let deck =[];

    for(let i=2;i<10;i++){
        for (let tipo of tiposDeCarta){
            deck.push(i+tipo)
        }
  
        
    }
  
    for(let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){
            deck.push(esp+tipo)
        }
    }
  
    deck= _.shuffle(deck)

    return deck;
  
  }