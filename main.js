const x = `<svg id="X"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="88px" height="88px">
<path fill-rule="evenodd"  stroke="rgb(255, 252, 252)" stroke-width="0px" stroke-linecap="butt" stroke-linejoin="miter" fill="#ffffff"
d="M77.536,70.464 L70.464,77.536 L41.500,48.571 L12.536,77.536 L5.464,70.464 L34.429,41.500 L5.464,12.536 L12.536,5.464 L41.500,34.429 L70.464,5.464 L77.536,12.536 L48.571,41.500 L77.536,70.464 Z"></path>
</svg>`;

const o = `<svg id="O"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="78px" height="78px">
<path fill-rule="evenodd"  stroke="rgb(255, 252, 252)" stroke-width="10px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
d="M36.500,5.000 C53.897,5.000 68.000,19.103 68.000,36.500 C68.000,53.897 53.897,68.000 36.500,68.000 C19.103,68.000 5.000,53.897 5.000,36.500 C5.000,19.103 19.103,5.000 36.500,5.000 Z"></path>
</svg>`;

let game;
let randGlob;
let head;

function userGo(data) {
  console.log('data ', data);
  console.log('innerHTML ', data.innerHTML);
  console.log('Пусто? ', data.innerHTML == '');
  console.log('ID ', data.id);
  if (data.innerHTML == '') {
    data.innerHTML = x;
    game[data.id] = 1;
    setTimeout(() => {
      checkGo('user');
    }, 300);
    return false;
  } else {
    console.log('Клетка занята');
  };
};

