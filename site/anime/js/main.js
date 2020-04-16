$(document).ready(function() {
    var listBlock = document.querySelector('.list-anime-search-box');
    var listButton = document.querySelector('.second_title_2');

    listButton.onclick = function() {
        listBlock.classList.toggle('none');
        listBlock.classList.toggle('block');
    };





});