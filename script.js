const icons = document.querySelectorAll('.icon');
const answers = document.querySelectorAll('.question-answer');
const source = ['/images/icon-plus.svg', '/images/icon-minus.svg'];

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', () => {
        answers[i].classList.toggle('hide');
        let str = String(icons[i].src);
        if (str.includes(source[0])) {
            icons[i].src = source[1];
        } else {
            icons[i].src = source[0];
        }
    })
}