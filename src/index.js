import { pageLoad } from "./pageLoad.js";
import {menu} from "./menu.js";
import { about } from "./about.js";

import "./styles.css";

const buttons = document.querySelectorAll('button');

const home_button = buttons[0];
const menu_button = buttons[1];
const about_button = buttons[2];


pageLoad();
home_button.style.backgroundColor = 'green';


const content = document.querySelector('#content');

home_button.addEventListener('click' , () => {
    content.innerHTML = "";
    pageLoad();
    home_button.style.backgroundColor = 'green';
    menu_button.style.backgroundColor = 'white';
    about_button.style.backgroundColor ='white';
})

menu_button.addEventListener('click', () => {
    content.innerHTML = "";
    menu();
    menu_button.style.backgroundColor = 'green';
    home_button.style.backgroundColor = 'white';
    about_button.style.backgroundColor ='white';
})

about_button.addEventListener('click',() => {
    content.innerHTML = "";
    about();
    about_button.style.backgroundColor ='green';
    home_button.style.backgroundColor = 'white';
    menu_button.style.backgroundColor = 'white';
})