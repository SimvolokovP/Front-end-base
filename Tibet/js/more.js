const showMore = document.querySelector('.btn__more');
let items = 2;
const destinationLenght = document.querySelectorAll('.blog-page__item').length;

showMore.addEventListener('click', () =>{
    items += 2;
    const array = Array.from(document.querySelector('.blog-page__list').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === destinationLenght) {
        showMore.style.display = 'none';
        hide.style.display = 'block';
    }
    console.log(visItems);
});