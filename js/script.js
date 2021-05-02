const btn_search = document.querySelector('.search').querySelector('a');
const search = document.querySelector('.input');
const width_search = document.querySelector('.header__menu');
console.log(width_search);

const navButton = document.querySelector('.header__burger');

navButton.addEventListener('click', e => {
    navButton.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock')
})

function initDisplaySearch() {

    btn_search.addEventListener('click', e => {
        search.classList.toggle('s_active');
        width_search.classList.toggle('s_active');
        (btn_search.innerHTML == '<i class="fas fa-search"></i>')? btn_search.innerHTML = '<i class="fas fa-times"></i>' : btn_search.innerHTML = '<i class="fas fa-search"></i>'
        });}



const mm = window.matchMedia('(min-width: 1000px)')

window.addEventListener('load', function () {
mm.matches? initDisplaySearch() : 0
});