//task 5
	function convertType1(value,toType){
		switch(toType){
			case 'boolean':
				return Boolean(value);
				break;
			case'string':	
				return String(value);
				break;
			case'number':	
				return Number(value);
				break;	
		}
	}

	console.log(convertType1('my string','boolean'));


	const convertType2 = function(value,toType){
		switch(toType){
			case 'boolean':
				return Boolean(value);
				break;
			case'string':	
				return String(value);
				break;
			case'number':	
				return Number(value);
				break;	
		}
	}

	console.log(convertType2('my string','boolean'));


	const convertType3 = (value,toType) =>{
		switch(toType){
			case 'boolean':
				return Boolean(value);
				break;
			case'string':	
				return String(value);
				break;
			case'number':	
				return Number(value);
				break;	
		}
	}

	console.log(convertType3('my string','boolean'));
