// Création de la balise button, variable box dans le js
let box = document.createElement('button');
// Ajout de la class box a la variable box qui est la balise button
box.classList.add('box');

// Définir la variable board qui pointe sur l'élement portant l'id board
let board = document.querySelector('#board');
// Boucle qui définit i = 1, donne la limite de 4, incrémente a chaque tour jusqu'a
for(let i = 1; i <= 4; i++){
    // Clone la variable box dans la variable newbox
    let newbox = box.cloneNode();
    // Ajoute un chiffre dans le button
    newbox.innerText = i;
    // Incrémente la balise button(newbox) dans la div board
    board.appendChild(newbox);

    // Définir une variable de statut, utilisé dans l'evenement, pour la condition (état) de la box
    let isSpinning = false;

    // Création d'un évenement au clique sur la box
    newbox.addEventListener("click", () => {
        // Condition, si isSpinning est false
        if (!isSpinning) {
            // Rajoute un style a la box, ici un transform avec une rotation et un dézoom
            newbox.style.transform = "rotate(360deg) scale(0.8)";
            // Ajoute une class a la box, spin possède comme propr. une transition duration et un background
            newbox.classList.add('spin');
            // Retire la class spin-return aux boxs
            newbox.classList.remove('spin-return');
            // Définit l'état de la box sur true dans ce cas ca veut dire qu'elle est cliquée
            isSpinning = true;
        } else {
            newbox.style.transform = "rotate(0deg) scale(1)";
            newbox.classList.remove('spin');
            newbox.classList.add('spin-return');
            // Remet l'état de la box à zero, le clique sera de nouveau possible vu que l'état de la box est revenue par défaut
            isSpinning = false;
        }
    });
}

