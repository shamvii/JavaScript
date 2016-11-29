function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius,color)
{
    this.radius = radius;
    this.color = color;
}
var r1 = new Circle(10, "red");
var r2 = new Circle(20, "blue");