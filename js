Task 6
	let num1 = prompt('number1');
	let operation = prompt('operation');
	let num2 = prompt('number2');


function doOperation(){
	if (operation =='+'){
		const plus = function(){
			let result1 = Number(num1) + Number(num2);
			alert(result1);
		}
		plus();
	}
	
	else if (operation == '-'){
		const minus = function(){
			let result2 = Number(num1) - Number(num2);
 	alert(result2);
		}
		minus();
	}


	else if (operation == '/'){
		const divide = function(){
			let result3 = Number(num1) / Number(num2);
			alert(result3);	
		}
		divide();
	}

	else if (operation == '*'){
		const multiply = function(){
		let result4 = Number(num1) * Number(num2);
		alert(result4);	
		}
		multiply();
	}
}
doOperation();






