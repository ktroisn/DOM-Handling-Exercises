let grid = document.querySelector('#grid');

let square = document.createElement('div');


square.classList.add('square');

document.addEventListener("keydown", (event) => {
    // function code here
    var name = event.key;
    if (name == 'ArrowDown'){
        let newsquare = square.cloneNode();
        random_bg_color();
        grid.appendChild(newsquare);
    } else if (name == 'ArrowUp'){
        grid.removeChild(grid.lastChild);
    }
});

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    square.style.background = bgColor;
}
random_bg_color();
