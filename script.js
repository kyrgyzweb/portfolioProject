// Little animation for my name
const myName = document.querySelector('.my-name');

const nameList = ['A', ' ', 'M', 'a', 'm', 'a', 'z', 'h', 'u', 's', 'u', 'p', 'o', 'v'];
let timeId = setInterval(frame, 200);
let index = 0;

function frame() {
    if (index < nameList.length) {
        myName.textContent += nameList[index];
        index++;
    }

    if (index === nameList.length) {
        clearInterval(timeId);
        myName.style.borderRight = '';
    }
}