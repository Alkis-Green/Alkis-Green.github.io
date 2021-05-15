'use strict';

let toggleBtn = document.querySelector('.toggle');

toggleBtn.addEventListener('click', function () {

    const containerGrid = document.querySelector('.grid');
    containerGrid.classList.toggle('toggleView');

});