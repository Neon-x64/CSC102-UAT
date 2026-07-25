//NOTICE: an unusual bug was found in my program where if the page was left open for more than 8 hours, the image begins scrolling again
// there is no way to stop this unless you restart the browser 

let GruInterval = 0; //Define GruInterval and set it to 0
let positionX = 0; //Define position X, and set to 0, for some reason, it can be null, but i like numbers

function start() { //start button
    const start = document.getElementById("start") //grab our start value
    const stop = document.getElementById("stop") //same goes with stop
    start.disabled = true; //start needs to be enabled when start is clicked
    stop.disabled = false; //stop gets disabled when this is clicked
    MOVEGRU1 = setInterval(MOVEGRU, 20) // Gru Moves slowly, this function makes MOVEGRU1 and uses set interval to move meme image slowly
    ///we cant use const or let on MOVEGRU1 for some reason, we have to define it as is
    const TheX = document.getElementById("x").innerHTML = "Started, look at gru go!"
    console.log(TheX)
}

function MOVEGRU() { //the logic for MOVEGRU
    const gru = document.getElementById("meme"); //get meme image
    if (gru) { // so if gru exists
        positionX += 3; //then move it by a increment of 3
    }
    if (positionX > window.innerWidth){ //IF the position of the image moves off of the screen
        positionX = -gru.offsetWidth; //then make it magically look like it came back!
    }
    gru.style.left = positionX + 'px'; //grus style in the css gets moved positionX(so its X position) plus px, which is the image, that equals scroll
}

function stopme() { //stopme is simple
    const start = document.getElementById("start") //get start element
    const stop = document.getElementById("stop") //get stop element
    clearInterval(MOVEGRU1); //clear the MOVEGRU1 varible set
    start.disabled = false; //set start to enabled
    stop.disabled = true; //stop button gets disabled
    const TheX = document.getElementById("x").innerHTML = "Stopped, Gru is now stopped!"
    console.log(TheX)
}

