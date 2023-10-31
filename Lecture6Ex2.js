window.location.reload(); 

let x = 4; 						// global
var y;						    // global declared but undefined

const PI = 3.1415;				// global constant

function foo(){
	
	let variable = 42;

	var y = 17;					// declared and assigned locally
	{
		let x = 'hello';		// declared and assigned locally
		console.log( x + ' ' + y + ', ' + PI );
		var y = 'Bob';			// declared and assigned locally
		a = PI;					// undeclared therefore global (hoisted)
		let variable = 'whoah nelly';

		console.log( variable );
	}
	
	console.log( x + ' ' + y + ' whoah ' + a);
	console.log( variable );

}

foo();

console.log( x + ' ' + y + ', ' + a);