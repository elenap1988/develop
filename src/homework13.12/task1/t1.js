//task1
let num1 = document.querySelector('.i1');
let num2 = document.querySelector('.i2');

num1.onkeypress = function(event){
	if(event.keyCode < 48 || event.keyCode > 57){
		return false;
	}
}
num2.onkeypress = function(event){
	if(event.keyCode < 48 || event.keyCode > 57){
		return false;
	}
}

let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');


let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');

let button = document.querySelector('button');
let main = document.querySelector('#main');
let arr = [];
b1.onchange = function fun1(){
	if (b1.checked){
		let height1 = +num1.value;
		console.log(height1);
		arr.push(height1);
		function square(){
		div1.style.backgroundColor = 'blue';
		div1.style.left = '30px';
		div1.style.width = '20px';
		div1.style.height = height1+++ 'px';
		div1.innerHTML = height1-1;	
		}
	square()
	}
}

b2.onchange = function fun2(){
	if (b2.checked){
		let height2 = +num2.value;
		console.log(height2);
		arr.push(height2);
		function square(){
		div2.style.backgroundColor = 'red';
		div2.style.width = '20px';
		div2.style.height = height2+++ 'px';
		div2.innerHTML = height2-1;	
		}
	square()
	}
}
console.log(arr);
button.addEventListener('click', function(){
	let res = arr[0]-arr[1];
	main.innerHTML = 'Баланс:'+res;
})

	


