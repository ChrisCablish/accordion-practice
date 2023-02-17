const accHeader = document.querySelectorAll('.accordion__header');
const accContents = document.querySelectorAll('.accordion__body');

accHeader.forEach(currentHeader => {
    currentHeader.addEventListener('click', () => {
        currentHeader.classList.toggle('active');
        currentHeader.nextElementSibling.classList.toggle('active');
    });
});





