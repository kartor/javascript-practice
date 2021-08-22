// Verbs

// Actions (things we do)

no = false;        // Boolean
yes = true;        // Boolean

abc = 'abc';       // String
abcd = "abcd";     // String

const count = 1;   // Number
const number = 2.2; // Number

// Declare   // VAR CONST LET
// Redeclare // VAR

// Assign    // VAR CONST LET
// Re-Assign // VAR LET

//Bind to the global object (access from anywhere)
// VAR

const array = [];
const object = {
    name: 'Karina',
    score: 100,
    isPresent: true,
}

const falsey = [false, 0, '', null, NaN, undefined];
//const truthy = [everything else!];
const truthy = [true, 'abc', 1, array, object];


const input = document.querySelector('input');
const button = document.querySelector('button');
button.style.fontSize = '100px';
input.value = 'Test';
input.type = 'color';

button.addEventListener('click', function() {
    console.log(document.querySelector('input').value);
    document.body.style.backgroundColor = input.value;
    button.innerText = input.value;
});


