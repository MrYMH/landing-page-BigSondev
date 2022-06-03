
// ===========  mobile menu ========================

const show = document.getElementById('show');
const cancel = document.querySelector('#cancel');
const nav = document.querySelector('.nav');

show.onclick = function(){
    nav.style.opacity = '1';
    show.style.display = 'none';
    cancel.style.display = 'block';
}
cancel.onclick = function(){
    nav.style.opacity = '0';
    show.style.display = 'block';
    cancel.style.display = 'none';
}