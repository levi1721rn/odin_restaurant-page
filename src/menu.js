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
    
    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);
    list.appendChild(item4);
    list.appendChild(item5);
    list.appendChild(item6);
    list.appendChild(item7);
    list.appendChild(item8);
    list.appendChild(item9);
    list.appendChild(item10);

    content.appendChild(list);

}