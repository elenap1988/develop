//task5
let button = document.querySelector('#button');

button.onclick = function(){
	window.scrollTo(0,0);
}

window.onscroll = function(){
	if(window.pageYOffset > 400){
	 	button.style.opacity = '1';
	 }
	 else{
	 	button.style.opacity = '0';
	 }
}



 