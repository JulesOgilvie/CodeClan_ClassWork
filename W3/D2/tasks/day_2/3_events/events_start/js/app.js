// event being triggered: document, thing that triggers event: DOMContentLoaded (content loaded), event that happens: logs "javascript has loaded"
// 3 parts of coding an event: element the event will happen on, the event trigger, callback
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  // show that the button has been clicked using an event
  const button = document.querySelector('#button');
  // handleButtonClick is a callback similar to the function used in 'document'
  button.addEventListener('click', handleButtonClick);

  // show that something has been input into the box
  const textInput = document.querySelector('#input');
  textInput.addEventListener('input', handleInput);

  // show what option has been selected
  const selectInput = document.querySelector('#select');
  selectInput.addEventListener('change', handleSelectChange);

  // take in a name form and display the input
  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);
});

const handleButtonClick = function(){
  // displays in the console that the button has been clicked. Useful for checking if the console is receiving the event
  console.log('Button clicked');

  // displays in the window that the button has been clicked
  const buttonResult = document.querySelector('#button-result');
  buttonResult.textContent = 'That button has been clicked for sure!';
};

// function takes in an event
const handleInput = function(event){
  // displays to the console that input has been detected
  console.log('Input received');

  // displays in window that something has been input
  const inputResult = document.querySelector('#input-result');
  // event.target.value gives us whatever the event handles and passes into the function as a variable
  inputResult.textContent = `Text has been entered! Text entered: ${event.target.value}`;
}

const handleSelectChange = function(event){
  console.log('Selection made');
  const selectedResult = document.querySelector('#select-result');
  selectedResult.textContent = `You selected "${event.target.value}"`
}

const handleFormSubmit = function(event){
  // console.log('Form Submitted');
  event.preventDefault();
  console.log(`form submitted. First name: "${event.target.first_name.value}" Last Name: "${event.target.last_name.value}"`);
  const formResult = document.querySelector('#form-result');
  formResult.textContent = `Your name is ${this.first_name.value} ${this.last_name.value}`
}