//task9
let string = '12:59 23:41 00:12 00:00 09:15 24.00 25.00 12.60 12.93 41.93';
let check = /[012][0-9]:[0-5][0-9]/.test(string);
//console.log(string.replace(/[0-9][0-9]\.[0-9][0-9]/g, ''));//Получаем корректное время в консоле
console.log(check);

.replace/\W*\w*(\w)\1\w*\W*/, '';