//task3
let name = document.querySelector('#name');
let mail = document.querySelector('#mail');
let button = document.querySelector('#button');
let form = document.querySelector('#form');
let error = document.querySelector('#error');

let check;

button.addEventListener('click', function(){
	chech = /\w+@\w+\.\w+/.test(mail.value);
	if(chech){	
	}
	else{
		 error.style.opacity = '1';
		
	}
})
	

form.addEventListener('focus', function(event){
	event.target.style.border = '3px solid green';
}, true)

form.addEventListener('blur', function(event){
	event.target.style.border = '';
}, true)