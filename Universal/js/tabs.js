const tabBtns = document.querySelectorAll('.btn__tab');
const tabContent = document.querySelectorAll('.tabs__item')
const tabItems = document.querySelectorAll('.tabs__element')

tabBtns.forEach(function(element) {
    element.addEventListener('click', open);
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;
    

    tabBtns.forEach(function(item) {
        item.classList.remove('btn__tab--active')
    });

    tabContent.forEach(function(item) {
        item.classList.remove('tab--active')
    });

    tabItems.forEach(function(el) {
        el.classList.remove('tabs__element--active')
    })
    
    tabTarget.classList.add('btn__tab--active');
    document.querySelector(`#${button}`).classList.add('tab--active');
    
};