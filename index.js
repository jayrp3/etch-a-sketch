// makes container selectable in an easier way
const container = document.getElementById("container");

// creates 16x16 square divs and appends them to page
for (let i = 0; i<256; i++)
{
    const square = document.createElement("div");
    square.style.width = "6.25%";
    square.style.height ="6.25%";
    square.addEventListener('mouseenter',()=>
        {square.style.backgroundColor="black";})
    square.classList.add("square");
    container.append(square);
}

const newGridBtn = document.getElementById("newGrid");
newGridBtn.addEventListener('click', () => {
    let userInput = Number(prompt("Enter the number of squares per side (100 max): "));
    while (userInput > 100 || userInput < 1)
    {
        userInput = Number(prompt("Invalid: Enter the number of squares per side (100 max): "));
    }
    container.innerHTML="";
    let totalSquares = (userInput*userInput)
    let sizePercent = (100 / userInput)+"%";
    for (let i = 0; i < totalSquares; i++)
    {
        const square = document.createElement("div");
        square.style.width = sizePercent;
        square.style.height = sizePercent;
        square.addEventListener('mouseenter',()=>
            {square.style.backgroundColor="black";})
        square.classList.add("square");
        container.append(square);
    }
})

//