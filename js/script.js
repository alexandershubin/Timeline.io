'use strict'
const button = document.querySelectorAll('.button__nav');
const timelineList = document.querySelector('.timeline__list');

const createCloneBlock = (text) => {
  const timelineList2 = text.cloneNode(true)
  return text.after(timelineList2)
}

button.forEach(item => {
  item.addEventListener('click', (e) => {
    const {target} = e;
    const type = target.getAttribute('data-type');
    
    if (!type) return createCloneBlock(timelineList);
    timelineList.className = 'timeline__list';
    timelineList.classList.add(`timeline__list--${type}`)
  });
});
