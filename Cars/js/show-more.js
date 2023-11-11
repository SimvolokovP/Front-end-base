const showMore = document.querySelector('.destination__more');
const hide = document.querySelector('.destination__hide');
let items = 3;
const destinationLenght = document.querySelectorAll('.destination__item').length;

showMore.addEventListener('click', () =>{
    items += 3;
    const array = Array.from(document.querySelector('.destination__inner').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === destinationLenght) {
        showMore.style.display = 'none';
        hide.style.display = 'block';
    }
    console.log(visItems);
});

// hide.addEventListener('click', () =>{
//     items -= 3;
//     const array = Array.from(document.querySelector('.destination__inner').children);
//     const visItems = array.slice(0, items);

//     visItems.forEach(el => el.classList.add('is-invisible'));

    
//     showMore.style.display = 'block';
//     hide.style.display = 'none';
    
//     console.log(visItems);
// });