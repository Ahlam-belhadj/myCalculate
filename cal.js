const calculator = document.querySelector('.calculatrice');

// l'ecran de la calculatrice
const screen = document.createElement('div');
screen.classList.add('ecran');
calculator.appendChild(screen)

// les touches de la calculatrice
const touchee = document.createElement('div');
touchee.classList.add('touches');
calculator.appendChild(touchee)

// ALL TOUCHES
const bouton1 = document.createElement('button');
bouton1.classList.add('bouton')
bouton1.innerText = 'AC';
touchee.appendChild(bouton1);
bouton1.setAttribute("data-key", "8");

const bouton2 = document.createElement('button');
bouton2.classList.add('bouton')
bouton2.innerText = '(';
touchee.appendChild(bouton2);
bouton2.setAttribute("data-key", "53");

const bouton3 = document.createElement('button');
bouton3.classList.add('bouton')
bouton3.innerText = ')';
touchee.appendChild(bouton3);
bouton3.setAttribute("data-key", "219");

const bouton4 = document.createElement('button');
bouton4.classList.add('bouton')
bouton4.innerText = '/';
touchee.appendChild(bouton4);
bouton4.setAttribute("data-key", "111");

const bouton5 = document.createElement('button');
bouton5.classList.add('bouton')
bouton5.innerText = '7';
touchee.appendChild(bouton5);
bouton5.setAttribute("data-key", "103");

const bouton6 = document.createElement('button');
bouton6.classList.add('bouton')
bouton6.innerText = '8';
touchee.appendChild(bouton6);
bouton6.setAttribute("data-key", "104");

const bouton7 = document.createElement('button');
bouton7.classList.add('bouton')
bouton7.innerText = '9';
touchee.appendChild(bouton7);
bouton7.setAttribute("data-key", "105");

const bouton8 = document.createElement('button');
bouton8.classList.add('bouton')
bouton8.innerText = '*';
touchee.appendChild(bouton8);
bouton8.setAttribute("data-key", "106");

const bouton9 = document.createElement('button');
bouton9.classList.add('bouton')
bouton9.innerText = '4';
touchee.appendChild(bouton9);
bouton9.setAttribute("data-key", "100");

const bouton10 = document.createElement('button');
bouton10.classList.add('bouton')
bouton10.innerText = '5';
touchee.appendChild(bouton10);
bouton10.setAttribute("data-key", "101");

const bouton11 = document.createElement('button');
bouton11.classList.add('bouton')
bouton11.innerText = '6';
touchee.appendChild(bouton11);
bouton11.setAttribute("data-key", "102");

const bouton12 = document.createElement('button');
bouton12.classList.add('bouton')
bouton12.innerText = '-';
touchee.appendChild(bouton12);
bouton12.setAttribute("data-key", "109");

const bouton13 = document.createElement('button');
bouton13.classList.add('bouton')
bouton13.innerText = '1';
touchee.appendChild(bouton13);
bouton13.setAttribute("data-key", "97");

const bouton14 = document.createElement('button');
bouton14.classList.add('bouton')
bouton14.innerText = '2';
touchee.appendChild(bouton14);
bouton14.setAttribute("data-key", "98");

const bouton15 = document.createElement('button');
bouton15.classList.add('bouton')
bouton15.innerText = '3';
touchee.appendChild(bouton15);
bouton15.setAttribute("data-key", "99");

const bouton16 = document.createElement('button');
bouton16.classList.add('bouton')
bouton16.innerText = '+';
touchee.appendChild(bouton16);
bouton16.setAttribute("data-key", "107");

const bouton17 = document.createElement('button');
bouton17.classList.add('bouton')
bouton17.innerText = '0';
touchee.appendChild(bouton17);
bouton17.setAttribute("data-key", "96");

const bouton18 = document.createElement('button');
bouton18.classList.add('bouton')
bouton18.innerText = '.';
touchee.appendChild(bouton18);
bouton18.setAttribute("data-key", "110");


const bouton19 = document.createElement('button');
bouton19.classList.add('bouton')
bouton19.innerText = "=";
touchee.appendChild(bouton19);
bouton19.setAttribute("data-key", "13");

// DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
// const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)

})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                screen.textContent = "";
                break;
            case '13':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }
}

