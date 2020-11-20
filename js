//Task 6
	let num1 = prompt('number1');
	let operation = prompt('operation');
	let num2 = prompt('number2');


function doOperation(){
	if (operation =='+'){
		const plus = function(){
			let result = Number(num1) + Number(num2);
			alert(result);
		}
		plus();
	}
	
	else if (operation == '-'){
		const minus = function(){
			let result = Number(num1) - Number(num2);
 	alert(result);
		}
		minus();
	}


	else if (operation == '/'){
		const divide = function(){
			let result = Number(num1) / Number(num2);
			alert(result);	
		}
		divide();
	}

	else if (operation == '*'){
		const multiply = function(){
		let result = Number(num1) * Number(num2);
		alert(result);	
		}
		multiply();
	}
}
doOperation();














