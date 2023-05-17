// Création de la balise div, variable cell dans le js
let cell = document.createElement('div');
// Ajout de la class cell a la variable cell
cell.classList.add('cell');
// Définition du symbole du joueur 1
const playerOne = 'X';
// Définition du symbole du joueur 2
const playerTwo = 'O';
// Définition de la variable gameStatus comme étant l'element portant l'id gameStatus dans index.html
const gameStatus = document.getElementById('gameStatus');
// Par défaut c'est le joueur un qui commence (par défaut c'est le tour du joueur un)
let playerTurn = playerOne;
// Définir la variable grid, contenant l'element aillant pour id grid dans index.html
let grid = document.querySelector('#grid');

// Boucle permettant de créer 9 clone de box
for(let i = 1; i <= 9; i++){
    // Définir la variable newcell contenant le clone
    let newcell = cell.cloneNode();
    // Ajouter a l'interieur de la div grid, la newcell (le clone de cell qui vient detre crée)
    grid.appendChild(newcell);
    // Ajoute un evenement a newcell, au click lancer la fonction playGame, on peut cliquer une seule fois sur chaque newcell
    newcell.addEventListener('click', playGame, { once: true });
}

// Fonction permettant d'ecrire les symboes de chaque joueur
function playGame(e){
    // Ajouter le symbole qui est actuellement dans playerTurn
    e.target.innerHTML = playerTurn;
    
        // Appel a la fonction updateMessage avec en paramettre playerTurn qui renverra selon le cas, un message de statuts
        updateMessage(playerTurn); 
    
    // Quand un joueur joue c'est le tours de l'autre joueur
    playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
}

// Message de statuts du jeu
function updateMessage(status){
    // Variable utilisé pour stocker les messages
    let statusText;

    /* (status) = soit a X soit a O, vu que playerTurn = soit X soit O, on utilise ce parametre pour appeler la fonction dans 
    playGame() */
    switch (status){
        case 'X' :
            statusText = "Au tour de (O)";
            break;
        case 'O' : 
            statusText = "Au tour de (X)";
            break;
    }
    // Remplacement du text de l'element portant l'id gameStatus dans index.html par le text de statusText
    gameStatus.innerHTML = statusText;
}