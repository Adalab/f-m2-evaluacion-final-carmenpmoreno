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


    fetch('http://api.tvmaze.com/search/shows?q=' + inputValue)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                function printLi() {
                    ulEl.innerHTML += '<li class="list-item"></li>';
                    let liEl = document.querySelectorAll('.list-item');
                    liEl[i].innerHTML = '<h2 class="title"></h2><img class="photo" src="" alt="">';

                    let title = document.querySelectorAll('.title');
                    title[i].innerHTML = data[i].show.name;

                    let photo = document.querySelectorAll('.photo');
                    photo[i].src = data[i].show.image.medium;
                    photo[i].alt = 'imagen principal de la serie ' + data[i].show.name;

                }
                printLi();
            }
        });
};