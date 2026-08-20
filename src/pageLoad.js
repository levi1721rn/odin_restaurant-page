export {pageLoad};

import onePieceImage from "./onepiece.jpg";

function pageLoad(){   
   
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
