function makeDivs(num) {
    for (let i=0; i<num*num; i++) {
        const div = document.createElement('div');
        div.textContent = "";//(i+1).toString();
        let divID = String(i+1)
        div.setAttribute('id', divID);
        div.classList.add('etch-div');                              
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

function logSubmit(event) {
  let val = document.getElementById("reset-input").value;
  let etchDivs = document.getElementsByClassName('etch-div');
  for (var i = 0; i < etchDivs.length; i++) {
    etchDivs[i].style.backgroundColor = 'red';
  }
  container.innerHTML = '';
  
  makeGrid(val);
  event.preventDefault();
}

function makeGrid(divInput = 15) {
  let numberDivs = divInput;
  let gridSizePx = 500;
  let gridSizeGap = 5;
  let widthSquare = gridSizePx/numberDivs;
  let newGridSizePx = gridSizePx + (gridSizeGap * (numberDivs-1));
  
  container.setAttribute('style', `display: grid; grid-template-columns: repeat(${numberDivs}, ${widthSquare}px); grid-template-rows: repeat(${numberDivs}, ${widthSquare}px); grid-gap: 0; height: ${newGridSizePx}px; width: ${newGridSizePx}px;  grid-gap: ${gridSizeGap}px ${gridSizeGap}px; border-style: solid; border-color: darkgray; margin-top: 50px;`);
  makeDivs(numberDivs);
}

const container = document.querySelector('#container');
const form = document.getElementById('form');
makeGrid();
form.addEventListener('submit', logSubmit);
