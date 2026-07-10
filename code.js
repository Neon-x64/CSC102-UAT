class counter{ //not sure if this does anything
#counter = 1
constructor(){
	}
}
let listofitems = ['Gold', 'Trash', 'Silver', 'Bronze'] //Define list of items in my casino game!

function playGame(){
	let pickOne = Math.floor(Math.random() * listofitems.length); //pick one, and NOT do a coin flip!
	let x = listofitems[pickOne];
	let struckGold = "Your Rich!"
	let frog = document.getElementById("Game")
	let shineForce = document.getElementById("Game2")
	if (x == 'Gold') {
		shineForce.innerHTML=x+" - "+struckGold;
	} else {
		shineForce.innerHTML = x
	}
}
