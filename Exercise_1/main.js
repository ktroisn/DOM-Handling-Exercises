
// Fonction permettant d'afficher une message d'alert quand on clique sur un certain élément
function onClickAlert() {
    // Définir la variable square comme étant l'élement portant l'id square de la page index.html
    let square = document.getElementById('square');
    // Définir la variable design comme étant l'élément portant la class CSS .design, dans ce cas la c'est square
    let design = document.querySelector('.design');
    // Récupérer tout les styles de la class .design, même les styles utilisé par défaut (non ecrit dans le css) seront récupéré
    const style = getComputedStyle(design);


    // Ajouter un évenement lorsque l'on clique sur la variable square qui est l'élement portant l'id square dans index.html
    square.addEventListener("click", () => {
        // Définir la variable width qui est égal a une chaine de caractère
        let width = 'width';
        // Définir la variable valueWidth comme étant la valeur de la propriété width
        let valueWidth = style.getPropertyValue(width);
        // Définir la variable height qui est égal a une chaine de caractère
        let height = 'height';
        // Définir la variable valueHeight comme étant la valeur de la propriété height
        let valueHeight = style.getPropertyValue(height);
        // Définir la variable background qui est égal a une chaine de caractère
        let background = 'background';
        // Définir la variable valueBackground comme étant la valeur de la propriété background
        let valueBackground = style.getPropertyValue(background);
        // Définir la variable color qui est égal a une chaine de caractère
        let color = 'color';
        // Définir la variable valueColor comme étant la valeur de la propriété color
        let valueColor = style.getPropertyValue(color);
        // Définir la variable fontSize qui est égal a une chaine de caractère
        let fontSize = 'font-size';
        // Définir la variable valueFontSize comme étant la valeur de la propriété font-size
        let valueFontSize = style.getPropertyValue(fontSize);
        /* Lors du clique sur square, la page nous renvois une alert contenant chaques variables appelés plus haut, elles ci sont 
        afficher grace à ${} qui convertis son contenu en chaine de caractère, le saut de ligne avec \n est à utiliser sur la
        même ligne, sinon dans alert() les retours a la ligne sont prits en compte className est utilisé pour afficher
         le nom de la class */
        alert(`Class : ${design.className}\nProperties : 
        ${fontSize}: ${valueFontSize}
        ${color}: ${valueColor}
        ${width}: ${valueWidth}
        ${height}: ${valueHeight}
        ${background}: ${valueBackground}`); // Dans ce cas, des valeurs par défaut sont presentes dans les valeurs de background
    }); 
}
// Appel de la fonction, placé a la fin pour être sur que toutes les instructions de la fonction soit executée
onClickAlert();
