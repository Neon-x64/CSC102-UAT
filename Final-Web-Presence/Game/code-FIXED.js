
let listofitems = ['Gold', 'Trash', 'Silver', 'Bronze'] //Define list of items in my casino game!

function playGame(){
	let pickOne = Math.floor(Math.random() * listofitems.length); //pick one, and NOT do a coin flip!
	let x = listofitems[pickOne]; //define variable that lets X mean listofitems, chained back to pick-one
	let struckGold = "Your Rich!" //define a varible which means struckGold, which also means "Your Rich!"
	let frog = document.getElementById("Game") //varible 1 named frog that gets "Game"
	let shineForce = document.getElementById("Game2") //varible 2 named shineForce that gets Game2
	if (x == 'Gold') { //if x is strict equals to Gold
		shineForce.innerHTML=x+" - "+struckGold; //then add struckgold to shineforce
	} else { //otherwise
		shineForce.innerHTML = x //back to x which is any items in the array
	}
}
