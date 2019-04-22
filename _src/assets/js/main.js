'use strict';

// primera etapa del ejercicio: cuando se pulse el botón: añadir la info del input a la url de búsqueda a la Api para que nos devuelva la serie escrita en el input: nombre e imagen del cartel

const buttonEl = document.querySelector('.btn');
const inputEl = document.querySelector('.finder-input');
const ulEl = document.querySelector('.list')

// escuchar al botón
buttonEl.addEventListener('click', handleSearchButton);
// función que:
function handleSearchButton () {
    // recoge en una constante el valor del input
    const inputValue = inputEl.innerHTML;
    // pinta en nuestro ul un li
    ulEl.innerHTML = '<li class="list-item"></li>';
    // dentro del li, mete un h2 y una imagen
    // hace una petición fetch a la url de la API: http://api.tvmaze.com/singlesearch/shows?q= + el valor del input, que:
        // asigna al innerHTML del h2 el título de la serie
        // asigna al src de la imagen la url de la imagen
}
handleSearchButton();