// html things you can do
// read elements from the page
const button = document.querySelector('#my-button');
// update element text
button.innerText = 'Cool button';
// update element style
button.style.color = 'red';
// create elements
const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerText = 'I am a created h1';
// remove elements
button.remove();
// re-append elements
document.body.appendChild(button);
// listen for events
button.addEventListener('click', function doSomething() {
    console.log('you clicked the button')
    h1.innerText = 'you clicked the button';
    // add class to element
    h1.classList.addEventListener('active')
});

console.log(button);