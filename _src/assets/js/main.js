'use strict';

// primera etapa del ejercicio: cuando se pulse el botón: añadir la info del input a la url de búsqueda a la Api para que nos devuelva la serie escrita en el input: nombre e imagen del cartel

const buttonEl = document.querySelector('.btn');
const inputEl = document.querySelector('.finder-input');
const sectionEl = document.querySelector('.main-section');

// escuchar al botón
buttonEl.addEventListener('click', handleSearchButton);
// función que:
function handleSearchButton () {
    // recoge en una constante el valor del input
    const inputValue = inputEl.value;
    // pinta un ul en nuestra main section y lo guarda en una constante
    sectionEl.innerHTML = '<ul class="list"></ul>';
    const ulEl = document.querySelector('.list');
    // pinta en nuestro ul un li y lo meto en una constante
    ulEl.innerHTML = '<li class="list-item"></li>';
    const liEl = document.querySelector('.list-item');
    // dentro del li, mete un h2 y una imagen y las guardo en constantes
    liEl.innerHTML = '<h2 class="title"></h2><img class="photo" src="" alt="">';
    // guardo en constantes los elementos title y photo
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
    //listener sobre el li creado en esta función, el cual que nos permite acceder a sus lis, si los hay, para cambia el color y seleccionarlo como favorito
    liEl.addEventListener('click', handleItemListClick);
    //segunda etapa del ejercicio: lista de favoritos. Se ejecuta escuchando el click sobre el li y éste intercambia color de fondo y fuente, así como pasa a formar parte de la lista de favoritos

    function handleItemListClick () {
    // 1. se intercambia el color del fondo del li con el de el texto del título
    // 2. almacenamos cada li seleccionado en un array que almacenamos en una variable
        // si tiene la clase list-item, se le quita y se le añade la clase list-item-select
        if (liEl.classList.contains('list-item')) {
            liEl.classList.add('list-item-select');
        };
        // almacenamos en un array que creamos en este momento, cada li que tenga la clase 'list-item-select'
        if (liEl.classList.contains('list-item-select')) {
            let liSelected = document.querySelector('.list-item-select');
            // creamos el array vacío en una variable
            const selectedArray = [];
            selectedArray[0] = liSelected;
            // for(let i=0; i<selectedSeries.length; i++) {
            // }
            console.log(selectedArray);
            // se crea otra lista en mi main-section, situada a la izquierda de la pantalla
            sectionEl.innerHTML += '<ul class="selected-list">Mis series favoritas</ul>';
            // la recojo en una constante
            const SelectedList = document.querySelector('.selected-list');
            console.log(SelectedList);
            // array se visualiza en la lista a la izquierda
            SelectedList.innerHTML += selectedArray[0];
        };
        // guardamos en esa lista los elementos del array, según vayan sumándose (bucle)
    }
}
    