//Бот
function botGo() {
  console.log('botGo');
  //

  if (game[0] == game[1] && game[0] == 2 && document.getElementById(2).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 1, ставь в 2');
    getNull(2);
    return false;
  } if (game[1] == game[2] && game[1] == 2 && document.getElementById(0).innerHTML == '' && game[1] != undefined) {
    console.log('1 = 2, ставь в 0');
    getNull(0);
    return false;
  } if (game[3] == game[4] && game[3] == 2 && document.getElementById(5).innerHTML == '' && game[3] != undefined) {
    console.log('3 = 4, ставь в 5');
    getNull(5);
    return false;
  } if (game[4] == game[5] && game[4] == 2 && document.getElementById(3).innerHTML == '' && game[4] != undefined) {
    console.log('4 = 5, ставь в 3');
    getNull(3);
    return false;
  } if (game[6] == game[7] && game[6] == 2 && document.getElementById(8).innerHTML == '' && game[6] != undefined) {
    console.log('6 = 7, ставь в 8');
    getNull(8);
    return false;
  } if (game[7] == game[8] && game[7] == 2 && document.getElementById(6).innerHTML == '' && game[7] != undefined) {
    console.log('7 = 8, ставь в 6');
    getNull(6);
    return false;
  } if (game[0] == game[3] && game[0] == 2 && document.getElementById(6).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 3, ставь в 6');
    getNull(6);
    return false;
  } if (game[3] == game[6] && game[3] == 2 && document.getElementById(0).innerHTML == '' && game[3] != undefined) {
    console.log('3 = 6, ставь в 0');
    getNull(0);
    return false;
  } if (game[1] == game[4] && game[1] == 2 && document.getElementById(7).innerHTML == '' && game[1] != undefined) {
    console.log('1 = 4, ставь в 7');
    getNull(7);
    return false;
  } if (game[4] == game[7] && game[4] == 2 && document.getElementById(1).innerHTML == '' && game[4] != undefined) {
    console.log('4 = 7, ставь в 1');
    getNull(1);
    return false;
  } if (game[2] == game[5] && game[2] == 2 && document.getElementById(8).innerHTML == '' && game[2] != undefined) {
    console.log('2 = 5, ставь в 8');
    getNull(8);
    return false;
  } if (game[5] == game[8] && game[5] == 2 && document.getElementById(2).innerHTML == '' && game[5] != undefined) {
    console.log('5 = 8, ставь в 2');
    getNull(2);
    return false;
  } if (game[0] == game[4] && game[0] == 2 && document.getElementById(8).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 4, ставь в 8');
    getNull(8);
    return false;
  } if (game[4] == game[8] && game[4] == 2 && document.getElementById(0).innerHTML == '' && game[4] != undefined) {
    console.log('4 = 8, ставь в 0');
    getNull(0);
    return false;
  } if (game[2] == game[4] && game[2] == 2 && document.getElementById(6).innerHTML == '' && game[2] != undefined) {
    console.log('2 = 4, ставь в 6');
    getNull(6);
    return false;
  } if (game[4] == game[6] && game[4] == 2 && document.getElementById(2).innerHTML == '' && game[4] != undefined) {
    console.log('4 = 6, ставь в 2');
    getNull(2);
    return false;
  } if (game[0] == game[6] && game[0] == 2 && document.getElementById(3).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 6, ставь в 3');
    getNull(3);
    return false;
  } if (game[1] == game[7] && game[1] == 2 && document.getElementById(4).innerHTML == '' && game[1] != undefined) {
    console.log('1 = 7, ставь в 4');
    getNull(4);
    return false;
  } if (game[2] == game[8] && game[2] == 2 && document.getElementById(5).innerHTML == '' && game[2] != undefined) {
    console.log('2 = 8, ставь в 5');
    getNull(5);
    return false;
  } if (game[0] == game[2] && game[0] == 2 && document.getElementById(1).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 2, ставь в 1');
    getNull(1);
    return false;
  } if (game[3] == game[5] && game[3] == 2 && document.getElementById(4).innerHTML == '' && game[3] != undefined) {
    console.log('3 = 5, ставь в 4');
    getNull(4);
    return false;
  } if (game[6] == game[8] && game[6] == 2 && document.getElementById(7).innerHTML == '' && game[6] != undefined) {
    console.log('6 = 8, ставь в 7');
    getNull(7);
    return false;
  } if (game[0] == game[8] && game[0] == 2 && document.getElementById(4).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 8, ставь в 4');
    getNull(4);
    return false;
  } if (game[2] == game[6] && game[2] == 2 && document.getElementById(4).innerHTML == '' && game[2] != undefined) {
    console.log('0 = 8, ставь в 4');
    getNull(4);
    return false;
  }

  //
  if (game[0] == game[1] && document.getElementById(2).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 1, ставь в 2');
    getNull(2);
    return false;
  } if (game[1] == game[2] && document.getElementById(0).innerHTML == '' && game[1] != undefined) {
    console.log('1 = 2, ставь в 0');
    getNull(0);
    return false;
  } if (game[3] == game[4] && document.getElementById(5).innerHTML == '' && game[3] != undefined) {
    console.log('3 = 4, ставь в 5');
    getNull(5);
    return false;
  } if (game[4] == game[5] && document.getElementById(3).innerHTML == '' && game[4] != undefined) {
    console.log('4 = 5, ставь в 3');
    getNull(3);
    return false;
  } if (game[6] == game[7] && document.getElementById(8).innerHTML == '' && game[6] != undefined) {
    console.log('6 = 7, ставь в 8');
    getNull(8);
    return false;
  } if (game[7] == game[8] && document.getElementById(6).innerHTML == '' && game[7] != undefined) {
    console.log('7 = 8, ставь в 6');
    getNull(6);
    return false;
  } if (game[0] == game[3] && document.getElementById(6).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 3, ставь в 6');
    getNull(6);
    return false;
  } if (game[3] == game[6] && document.getElementById(0).innerHTML == '' && game[3] != undefined) {
    console.log('3 = 6, ставь в 0');
    getNull(0);
    return false;
  } if (game[1] == game[4] && document.getElementById(7).innerHTML == '' && game[1] != undefined) {
    console.log('1 = 4, ставь в 7');
    getNull(7);
    return false;
  } if (game[4] == game[7] && document.getElementById(1).innerHTML == '' && game[4] != undefined) {
    console.log('4 = 7, ставь в 1');
    getNull(1);
    return false;
  } if (game[2] == game[5] && document.getElementById(8).innerHTML == '' && game[2] != undefined) {
    console.log('2 = 5, ставь в 8');
    getNull(8);
    return false;
  } if (game[5] == game[8] && document.getElementById(2).innerHTML == '' && game[5] != undefined) {
    console.log('5 = 8, ставь в 2');
    getNull(2);
    return false;
  } if (game[0] == game[4] && document.getElementById(8).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 4, ставь в 8');
    getNull(8);
    return false;
  } if (game[4] == game[8] && document.getElementById(0).innerHTML == '' && game[4] != undefined) {
    console.log('4 = 8, ставь в 0');
    getNull(0);
    return false;
  } if (game[2] == game[4] && document.getElementById(6).innerHTML == '' && game[2] != undefined) {
    console.log('2 = 4, ставь в 6');
    getNull(6);
    return false;
  } if (game[4] == game[6] && document.getElementById(2).innerHTML == '' && game[4] != undefined) {
    console.log('4 = 6, ставь в 2');
    getNull(2);
    return false;
  } if (game[0] == game[6] && document.getElementById(3).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 6, ставь в 3');
    getNull(3);
    return false;
  } if (game[1] == game[7] && document.getElementById(4).innerHTML == '' && game[1] != undefined) {
    console.log('1 = 7, ставь в 4');
    getNull(4);
    return false;
  } if (game[2] == game[8] && document.getElementById(5).innerHTML == '' && game[2] != undefined) {
    console.log('2 = 8, ставь в 5');
    getNull(5);
    return false;
  } if (game[0] == game[2] && document.getElementById(1).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 2, ставь в 1');
    getNull(1);
    return false;
  } if (game[3] == game[5] && document.getElementById(4).innerHTML == '' && game[3] != undefined) {
    console.log('3 = 5, ставь в 4');
    getNull(4);
    return false;
  } if (game[6] == game[8] && document.getElementById(7).innerHTML == '' && game[6] != undefined) {
    console.log('6 = 8, ставь в 7');
    getNull(7);
    return false;
  } if (game[0] == game[8] && document.getElementById(4).innerHTML == '' && game[0] != undefined) {
    console.log('0 = 8, ставь в 4');
    getNull(4);
    return false;
  } if (game[2] == game[6] && document.getElementById(4).innerHTML == '' && game[2] != undefined) {
    console.log('0 = 8, ставь в 4');
    getNull(4);
    return false;
  } else {
    random();
    return false;
  };

  function random() {
    console.log('********** Рандомный **********');
    var rand = 0.5 + Math.random() * 9;
    rand = Math.round(rand);
    if (document.getElementById(rand-1).innerHTML == '') {
      getNull(rand-1);
      return false;
    } else {
      random();
      return false;
    }

  };

  function getNull(data) {
    let elem = document.getElementById(data);
    console.log('Элемент, куда бот должен поставить ', data);
      elem.innerHTML = o;
      game[data] = 2;
      setTimeout(() => {
        checkGo('bot');
      }, 300);
  };
};

