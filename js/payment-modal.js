const form = document.querySelector('form');
const info = document.querySelector('.info');

form.addEventListener('submit', function(e) {
e.preventDefault();
info.style.display = 'block';
});

const paylater = document.querySelector('.paylater');

paylater.addEventListener('click', function(e) {
info.style.display = 'none';
});
