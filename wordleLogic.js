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
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }


    // We listen for Key Up so if you hold down a key, it doesn't just fill every box, it is only registered when released
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;

        // Checking if key pressed is a letter
        if ("KeyA" <= e.code && e.code <= "KeyZ")
        {
            if (col < width)
            {
                let currTile = document.getElementById(row.toString() + "-" + col.toString());

                if (currTile.innerText == "")
                {
                    // Taking Index 3 as keys are labeled as Key_ where _ is the intended letter
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
                
        }
    })
}