console.log('app loaded', window);

document.addEventListener('DOMContentLoaded',()=> {

    // selects the element being changed
    const title = document.querySelector('h1');
    // changes the text content
    title.textContent = 'Java Sript says, Hello World!';

    // selects element by ID
    const welcomeParagraph = document.querySelector('#welcome-paragraph');
    welcomeParagraph.textContent = 'Peppa Pig';

    // selects a list item by class
    const redElement = document.querySelector('li.red');
    redElement.textContent = 'Scarlet';

    const allListElements = document.querySelectorAll('li');
    console.dir(allListElements);

    const newListItem = document.createElement('li');
    newListItem.textContent = 'Purple';
    newListItem.classList.add('purple');
    const list = document.querySelector('ul');
    list.appendChild(newListItem);

    const newListItem2 = document.createElement('li');
    newListItem2.textContent = 'Orange';
    newListItem2.classList.add('orange');
    const list1 = document.querySelector('ul');
    list.appendChild(newListItem2);
});
