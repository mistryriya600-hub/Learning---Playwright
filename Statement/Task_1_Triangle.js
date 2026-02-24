let triangle_side1 = 0;
let triangle_side2 = 3;
let triangle_side3 = 2;

if (triangle_side1 === triangle_side2 && triangle_side2 === triangle_side3 && triangle_side1 === triangle_side3) {
    console.log("Equilateral triangle");
}
else if (triangle_side1 === triangle_side2 || triangle_side2 === triangle_side3 || triangle_side1 === triangle_side3) {
    console.log("Scalene triangle");
}
else{
    console.log("Isosceles triangle");
}