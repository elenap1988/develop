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
//  let runArr = [];
//  runArr.push(count);
//  console.log(runArr);

// task 9

// const data = [1,2,1,2,3];
// let newData = data.filter(function(item,index){
// 	return data.indexOf(item) === index;
// })
// document.write(newData);

//task 11

// const arr1 = [1,2];
// const arr2 = [2,3];

// const arr3 = ['a', 'b'];
// const arr4 = ['b', 'c'];
// const arr5 = ['b', 'e', 'c'];

// const arr6 = ['b', 'b', 'e'];
// const arr7 = ['b', 'c', 'e'];
// const arr8 = ['b', 'e', 'c'];

// // arr1 arr2 [2];
// // arr3 arr4 arr5 ['b'];
// // arr7 arr8 ['b' 'e'];


// let newArr = arr6.concat(arr7,arr8);
// 	console.log(newArr);

// let simbol = newArr.filter(function(item,index){
// 	return newArr.indexOf(item) !== index;
// });

// 	console.log(simbol);	

// let simbol1 = simbol.filter(function(item,index){
// 	return simbol.indexOf(item) !== (index);
// })
// console.log(simbol1);	

//Moжно и дальше повторять. Как зацтклить filter и записать в функцию?




















