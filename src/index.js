import { pageLoad } from "./pageLoad.js";
import {menu} from "./menu.js";
import { about } from "./about.js";

import "./styles.css";



const buttons = document.querySelectorAll('button');

const home_button = buttons[0];
const about_button = buttons[1];
const menu_button = buttons[3];

const content = document.querySelector('#content');

home_button.addEventListener('click' , () => {
    content.innerHTML = "";
    pageLoad();
})

menu_button.addEventListener('click', () => {
    content.innerHTML = "";
    menu();
})

about_button.addEventListener('click',() => {
    content.innerHTML = "";
    about();
})