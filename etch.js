const container = document.querySelector('#container');

function makeDivs(num) {
    for (let i=0; i<num*num; i++) {
        const div = document.createElement('div');
        div.textContent = "☐";//(i+1).toString();
        let divID = String(i+1)
        div.setAttribute('id', divID);                              
        container.appendChild(div);

        const currentDiv = document.getElementById(String(i+1));
        currentDiv.addEventListener("mouseover", function( event ) {
          event.target.style.backgroundColor = "orange";
          setTimeout(function() {
            event.target.style.backgroundColor = "";
          }, 500);
        }, false);

    }
}

let numberDivs = 20;
let gridSizePx = 500;
let widthSquare = gridSizePx/numberDivs;
container.setAttribute('style', `display: grid; grid-template-columns: repeat(${numberDivs}, ${widthSquare}px); grid-template-rows: repeat(${numberDivs}, ${widthSquare}px); grid-gap: 0; height: ${gridSizePx}px; width: ${gridSizePx}px;`);
makeDivs(numberDivs);
