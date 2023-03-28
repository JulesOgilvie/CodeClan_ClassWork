console.log('app loaded', window);

document.addEventListener('DOMContentLoaded', () => {
    // select the newsletter form
    const form = document.querySelector('#newsletter-form');
    form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function(event){
    console.log('email received');
    event.preventDefault();
    console.log(`form submitted. Email:"${event.target.email.value}`);
    // delete form then place result in it's place
    const userEmail = event.target.email.value;

    const formOld = document.querySelector('#newsletter-form');
    const formReplace = document.createElement('h3');
    formReplace.innerHTML = `<h3> You signed up for our newsletter with the email: ${userEmail} </h3>`;

    formOld.parentNode.replaceChild(formReplace, formOld);
}