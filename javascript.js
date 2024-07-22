const gridContainer = document.querySelector(".grid-container");

let gridSize = 16;

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
            itemDiv.classList.add("hover");
        });
    }    
}

