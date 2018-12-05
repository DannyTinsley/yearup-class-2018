console.log('🍔');

let input = document.querySelector('#color');
let button = document.querySelector('#change');
let body = document.querySelector('body');

function changeBackgroud(){
  body.style.backgroundColor = input.value;
}

button.addEventListener('click', changeBackgroud);

// HOW MANY WAYS CAN WE MAKE A FUNCTION

//classic functions
function potato(sweet, idaho){
  //does stuff
}

//storing an anonymous function
let potatoFunction = function(sweet, idaho) {
  alert('I WORK')
};

//passing an anonymous function as a callback
input.addEventListener('click', function(){
  //do other stuff
});

let iAmOtherPotato = (sweet, idaho) => {
  alert('I DO STUFF TOO');
}




















