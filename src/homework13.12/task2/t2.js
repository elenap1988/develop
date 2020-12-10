//task2
let button = document.querySelector('#button');
let modal = document.querySelector('#modal');
let close = document.querySelector('#close');
let age = document.querySelector('#age');
let name = document.querySelector('#name');
let add = document.querySelector('#add');
let div = document.querySelector('#div');

age.onkeypress = function(event){
	if(event.keyCode < 48 || event.keyCode > 57){
		return false;
	}
}
button.onclick = function(){
	modal.style.opacity = '1';	
}
close.onclick = function(){
	modal.style.opacity = '0';
}
add.addEventListener('click', function(){
	let na = name.value;
	let ag = age.value;

	if(age.value < 18 || null){
		alert('ERROR!')
	}
	else{
		alert('Name:' +na);
		alert('Age:' +ag);
	}
	
})
	
	


	
	







