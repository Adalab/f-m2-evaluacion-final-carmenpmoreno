'use strict';

// primera etapa del ejercicio: cuando se pulse el botón: añadir la info del input a la url de búsqueda a la Api para que nos devuelva la serie escrita en el input: nombre e imagen del cartel

const buttonEl = document.querySelector('.btn');
const inputEl = document.querySelector('.finder-input');
const sectionEl = document.querySelector('.main-section');
// array en el que almacenaremos lis seleccionados como favorito
const selectedArray = [];

// escuchar al botón
buttonEl.addEventListener('click', handleSearchButton);
// función que:
function handleSearchButton() {
    // recoge en una constante el valor del input
    const inputValue = inputEl.value;
    // pinta un ul en nuestra main section y lo guarda en una constante
    sectionEl.innerHTML = '<ul class="list"></ul>';
    const ulEl = document.querySelector('.list');
    // pinta en nuestro ul un li y lo meto en una constante
    ulEl.innerHTML = '<h3 class="message">¡Pincha en la imagen si es de tus favoritas!</h2><li class="list-item"></li>';
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
        .then(function (data) {
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

    //nueva función para segunda etapa del ejercicio: lista de favoritos. Se ejecuta escuchando el click sobre el li y éste intercambia color de fondo y fuente, así como pasa a formar parte de la lista de favoritos

    liEl.addEventListener('click', handleItemListClick);

    function handleItemListClick() {
        // 1. se intercambia el color del fondo del li con el del texto del título
        function changeLiColor() {
            // si tiene la clase list-item, se le quita y se le añade la clase list-item-select
            if (liEl.classList.contains('list-item')) {
                liEl.classList.add('list-item-select');
            };
        };
        changeLiColor();

        // 2 .constante que selecciona todos los lis que han cambiado de clase
        const liElSelected = document.querySelectorAll('.list-item-select');
        console.log(liElSelected);

        // acumular lis en el array vacío
        for (let i = 0; i < liElSelected.length; i++) {
            const newSelectedArray = selectedArray.push(liElSelected[i].innerHTML);
        }
        // // se crea otra lista en mi main-section, situada a la izquierda de la pantalla
        sectionEl.innerHTML += '<ul class="selected-list"><h3 class="message">¡Prueba a buscar alguna más!</h2>';
        // // // la recojo en una constante
        const SelectedList = document.querySelector('.selected-list');
        // // // creo un h2 dentro de la nueva lista
        SelectedList.innerHTML = '<h2 class="selected-list__title">Mis series favoritas</h2>';
        console.log(SelectedList);
        // // // array se visualiza en la lista a la izquierda
        SelectedList.innerHTML += selectedArray;
    }






}