function checkGo(user) {
  console.log('checkGo user: ', user);
  console.log('game ', game);
  if (game[0] == 1 && game[1] == 1 && game[2] == 1) {
        win(1);
      } if (game[3] == 1 && game[4] == 1 && game[5] == 1) {
        win(1);
      } if(game[6] == 1 && game[7] == 1 && game[8] == 1) {
        win(1);
      } if (game[0] == 1 && game[3] == 1 && game[6] == 1) {
        win(1);
      } if (game[1] == 1 && game[4] == 1 && game[7] == 1) {
        win(1);
      } if (game[2] == 1 && game[5] == 1 && game[8] == 1) {
        win(1);
      } if (game[0] == 1 && game[4] == 1 && game[8] == 1) {
        win(1);
      } if (game[2] == 1 && game[4] == 1 && game[6] == 1) {
        win(1);
      } if (game[0] == 2 && game[1] == 2 && game[2] == 2) {
        win(2);
      } if (game[3] == 2 && game[4] == 2 && game[5] == 2) {
        win(2);
      } if(game[6] == 2 && game[7] == 2 && game[8] == 2) {
        win(2);
      } if (game[0] == 2 && game[3] == 2 && game[6] == 2) {
        win(2);
      } if (game[1] == 2 && game[4] == 2 && game[7] == 2) {
        win(2);
      } if (game[2] == 2 && game[5] == 2 && game[8] == 2) {
        win(2);
      } if (game[0] == 2 && game[4] == 2 && game[8] == 2) {
        win(2);
      } if (game[2] == 2 && game[4] == 2 && game[6] == 2) {
        win(2);
      } if (game[0] != undefined && game[1] != undefined && game[2] != undefined && game[3] != undefined && game[4] != undefined && game[5] != undefined && game[6] != undefined && game[7] != undefined && game[8] != undefined) {
        win(3);
      } else {
        if (user == 'user') {
          console.log('head ', head);
          head.innerHTML = '<h1 class="headText"> Ходит Бот </h1>';
          botGo();
          return false;
        } if (user == 'bot') {
          console.log('Ходи');
          console.log('head ', head);
          head.innerHTML = '<h1 class="headText"> Ходит Игрок </h1>';
          return false;
        } else {
          console.log('какая-то херня');
          return false;
        }
      };
};

function win(data) {
  console.log('win data ', data);
  if (data == 1) {
    alert ('Ты выйграл!');
    location.reload();
  } if (data == 2) {
    alert ('Лох-Пидр!');
    location.reload();
  } if (data == 3) {
    alert ('Ничья!');
    location.reload();
  } else {
    console.log(data, ' что это?');
    return false;
  }
};

function remove() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      };
    };

window.onload = function() {
  head = document.getElementById('head');
  // head.innerHTML = '<h1 class="headText"> Ходит Игрок </h1>';
  console.log('Из onload ', head);
  let GameElem = document.getElementById('game');
  game = new Array(9);
  console.log(game);
  for (let i = 0; i < game.length; i++) {
    GameElem.innerHTML += `<div class="box" id="${i}"></div>`;
  };
  GameElem.innerHTML += '<div id="button"><h1>Нажми в клетку, чтобы начать</h1></div>';
  document.getElementById('root').innerHTML += '<div id="start"></div>';

  document.getElementById('game').onclick = function (event) {
    console.log('event ',event);
    console.log('event.target ', event.target);
    userGo(event.target);
  };

  document.getElementById('button').onclick = function () {
    document.getElementById('head').innerHTML = '<h1 class="headText"> Ходит Игрок </h1>';
    document.getElementById('button').remove();
    document.getElementById('start').remove();
  };
};
