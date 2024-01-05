const tooltip = document.querySelector('.tooltip__btn');
const toolblock = document.querySelector('.tooltip__txt');


import { createPopper, right} from '@popperjs/core';
createPopper(tooltip, toolblock, {
placement: 'top-start'});
