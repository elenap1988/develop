//task5
let button = document.querySelector('#button');

window.onscroll = function(){
	if(window.pageYOffset > 200){
	 	button.style.opacity = '1';
	 }
	 else{
	 	button.style.opacity = '0';
	 }
}
console.log(window.pageYOffset)


 