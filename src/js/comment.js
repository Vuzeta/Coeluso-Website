const userArray = ["Paweł Wasik", "Mateusz Machnik", "Frond-End Developer"];
const commentArray = ["Lorem ipsum dolor sit amet", "Lorem ipsum lorem ipsum", "ipsum lorem amet sit"];

const arrWithDot = [...document.querySelectorAll('.comment__slider span')]
const userSpan = document.querySelector('.comment--user');
const commentDesc = document.querySelector('.comment--desc');

let counter = 0;
const timeSlide = 2000;
let activeSlide = 0;

export function changeComment() {
    let intervalSlide = setInterval(() => {
        changeUserAndDesc();
        ++counter;
    }, timeSlide)
}

const changeUserAndDesc = () => {
    userSpan.textContent = `${userArray[counter % userArray.length]}, `;
    commentDesc.textContent = `${commentArray[counter % commentArray.length]}`;
    changeSlider();
}

const changeSlider = () => {
    arrWithDot.forEach(el => {
        el.classList.remove('active');
    })
    arrWithDot[counter % 3].classList.add('active');
}