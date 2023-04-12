const button = document.querySelector('button');
const heroImg = document.querySelector('img');
const heroName = document.querySelector('h3');
const baseURL = 'https://www.superheroapi.com/api.php/3099141313719863';

button.addEventListener('click', (event) => {
  const maxNumber = 731;
  event.preventDefault();
  const randomID = Math.round(Math.random() * maxNumber);
  fetch(`${baseURL}/${randomID}`)
    .then((idData) => idData.json())
    .then((character) => {
      heroImg.src = character.image.url;
      heroName.innerHTML = character.name;
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Hero not found!',
        text: `${error.message}`,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    });
});
