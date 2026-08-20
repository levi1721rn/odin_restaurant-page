export {menu};

function menu(){

    const list = document.createElement('ul');

    const item1 = document.createElement('li');
    item1.textContent = 'Luffy';
    
    const item2 = document.createElement('li');
    item2.textContent = 'Zoro';

    const item3 = document.createElement('li');
    item3.textContent = 'Nami';

    const item4 = document.createElement('li');
    item4.textContent = 'Usopp';

    const item5 = document.createElement('li');
    item5.textContent = 'Sanji';

    const item6 = document.createElement('li');
    item6.textContent = 'Chopper';

    const item7 = document.createElement('li');
    item7.textContent = 'Robin';

    const item8 = document.createElement('li');
    item8.textContent = 'Franky';

    const item9 = document.createElement('li');
    item9.textContent = 'Brook';

    const item10 = document.createElement('li');
    item10.textContent = 'Jimbe';

    
    const content = document.querySelector('#content');
    content.style.margin = "3rem";
    
    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);
    content.appendChild(item4);
    content.appendChild(item5);
    content.appendChild(item6);
    content.appendChild(item7);
    content.appendChild(item8);
    content.appendChild(item9);
    content.appendChild(item10);

}