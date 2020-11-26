// task 6

// let numbers = [];
// while(true){
// 	let num = prompt('Введите число');
// 	numbers.push(Number(num));
// 	if (num === '15') break;
// }
// sum = 0;
// for(i = 0; i < numbers.length; i++){
// 	sum += numbers[i];
// }
// alert(sum);


//task1

// let styles = ['Джаз','Блюз'];

// document.write(styles);
// document.write('</br>');

// styles.push('Рок-н-poл');
// document.write(styles);
// document.write('</br>');

// styles[1] = 'Классика';
// document.write(styles);
// document.write('</br>');
	
// let reduce = styles.shift();
// alert(reduce);
// document.write('</br>');

// styles. unshift('Рэп','Рэгги');
// document.write(styles);
// document.write('</br>');

//Task3
// let arr = ['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron',9];
// 	for (let i = 0; i < arr.length; i++){
// 		if (typeof arr[i] === 'string'){
// 		console.log(arr[i] + 'string value');
// 	}
// 		else{
// 			console.log(arr[i] + 'number value');
// 		}
// }
		
// arr.forEach(function(elem,index){
// 	console.log('${elem}');
// 	console.log('${index}');
// });

//Task4

// let arr = [1,4,2,67,34,2,50,23,11,10,5,4,9,21];
//1 способ
// document.write(arr);
// document.write('</br>');
// let newArr = arr.map( arr => arr + 10);
// document.write(newArr);
//2 способ
// for (let i = 0; i < arr.length; i++){
// 	arr[i] += 10
// }
// document.write(arr);

//Task 5

// let arr = ['lena lena', 'ola ola', 'kate kate',1];


// let newArr = arr.filter(function(item){
// 	if (typeof item  === 'string'){
// 		return true
// 	}
// 	else{
// 		return false
// 	} 
// });
// console.log(newArr);


// 	let str = newArr.shift(); 
// 		function bigLetter(){
// 			return str[0].toUpperCase() + str.substring(1);
	
// }	
// console.log(bigLetter());

//Task2

// let arr = ['lena', 'ola', 'vala'];
// let newArr = arr.shift();
// console.log(newArr);

// count = 0;
// for(let i = 0; i < newArr.length; i++){
// 	if(newArr[i]) count++;
// }
// console.log(count);










