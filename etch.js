const container = document.querySelector('#container');

function makeDivs(num) {
    for (let i=0; i<num*num; i++) {
        const div = document.createElement('div');
        div.textContent = (i+1).toString();
        let divID = String(i+1)
        div.setAttribute('id', divID);                              
        container.appendChild(div);     
    }
}

let numberDivs = 9;
container.setAttribute('style', `display: grid; grid-template-columns: repeat(${numberDivs}, 1fr)`);
makeDivs(9);

document.getElementById("1").innerHTML = "Hello World";

/*
test.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
*/