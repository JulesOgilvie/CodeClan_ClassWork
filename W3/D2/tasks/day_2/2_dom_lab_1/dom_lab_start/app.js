document.addEventListener('DOMContentLoaded',()=> {
    const container = document.querySelector('#container');

    const redP = document.createElement('p');
    redP.textContent = "Hey I'm red!";
    redP.setAttribute('id', 'red');
    container.appendChild(redP);

    const blueH3 = document.createElement('h3');
    blueH3.textContent = "I'm a blue h3!";
    blueH3.setAttribute('id', 'blue');
    container.appendChild(blueH3);

    const pinkDiv = document.createElement('div');
    pinkDiv.classList.add('pink-div');
    container.appendChild(pinkDiv);

    const newH1 = document.createElement('h1');
    newH1.textContent = "I'm in a div";
    pinkDiv.appendChild(newH1);

    const newP = document.createElement('p');
    newP.textContent = "Me too!";
    pinkDiv.appendChild(newP);
});