// make the script run as soon as the page loads
document.addEventListener("DOMContentLoaded", () => {
    //just to test DOMCONTENTLOADER
    //console.log("DOM fully loaded and parsed");

    //select the class container from html file
    const container = document.querySelector(".container");

    //need to create a div for each element of a grid, 3x3, 16x16
    //need to always create a new div before append
    // 256 = 16x16
    for (let i = 0; i < 256; i++) {
        const createDiv = document.createElement("div");
        createDiv.textContent = i;
        container.appendChild(createDiv);
    }


    // after above, querySelectorAll() and forEach
    const quadrados = document.querySelectorAll(".container div");

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener(
            "mouseover",
            (event) => {
                // highlight the mouseover target
                event.target.style.backgroundColor = "orange";
          
                // reset the color after a short delay
                setTimeout(() => {
                    event.target.style.backgroundColor = "";
                }, 500);
            },
            false
        );
    });

    //ao clicar no botao, pedir ao usuario input para o novo grid, depois remover o atual e gerar o novo, 
    const resetButton = document.querySelector(".reset");
    const modal = document.querySelector("dialog");
    resetButton.addEventListener("click", function() {
        const paraRemover = document.querySelectorAll(".container div");
        paraRemover.forEach((div) => {
            div.remove();
        })
        let numeroQuadrados = prompt("qual a quantidade de quadrados por lado?");
        while (isNaN(numeroQuadrados)
            || numeroQuadrados < 0
            || numeroQuadrados > 100
        ) {
            numeroQuadrados = prompt("insira um numero valido");
        }
    });

})

