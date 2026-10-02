var height = 6; // amount of attempt
var width = 5; // length of the word


// Inital guessing position
var row = 0;
var col = 0;


var gameOver = false;
var word = "APART";


window.onload = function() {
    intialise();
}


function intialise() {
    for (let r = 0; r < height; r++)
    {
        for (let c = 0; c < width; c++)
        {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "P";
            document.getElementById("board").appendChild(tile);
        }
    }
}