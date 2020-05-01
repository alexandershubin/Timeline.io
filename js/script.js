const button = document.querySelectorAll('.button');
const timelineList = document.querySelector('.timeline__list');

button.forEach(item => {
  item.addEventListener('click', (evt) => {
    const { target } = evt;
    const buttonFirst = target.matches('.button__first');
    const buttonSecond = target.matches('.button__second');
    const buttonThird = target.matches('.button__third');
    
    if (buttonFirst) {
      timelineList.classList.add('timeline__list--top')
      timelineList.classList.remove('timeline__list--bottom')
    }
  
    if (buttonSecond) {
      timelineList.classList.add('timeline__list--bottom')
      timelineList.classList.remove('timeline__list--top')
    }
    
    if (buttonThird) {
      timelineList.classList.toggle('item-double')
    }
  })
});
