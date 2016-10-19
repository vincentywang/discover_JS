function buildFunctionArray() {
	var arr = [];
	for (var i = 0; i <3; i++) {
		arr.push(function () {
			console.log(i);
		});
	}
	return arr;
}

var tempArr = buildFunctionArray();

tempArr[0]();
tempArr[1]();
tempArr[2]();




function buildFunctionArray2() {
	var arr = [];
	for (var i = 0; i <3; i++) {
		arr.push(function (j) {
			return function () {
				console.log(j);	
			};
		}(i));
	}
	return arr;
}

var tempArr2 = buildFunctionArray2();

tempArr2[0]();
tempArr2[1]();
tempArr2[2]();