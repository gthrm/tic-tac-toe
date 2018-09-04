const x = `<svg 
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="88px" height="88px">
<path fill-rule="evenodd"  stroke="rgb(255, 252, 252)" stroke-width="0px" stroke-linecap="butt" stroke-linejoin="miter" fill="#ffffff"
d="M77.536,70.464 L70.464,77.536 L41.500,48.571 L12.536,77.536 L5.464,70.464 L34.429,41.500 L5.464,12.536 L12.536,5.464 L41.500,34.429 L70.464,5.464 L77.536,12.536 L48.571,41.500 L77.536,70.464 Z"></path>
</svg>`;

const newX = x.toString().replace(/\r|\n/g, '');

const o = `<svg 
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="78px" height="78px">
<path fill-rule="evenodd"  stroke="rgb(255, 252, 252)" stroke-width="10px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
d="M36.500,5.000 C53.897,5.000 68.000,19.103 68.000,36.500 C68.000,53.897 53.897,68.000 36.500,68.000 C19.103,68.000 5.000,53.897 5.000,36.500 C5.000,19.103 19.103,5.000 36.500,5.000 Z"></path>
</svg>`;

const newO = o.toString().replace(/\r|\n/g, '');

var num = 0;

function check() {
    
    var boxes = document.getElementsByClassName('box');
    console.log(boxes[0].innerHTML.toString().replace(/\r|\n/g, '') == newO);

    console.log(boxes[0].innerHTML.toString().replace(/\r|\n/g, ''));
    console.log(newO);

    console.log('чек');
    if (boxes[0].innerHTML.toString().replace(/^\s+/&&/\r?\n/g, "") == X && boxes[1].innerHTML.toString().replace(/^\s+/&&/\r?\n/g, "") == X && boxes[2].innerHTML.toString().replace(/^\s+/&&/\r?\n/g, "") == X) {
        alert ("выйграли!");
    };
      
}

window.onload = function() {
    for (var i = 0; i<9; i++) {
        document.getElementById('game').innerHTML+='<div class="box"></div>';
    };

    document.getElementById('game').onclick = function(event) {
        if (event.target.className == 'box') {
            if (num % 2 == 0) {
                event.target.innerHTML = o;
            } else {
                event.target.innerHTML = x;
            }
            num ++;
            check();
            
        }
        else false;

    };
    
}

