let container = document.querySelector('#container');

let title = document.createElement('h1');
title.classList.add('title');

title.innerText = "Valeur en Euros";

container.appendChild(title);

let inputEuros = document.createElement('input');
inputEuros.setAttribute("oninput", "calculation()");


container.appendChild(inputEuros);

let paragraphChange = document.createElement('p');
container.appendChild(paragraphChange);


function calculation(){
    let valueInput = inputEuros.value;
    let exchangeRate = 6.55957;
    let change = valueInput * exchangeRate;
    paragraphChange.innerHTML = change.toFixed(2) + " francs";
}

