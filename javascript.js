const gridContainer = document.querySelector(".grid-container");

let grid = 32;

function createGrid(gridSize) {
    for (let i=1; i <= gridSize; i++) {
        rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "grid-row");
        gridContainer.appendChild(rowDiv);
        
        for (let j=1; j <= gridSize; j++) {
            const itemDiv = document.createElement("div");
            itemDiv.setAttribute("class", "grid-item");
            itemDiv.setAttribute("id", `${i}-${j}`);
            rowDiv.appendChild(itemDiv);

            itemDiv.addEventListener("mouseenter", (e) => {
                //const randomColor = Math.floor(Math.random()*16777215).toString(16);
                //itemDiv.style.backgroundColor = "#" + randomColor;
                itemDiv.classList.add("hover");
            });
        }    
    }
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    grid = prompt("How big of a grid", 32);
    const gridRows = document.querySelectorAll(".grid-row");
        gridRows.forEach(row => {
            row.remove();
        });
    createGrid(grid);
});

createGrid(grid);
