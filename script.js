const icons = document.querySelectorAll('.icon');
const answers = document.querySelectorAll('.question-answer');
const source = [
    'https://github.com/compscimayawho/faq-accordion-main/blob/main/images/icon-plus.svg',
    'https://github.com/compscimayawho/faq-accordion-main/blob/main/images/icon-minus.svg'
];

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', () => {
        answers[i].classList.toggle('hide');
        let str = String(icons[i].src);
        if (str.contains('/icon-plus')) {
            icons[i].src = source[1];
        } else {
            icons[i].src = source[0];
        }
    })
}