let board = document.querySelector('#board');

let cell = document.createElement('button');

cell.classList.add('cell');

for(let i = 1; i <= 225; i++){

    // Définir la variable newcell contenant le clone
    let newcell = cell.cloneNode();

    // Ajouter a l'interieur de la div board, la newcell (le clone de cell qui vient detre crée)
    board.appendChild(newcell);

    newcell.addEventListener('click', addBlackBg, { once: true });

    newcell.addEventListener('dblclick', addYellowBg, { once: true });
}

function addBlackBg(e){
    
    e.target.style.background = "black";
    
}

function addYellowBg(e){
    
    e.target.style.background = "yellow";
    
}