let deck = [];

const crearDeck = () =>{
    const tipos = ["C", "D", "H", "S" ];
    const especiales = ["A", "J", "Q", "K"];
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos){
        for(let especial of especiales){
            deck.push(especial + tipo);
        }
    }
    console.log(deck);

}


crearDeck();