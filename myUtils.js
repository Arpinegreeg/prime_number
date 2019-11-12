module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},
	printArray: function(array) {
		for(let i=0; i<array.length; i++)
			process.stdout.write(array[i].toString() + " ");
	}
};