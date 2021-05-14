const container = document.querySelector('#container');
const body = document.querySelector('body');

function makeDivs(num) {
    for (let i=0; i<num*num; i++) {
        const div = document.createElement('div');
        div.textContent = ".";//(i+1).toString();
        let divID = String(i+1)
        div.setAttribute('id', divID);                              
        container.appendChild(div);

        const currentDiv = document.getElementById(String(i+1));
        currentDiv.addEventListener("mouseover", function( event ) {
          event.target.style.backgroundColor = "gray";
          setTimeout(function() {
            event.target.style.backgroundColor = "darkgray";
          }, 500);
        }, false);

    }
}

let numberDivs = 10;
let gridSizePx = 500;
let gridSizeGap = 5;
let widthSquare = gridSizePx/numberDivs;
let newGridSizePx = gridSizePx + (gridSizeGap * numberDivs);

body.setAttribute.maxWidth = newGridSizePx + 'px';
container.setAttribute('style', `display: grid; grid-template-columns: repeat(${numberDivs}, ${widthSquare}px); grid-template-rows: repeat(${numberDivs}, ${widthSquare}px); grid-gap: 0; height: ${newGridSizePx}px; width: ${newGridSizePx}px;  grid-gap: ${gridSizeGap}px ${gridSizeGap}px;`);
makeDivs(numberDivs);
