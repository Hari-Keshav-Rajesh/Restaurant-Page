import {contact} from './contact';
import {menu} from './menu';

const home = () => {
    const content = document.querySelector(".content");
    content.innerHTML = '';
    
        const background=document.createElement('div');
        background.classList.add("backmage");
        content.appendChild(background);

            const quote = document.createElement('div');
            quote.classList.add('quote');
            quote.textContent = "Nothing brings people together like good pasta"
            background.appendChild(quote);

            const text = document.createElement('div');
            text.classList.add('text');
            text.innerHTML = "Treat yourself to the finest authentic italian pasta in town,<br>with fresh ingredients obtained directly from Gragnano,<br>the Home of Pasta.<br>Try <strong>NOW!!!!</strong>, at <i>Pasta-Roni</i>."
            background.appendChild(text);

            const address = document.createElement('div');
            address.classList.add('address');
            address.innerHTML = "Now OPEN!!!<br>At <i>19th Block, 21 Street, X City</i>"
            background.appendChild(address)


}
    

home();

const homeButton = document.querySelector(".home");
homeButton.addEventListener('click',home);

const contactButton = document.querySelector(".contact");
contactButton.addEventListener('click',contact);

const menuButton = document.querySelector(".menu");
menuButton.addEventListener('click',menu);
