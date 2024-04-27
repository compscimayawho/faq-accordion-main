const icons = document.querySelectorAll('.icon');
const answers = document.querySelectorAll('.question-answer');
const source = [
    'https://raw.githubusercontent.com/compscimayawho/faq-accordion-main/main/images/icon-plus.svg?token=GHSAT0AAAAAACRFTVGZWVP2RHWOCOKTB6IEZRMXMUQ',
    'https://raw.githubusercontent.com/compscimayawho/faq-accordion-main/main/images/icon-minus.svg?token=GHSAT0AAAAAACRFTVGZ5GODRVHOGW45E3D2ZRMXMEQ'
];

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', () => {
        answers[i].classList.toggle('hide');
        let str = String(icons[i].src);
        if (str.includes('/images/icon-plus')) {
            icons[i].src = source[1];
        } else {
            icons[i].src = source[0];
        }
    })
}