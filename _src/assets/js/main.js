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
            for (let i = 0; i < data.length ; i++) {
                ulEl.innerHTML = '<li class="list-item"></li>';
                const liEL = document.querySelector('.list-item');
                liEL.innerHTML = data[i];
                console.log(ulEl.innerHTML);
            }
        });
};