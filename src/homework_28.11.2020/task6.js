// task 6

let numbers = [];
while(true){
	let num = prompt('Введите число');
	numbers.push(Number(num));
	if (num === '15') break;
}
sum = 0;
for(i = 0; i < numbers.length; i++){
	sum += numbers[i];
}
alert(sum);
















