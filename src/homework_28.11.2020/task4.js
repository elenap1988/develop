
//Task4

let arr = [1,4,2,67,34,2,50,23,11,10,5,4,9,21];
1 способ
document.write(arr);
document.write('</br>');
let newArr = arr.map( arr => arr + 10);
document.write(newArr);
2 способ
for (let i = 0; i < arr.length; i++){
	arr[i] += 10
}
document.write(arr);












