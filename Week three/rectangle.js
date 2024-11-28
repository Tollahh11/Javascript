class Rectangle{
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
}
    calculateArea() {
        return this.length * this.breadth
    }
    calculatePerimeter() {
        return 2 * (this.length + this.breadth)
    }
}
let rectangle = new Rectangle(7, 7)
console.log("Area is " + rectangle.calculateArea())
console.log("Perimeter is " + rectangle.calculatePerimeter()) 