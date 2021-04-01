'use strict';

const stringArray = document.querySelector('#stringArray'),
  btnFindPopularString = document.querySelector('#btnFindPopularString'),
  taskPopularChar = document.querySelector('#taskPopularChar'),
  newChar = document.querySelector('#newChar'),
  btnChangePopularChar = document.querySelector('#btnChangePopularChar'),
  anagramFirstString = document.querySelector('#anagramFirstString'),
  anagramSecondString = document.querySelector('#anagramSecondString'),
  btnFindAnagram = document.querySelector('#btnFindAnagram'),
  btnGetPopularChar = document.querySelector('#btnGetPopularChar'),
  answerFirst = document.querySelector('#answerFirst'),
  answerSecond = document.querySelector('#answerSecond'),
  answerThird = document.querySelector('#answerThird'),
  answerFourth = document.querySelector('#answerFourth');


btnFindPopularString.addEventListener('click', () => {
    answerFirst.innerHTML = `Ответ: ${longestString(stringArray.value.trim().split(','))}`;
});

btnGetPopularChar.addEventListener('click', () => {
    answerSecond.innerHTML = `Ответ: ${popularChar(taskPopularChar.value)}`;
});

btnChangePopularChar.addEventListener('click', () => {
    answerThird.innerHTML = `Ответ: ${swapChar(taskPopularChar.value, newChar.value)}`;
});

btnFindAnagram.addEventListener('click', () => {
    answerFourth.innerHTML = `Ответ: ${isAnagramm(anagramFirstString.value, anagramSecondString.value)}`;
});