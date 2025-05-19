let num = prompt("Enter the size of square: ")
function gridmaker(num = 16){
    let body = document.querySelector("body")
    for (let index = 0; index < num**2; index++) {
        let row = document.createElement("div");


    row.addEventListener("click", () => {
    row.style.backgroundColor = 
        row.style.backgroundColor === "black" ? "white" : "black";
    });
        body.appendChild(row);
        body.style.gridTemplateRows = `repeat(${num},22px)`;
        body.style.gridTemplateColumns = `repeat(${num},22px)`;     
    }}
gridmaker(num);