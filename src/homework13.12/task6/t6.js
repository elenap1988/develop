//task6
let link = document.querySelectorAll('.smooth-scroll');
 for(let i = 0; i <link.length; i++){
 	link[i].addEventListener('click', function(event){
 		event.preventDefault();

 		let block = event.target.getAttribute('href');
 		let sec = document.querySelector('' +block);
 		sec.scrollIntoView({
 			behavior:'smooth',
 			block: 'start',
 		})
 	})
 }






















