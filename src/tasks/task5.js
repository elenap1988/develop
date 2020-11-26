

//Task 5

let arr = ['lena lena', 'ola ola', 'kate kate',1];


let newArr = arr.filter(function(item){
	if (typeof item  === 'string'){
		return true
	}
	else{
		return false
	} 
});
console.log(newArr);


	let str = newArr.shift(); 
		function bigLetter(){
			return str[0].toUpperCase() + str.substring(1);
	
}	
console.log(bigLetter());











