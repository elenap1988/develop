//task7
let input = document.querySelector('#input');
let button = document.querySelector('#button');
let content = document.querySelector('#content');
let newItem = document.querySelector('#newItem');
let result = document.querySelector('#result');
console.log(result);

newItem.addEventListener('click', function(){
	content.style.opacity = '1';
})

button.addEventListener('click', function(){
	result.innerHTML += `<li>${input.value}</li>`;
	result.style.background = 'red';
	result.style.listStyle = 'none';
	result.style.marginTop = '10px';
	result.style.border = '1px solid #000';
	input.value = '';
})
	
