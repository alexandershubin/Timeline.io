'use strict'
const button = document.querySelectorAll('.button');
const timelineList = document.querySelector('.timeline__list');
const timelineItem = document.querySelectorAll('.timeline__item');

button.forEach(item => {
  item.addEventListener('click', (evt) => {
    const { target } = evt;
    const buttonFirst = target.matches('.button__nav--top');
    const buttonSecond = target.matches('.button__nav--bottom');
    const buttonThird = target.matches('.button__nav--toggle');
    const buttonFifth = target.matches('.button__nav--all');
    
    if (buttonFirst) {
      timelineList.classList.add('timeline__list--top');
      timelineList.classList.remove('timeline__list--bottom');
    }
  
    if (buttonSecond) {
      timelineList.classList.add('timeline__list--bottom');
      timelineList.classList.remove('timeline__list--top');
    }
    
    if (buttonThird) {
      timelineList.classList.toggle('item-double');
    }
    
    if (buttonFifth) {
      createComponent(timelineList)
    }
  })
});
