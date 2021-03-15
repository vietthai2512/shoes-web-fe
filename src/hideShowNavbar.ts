import { getElement, throttled } from './utils.js';

let prevScrollPos = window.pageYOffset;
let navbar = getElement('.nav-center-wrapper') as HTMLElement;

window.addEventListener('scroll', throttled(() =>
{
    let currScrollPos = window.pageYOffset;
    if (prevScrollPos > currScrollPos)
    {
        navbar.style.top = '0';
    }
    else 
    {
        navbar.style.top = '-4rem';
    }
    prevScrollPos = currScrollPos;
}));