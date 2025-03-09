const container = document.querySelector("#container")
const form = document.querySelector("#form")
const topLeft = document.querySelector("#topLeft")
const topRight = document.querySelector("#topRight")
const bottomLeft = document.querySelector("#bottomLeft")
const bottomRight = document.querySelector("#bottomRight")
const enviar = document.querySelector("#enviar")


form.addEventListener("submit", function(e){
    e.preventDefault()

    enviar.disabled = true;

    let topLeftValue = topLeft.value || "0";
    let topRightValue = topRight.value || "0";
    let bottomRightValue = bottomRight.value || "0";
    let bottomLeftValue = bottomLeft.value || "0";

    container.style.borderRadius = `${topLeftValue} ${topRightValue} ${bottomRightValue} ${bottomLeftValue}`;

    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = `border-radius: ${topLeftValue} ${topRightValue} ${bottomRightValue} ${bottomLeftValue};`; 

    const divBorderRadius = document.createElement("div");
    divBorderRadius.classList.add("divBorderRadius");

    divBorderRadius.appendChild(novoParagrafo)
    container.appendChild(divBorderRadius)
})