var fs = require('fs');

fs.writeFile(__dirname + "/index.html","<h1>HTML ROcks</h1>",function (error){
	if (error) {
		return console.log(error);
	} else {
		return console.log('No errors found');
	}
});

console.log(2+2);
