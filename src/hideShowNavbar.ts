import { getElement } from './utils.js';

let prevScrollPos = window.pageYOffset;
let navbar = getElement('.navbar') as HTMLElement;

window.onscroll = () =>
{
    let currScrollPos = window.pageYOffset;
    if (prevScrollPos > currScrollPos)
    {
        navbar.style.top = '0';
    }
    else 
    {
        navbar.style.top = '-6rem';
    }
    prevScrollPos = currScrollPos;
};