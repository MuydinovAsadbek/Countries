const elDarkModeButton = document.querySelector('.button');

elDarkModeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});