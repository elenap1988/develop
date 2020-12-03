//Task5

let div = document.querySelector('div');

document.addEventListener('keyup',(event) => {
	if(event.key === 'C'){
		function circle (top,left,color,width){
	    	div.style.width = `${width}px`;
	    	div.style.height = `${width}px`;
	    	div.style.borderRadius = '50%';
	    	div.style.position = 'fixed';
	    	div.style.backgroundColor = color;
	    	div.style.top = `${top}px`;
 	    	div.style.left = `${left}px`;
		}
		circle (100,200,'red',300);
	}
	else if(event.key === 'R'){
		function rectangle (top,left,color,width,height){
			div.style.top = `${top}px`;
			div.style.left = `${left}px`;
			div.style.position = 'fixed';
			div.style.backgroundColor = color;
			div.style.width = `${width}px`;
			div.style.height = `${height}px`;
		}
	}
	else if(event.key === 'S'){
		function square(top,left,color,width){
			div.style.position = 'fixed';
			div.style.top = `${top}px`;
			div.style.left = `${left}px`;
			div.style.backgroundColor = color;
			div.style.width = `${width}px`;
			div.style.height = `${width}px`;
		}
	}
})



























