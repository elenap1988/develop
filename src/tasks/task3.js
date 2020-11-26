

//Task3
let arr = ['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron',9];
	for (let i = 0; i < arr.length; i++){
		if (typeof arr[i] === 'string'){
		console.log(arr[i] + 'string value');
	}
		else{
			console.log(arr[i] + 'number value');
		}
}
		
arr.forEach(function(elem,index){
	console.log('${elem}');
	console.log('${index}');
});












