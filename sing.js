
// Sing!

// Work in the sing.js file.

// Write code that console logs the "Bottles of beer on the wall" song:

//  5 bottles of beer on the wall,
//  5 bottles of beer!
//  Take one down and pass it around,
//  4 bottles of beer on the wall!
// Bonus: fix "1 bottles of beer". It should say "1 bottle of beer".

// Bonus: change "0 bottles..." to "No more bottles...".

// Bonus: Use a JavaScript prompt to ask the user how many verses they want to hear.


let n = prompt("how many bottles of beer for your wall?");

const beer = (n)=>{
	for(let i=n; i>=0; i--){
		if(i===1){
			console.log(i+" bottle of beer");
		}  else if(i<1){
			console.log("No more bottles...");
		}else{
			console.log(i+" Bottles of beer on the wall");
			console.log(i+" bottles of beer!");
			let amt=i-1;
			console.log("Take one down and pass it around,");
			console.log(amt+" bottles of beer on the wall");
		}

	}
}
beer(n);