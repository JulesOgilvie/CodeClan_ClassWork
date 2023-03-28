document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      fetchDog()
    })
});

const fetchDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
    const image = document.querySelector('img');
    image.src =data.message;
  })
  console.log("Dog button clicked");
}