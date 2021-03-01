let menu, mapa, contato, visor, divMenu, divMapa, divContato;

menu = document.querySelector('#menu');
mapa = document.querySelector('#mapa');
contato = document.querySelector('#contato');

divMenu = document.querySelector('.menu').innerHTML;
divMapa = document.querySelector('.mapa').innerHTML;
divContato = document.querySelector('.contato').innerHTML;

visor = document.querySelector('.visor');

menu.addEventListener('click', setMenu);
mapa.addEventListener('click', setMapa);
contato.addEventListener('click', setContato);

visor.innerHTML = divMenu;

function setMenu() {
    visor.innerHTML = divMenu;
    
};

function setMapa() {
    visor.innerHTML = divMapa;
};

function setContato() {
    visor.innerHTML = divContato;
};