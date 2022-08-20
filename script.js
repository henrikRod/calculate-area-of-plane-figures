const listOp = document.getElementById("listFigures");
const area = document.getElementById("area");
const result = document.getElementById("result");

const inputb = document.getElementById("inputb")
const inputB = document.getElementById("inputB")
const inputh = document.getElementById("inputh")
const inputD = document.getElementById("inputD")
const inputd = document.getElementById("inputd")
const inputr = document.getElementById("inputr")

function square() {
    const inputL = document.getElementById("inputL");
    const labelL = document.getElementById("labelL")
    labelL.removeAttribute("hidden");

    inputL.addEventListener("change", () => {
        const L = inputL.value ** 2;
        result.innerHTML = `The total area is: ${L}`
    });
};

listOp.addEventListener("change" , () => {
    const figure = listOp.options[listOp.selectedIndex].value;
    if (figure === "square") {
        square();
    } else if (figure === "rectangle") {
        rectangle();
    } else if (figure === "rhombus") {
        rhombus();
    } else if (figure === "parallelogram") {
        parallelogram();
    } else if (figure === "trapezium") {
        trapezium();
    } else if (figure === "triangle") {
        triangle();
    } else if (figure === "circle") {
        circle();
    }
});