const listOp = document.getElementById("listFigures");
const footResult = document.getElementById("result");
const sections = document.querySelectorAll("section");

listOp.addEventListener("change" , () => {
    const figure = listOp.options[listOp.selectedIndex].value;
    footResult.hidden = true;
    for(let section of sections){
        section.hidden = true;
    };
    
    switch(figure) {
        case "square":
            document.getElementById("square").hidden = false;
            break;
        case "rectangle":
            document.getElementById("rectangle").hidden = false;
            break;
        case "rhombus":
            document.getElementById("rhombus").hidden = false;
            break;
        case "parallelogram":
            document.getElementById("parallelogram").hidden = false;
            break;
        case "trapezium":
            document.getElementById("trapezium").hidden = false;
            break;
        case "triangle":
            document.getElementById("triangle").hidden = false;
            break;
        case "circle":
            document.getElementById("circle").hidden = false;
            break;
    };
});
class Square{
    constructor(){
        this.side = document.getElementById("sideSquare").valueAsNumber;
    }
    calcArea(){
        const result = this.side ** 2;
        footResult.hidden = false;
        footResult.innerHTML = `<p>The area of the square is ${result.toFixed(2).replace("." , ",")} m<sup>2</sup>.</p>`
    }
};
document.getElementById("btnSquare").addEventListener("click" , () => {
    const square = new Square();
    square.calcArea();
});
class Rectangle{
    constructor(){
        this.base = document.getElementById("baseRectangle").valueAsNumber;
        this.height = document.getElementById("heightRectangle").valueAsNumber;
    }
    calcArea(){
        const result = this.base * this.height;
        footResult.hidden = false;
        footResult.innerHTML = `<p>The area of the rectangle is ${result.toFixed(2).replace("." , ",")} m<sup>2</sup>.</p>`
    }
};
document.getElementById("btnRectangle").addEventListener("click", () => {
    const rectangle = new Rectangle();
    rectangle.calcArea();
});
class Rhombus{
    constructor(){
        this.biggerDiagonal = document.getElementById("biggerDiagonalRhombus").valueAsNumber;
        this.smallerDiagonal = document.getElementById("smallerDiagonalRhombus").valueAsNumber;
    }
    calcArea(){
        const result = this.biggerDiagonal * this.smallerDiagonal / 2;
        footResult.hidden = false;
        footResult.innerHTML = `<p>The area of the rhombus is ${result.toFixed(2).replace("." , ",")} m<sup>2</sup>.</p>`
    }
}
document.getElementById("btnRhombus").addEventListener("click", () => {
    const rhombus = new Rhombus();
    rhombus.calcArea();
});
class Parallelogram{
    constructor(){
        this.base = document.getElementById("baseParallelogram").valueAsNumber;
        this.height = document.getElementById("heightParallelogram").valueAsNumber;
    }
    calcArea(){
        const result = this.base * this.height;
        footResult.hidden = false;
        footResult.innerHTML = `<p>The area of the parallelogram is ${result.toFixed(2).replace("." , ",")} m<sup>2</sup>.</p>`
    }
};
document.getElementById("btnParallelogram").addEventListener("click" , () => {
    const parallelogram = new Parallelogram();
    parallelogram.calcArea();
});
class Trapezium{
    constructor(){
        this.biggerBase = document.getElementById("biggerBaseTrapezium").valueAsNumber;
        this.smallerBase = document.getElementById("smallerBaseTrapezium").valueAsNumber;
        this.height = document.getElementById("heightTrapezium").valueAsNumber;
    }
    calcArea(){
        const result = (this.biggerBase + this.smallerBase) * this.height / 2;
        footResult.hidden = false;
        footResult.innerHTML = `<p>The area of the trapezium is ${result.toFixed(2).replace("." , ",")} m<sup>2</sup>.</p>`
    }
};
document.getElementById("btnTrapezium").addEventListener("click", () => {
    const trapezium = new Trapezium();
    trapezium.calcArea();
});
class Triangle{
    constructor(){
        this.base = document.getElementById("baseTriangle").valueAsNumber;
        this.height = document.getElementById("heightTriangle").valueAsNumber;
    }
    calcArea(){
        const result = this.base * this.height / 2;
        footResult.hidden = false;
        footResult.innerHTML = `<p>The area of the triangle is ${result.toFixed(2).replace("." , ",")} m<sup>2</sup>.</p>`
    }
};
document.getElementById("btnTriangle").addEventListener("click" , () => {
    const triangle = new Triangle();
    triangle.calcArea();
});
class Circle{
    constructor(){
        this.pi = document.getElementById("piCircle").valueAsNumber;
        this.radius = document.getElementById("radiusCircle").valueAsNumber;
    }
    calcArea(){
        const result = this.pi * (this.radius ** 2);
        footResult.hidden = false;
        footResult.innerHTML = `<p>The area of the circle is ${result.toFixed(2).replace("." , ",")} m<sup>2</sup>.</p>`
    }
};
document.getElementById("btnCircle").addEventListener("click" , () => {
    const circle = new Circle();
    circle.calcArea();
});