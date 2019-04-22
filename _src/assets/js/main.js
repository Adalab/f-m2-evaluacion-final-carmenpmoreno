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
    const inputValue = inputEl.value;
    // pinta en nuestro ul un li y lo meto en una constante
    ulEl.innerHTML = '<li class="list-item"></li>';
    const liEl = document.querySelector('.list-item');
    // dentro del li, mete un h2 y una imagen y las guardo en constantes
    liEl.innerHTML = '<h2 class="title"></h2><img class="photo" src="" alt="">';
    const title = document.querySelector('.title');
    const photo = document.querySelector('.photo');
    // hace una petición fetch a la url de la API: http://api.tvmaze.com/singlesearch/shows?q= + el valor del input, que:
    fetch('http://api.tvmaze.com/singlesearch/shows?q=' + inputValue)
    .then(function (response) {
        return response.json()
    })
    .then(function(data) {
        // asigna al innerHTML del h2 el título de la serie
        title.innerHTML = data.name;
        console.log(data);
        // asigna al src de la imagen la url de una imagen por defecto, si en data no la hay 
        if (data.image === null) {
            photo.src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
        } else {
            // y si la hay, toma la url del objeto "data" como valor para "photo.src"
            photo.src = data.image.medium;
        }

    });
}
// segunda etapa del ejercicio: lista de favoritos
// 1. cuando pinchamos un li "resultado", intercambia el color del fondo del li con el de el texto del título
    // recuperar el li que guardé en una constante en la anterior función...
    console.log(liEl);
    // escuchamos el click sobre el li
    liEl.addEventListener('click', changeColorLi);
    console.log(liEl);
    // función en la que:
    // function changeColorLi() {
    //     // si tiene la clase list-item, se le quita y se le añade la clase list-item-select
    //     if (liEl)
    //     // en el resto de casos, se añade la clase list-item de nuevo
    // }

// 2. almacenamos cada li seleccionado en un array que almacenamos en una variable
    // el listado se visualiza en la parte izquierda de la pantalla