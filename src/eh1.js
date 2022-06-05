/* eslint-disable no-restricted-globals */
import './css/style.css';
import differentRandom, { generator } from './mae2';

export const cage = Array.from(document.querySelectorAll('.cage'));

export const addImg = document.createElement('img');
addImg.setAttribute('class', 'goblin');
addImg.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/simplification/dom/pic/goblin.png';
const randomCage = differentRandom(generator);
cage[randomCage].appendChild(addImg);

const win = document.querySelector('.win');
const defeat = document.querySelector('.defeat');
const str = document.querySelector('.str');

/** Обработчики событий */

let greenCount = 0;
let redCount = 0;

cage.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    const cageElem = e.currentTarget;
    if (cageElem.querySelector('.goblin') === null) {
      redCount += 1;
      defeat.textContent = redCount;
    } else {
      greenCount += 1;
      win.textContent = greenCount;
      elem.firstElementChild.remove();
    }
  });
});

/* Перемещение изображения с помощью setInterval() */
let id;

export function addImgInterval() {
  if (document.querySelector('div img') === null) {
    const randomCage2 = differentRandom(generator);
    cage[randomCage2].insertBefore(addImg, null);

    /** "победа или поражение" */

    if (redCount === 5) {
      str.classList.add('red');
      str.textContent = 'Поражение';
    }

    if (greenCount === 10) {
      str.classList.add('green');
      str.textContent = 'Победа';
    }
    return;
  }

  const elem = document.querySelector('div img');
  const randomCage2 = differentRandom(generator);
  elem.remove();
  cage[randomCage2].insertBefore(elem, null);

  /** "победа или поражение" */

  if (redCount === 5) {
    str.classList.add('red');
    str.textContent = 'Поражение';
  }

  if (greenCount === 10) {
    str.classList.add('green');
    str.textContent = 'Победа';
  }

  /** Перезагрузка страницы */

  if (redCount === 5 || greenCount === 10) {
    clearInterval(id);
    setTimeout(() => {
      location.reload();
    }, 10000);
  }
}

export default function funSet() {
  id = setInterval(addImgInterval, 1000);
}
