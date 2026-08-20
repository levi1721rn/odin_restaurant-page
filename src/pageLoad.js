export {pageLoad};

import onePieceImage from "./onepiece.jpg";

function pageLoad(){

   const nav_panel = document.querySelector('nav');
   nav_panel.style.display ='grid';
   nav_panel.style.gridTemplateColumns = "1fr 1fr 1fr";
   nav_panel.style.gap = '10px';


   const buttons = document.querySelectorAll('button');
   buttons.forEach((button) => {
    button.style.width = "100px"
    button.style.marginLeft = "3rem";
    button.style.marginTop = "1rem";
   })   
   
   
   const image = document.createElement('img');
   image.src = onePieceImage;

   const content = document.querySelector('#content');
   content.appendChild(image);

   image.style.transform = "rotate(270deg)";
   image.style.height = "35rem";
   image.style.width = "30rem";
   image.style.paddingRight = "100px";
   image.style.paddingLeft = '100px';

   const description= document.createElement('div');
   description.textContent = "This is the strawhat crew!";
   description.style.marginLeft = '15rem';

   content.appendChild(description);



}
