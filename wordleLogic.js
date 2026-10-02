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
        else if (e.code == "Backspace")
        {
            if (0 < col && col <= width)
            {
                col -= 1;
            }

            let currTile = document.getElementById(row.toString() + "-" + col.toString());
            currTile.innerText = "";
        }
        else if (e.code == "Enter")
        {
            if (col == width) {
                update();
                row += 1;
                col = 0;
            }
        }


        if (!gameOver && row == height)
        {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }
    })
}


function update() {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currTile.innerText;

        //if letter in correct position
        if (word[c] == letter) {
            currTile.classList.add("correct");
            correct += 1;
        } // check if in the word
        else if (word.includes(letter)) {
            let index = word.indexOf(letter);
            let indexTile = document.getElementById(row.toString() + "-" + index.toString());

            while (index != -1) {
                if (word[index] != indexTile.innerText) {
                    currTile.classList.add("present");
                    break;
                }

                index = word.indexOf(letter, index+1);
                indexTile = document.getElementById(row.toString() + "-" + index.toString());

                if (index == -1) {
                    currTile.classList.add("absent");
                }
            }

        }
        else {
            currTile.classList.add("absent");
        }

        if (correct == width) {
            gameOver = true;
        }
    }   
}