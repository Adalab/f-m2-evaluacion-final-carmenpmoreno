'use strict';


const buttonEl = document.querySelector('.btn');
const inputEl = document.querySelector('.finder-input');
const sectionEl = document.querySelector('.main-section');
const selectedArray = [];

buttonEl.addEventListener('click', handleSearchButton);

function handleSearchButton() {
    const inputValue = inputEl.value;
    sectionEl.innerHTML = '<ul class="list"></ul>';
    const ulEl = document.querySelector('.list');
    ulEl.innerHTML = '<h3 class="message">¡Haz click si es de tus favoritas!</h2><li class="list-item">hola</li>';
    
    function removeMessage() {
        if (!inputValue) {
            ulEl.innerHTML = ' ';
        };
    }
    removeMessage();

    const liEl = document.querySelector('.list-item');
    liEl.innerHTML = '<h2 class="title"></h2><img class="photo" src="" alt="">';
    const title = document.querySelector('.title');
    const photo = document.querySelector('.photo');
    fetch('http://api.tvmaze.com/singlesearch/shows?q=' + inputValue)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            title.innerHTML = data.name;
            if (data.image === null) {
                photo.src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
            } else {
                photo.src = data.image.medium;
            }

        });

    liEl.addEventListener('click', handleItemListClick);

    function handleItemListClick() {
        function changeLiColor() {
            if (liEl.classList.contains('list-item')) {
                liEl.classList.add('list-item-select');
            };
        };
        changeLiColor();

        const liElSelected = document.querySelectorAll('.list-item-select');
        for (let i = 0; i < liElSelected.length; i++) {
            const newSelectedArray = selectedArray.push(liElSelected[i].innerHTML);
        }
        sectionEl.innerHTML += '<ul class="selected-list">';
        const SelectedList = document.querySelector('.selected-list');
        SelectedList.innerHTML = '<h2 class="selected-list__title">Mis series favoritas</h2>';
        SelectedList.innerHTML += selectedArray;
    }
}


