const container = document.querySelector('#container');

function makeDivs(num) {
    for (let i=0; i<num*num; i++) {
        const div = document.createElement('div');
        div.textContent = (i+1).toString();
        let divID = String(i+1)
        div.setAttribute('id', divID);                              
        container.appendChild(div);

        const currentDiv = document.getElementById(String(i+1));
        currentDiv.addEventListener("mouseover", function( event ) {
          event.target.style.color = "orange";
          setTimeout(function() {
            event.target.style.color = "";
          }, 500);
        }, false);

    }
}

let numberDivs = 9;
container.setAttribute('style', `display: grid; grid-template-columns: repeat(${numberDivs}, 1fr)`);
makeDivs(9);