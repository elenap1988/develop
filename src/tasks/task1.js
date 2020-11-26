
//task1

let styles = ['Джаз','Блюз'];

document.write(styles);
document.write('</br>');

styles.push('Рок-н-poл');
document.write(styles);
document.write('</br>');

styles[1] = 'Классика';
document.write(styles);
document.write('</br>');
	
let reduce = styles.shift();
alert(reduce);
document.write('</br>');

styles. unshift('Рэп','Рэгги');
document.write(styles);
document.write('</br>');










