//task3

let ul = document.querySelector('ul')
let numbers = [];

while(true){
	let num = prompt('Введите число');
	numbers.push(Number(num));
	if (num === '' || num === null) break;	

	let list = document.createElement('li');
	ul.appendChild(list);

		let arr = numbers.reduce(function(acc,item){
			return acc + item
		},[]);

	let newArr = arr.split('');
		let newArr2 = newArr.map(function(item){
			return +item;
	});

	let mainArr = newArr2.reduce(function(acc,item){
		return acc + item
	});

	list.innerHTML = mainArr;

}
















