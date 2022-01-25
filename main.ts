import { Point } from './point';

// TS code is compiled in es5 JS which means there is no let and const in compiled js code
/////////////////////////////// TYPES
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: object;
// let f: number[]; // array of numbers e.g "e = [1,2,3]"
// let g: any[] = [1, 'a', true, { a: 1 }];

/////////////////////////////// Declearing group of similar constants
//// Method is JS
// const colorRed = 0;
// const colorGreen = 1;
// const colorBlue = 2;

//// Method in TS
// enum Color {
//   Red = 0,
//   Green = 1,
//   Blue = 2,
// }

// const backgroundColor = Color.Red;
// console.log(backgroundColor);

/////////////////////////////// Type Assertions
//// Type assertion is used to access intellicense
// let message;
// message = 'abc';
// const endsWith = message.endsWith('c'); // no intellicence available because type of message is any

// let endsWithC = (<string>message).endsWith('c'); // intellicence available because type of message is string on TS compiling
// let alternativeWay = (message as string).endsWith('c'); // alternative way of upper example
// // this method does not set type of message, it just gives intellicence related to string

// console.log(endsWith);

//////////////////////////////// Custom Types
// let drawPoints = (points) => {
//   // ...
// };

// drawPoints({
//   x: 5,
//   y: 7,
// });
//// we can pass as many arguments as we want but what if we wanna limiting those

//// (1) First Method inline annotation
//// prefered method is interface
// let drawPoints = (points: { x: number; y: number }) => {
//   // ...
// };

// drawPoints({
//   x: 5,
//   y: 7,
// });

//// (2) Second Method is Interface (Pascal naming convention) (used for declaration and not for implementation)
//// interface make arguments limited and type strict
//// prefered method on inline annotation
// interface Point {
//   x: number;
//   y: number;
// }

// let drawPoints = (points: Point) => {
//   console.log(points);
// };

// drawPoints({
//   x: 5,
//   y: 7,
// });

//////////////////////////////// Cohesion (Things that are related should part of one unit i.e, Class)
//////////////////////////////// Class (Provides cohesion)
//// e.g, in above example Points interface and and drawPoints are highly related, so they must be in one unit (Class)
//// Class groups variables(properties) and functions(methods) that are highly related
// class Point {
//   // x and y, will be called as fields
//   x: number;
//   y: number;

//   draw() {
//     console.log(`X: ${this.x}, Y: ${this.y}`);
//   }
// }

// //// Point is a custom type. Built in types are number, string etc
// //// when defining object of custom types, we need to explicitly allocate memory to them i.e; create instance of class to use its properties

// // let point: Point;
// // point.draw();
// //// intead of using above approach, we will use below approach

// let point = new Point();
// //// point is an object and instance of class
// point.x = 1;
// point.y = 2;
// point.draw();

///////// Constructor in classes
//// better way to write above code is following...
// class Point {
//   x: number;
//   y: number;

//   constructor(x?: number, y?: number) {
//     // if a paramenter is optional, then all right side paramenters of optional parameter should also be optional
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//     console.log(`X: ${this.x}, Y: ${this.y}`);
//   }
// }

// let point = new Point(1, 2);
// point.draw();
//// we can change x and y values using point.x and point.y - what if we want to prevent this change after initialization
//// we can prevent it using access modifiers

///////// access modifiers (public, protected, private)
//// we can modify above code like this
// class Point {
//   //   private x: number;
//   //   private y: number;

//   //   constructor(x?: number, y?: number) {
//   //     this.x = x;
//   //     this.y = y;
//   //   }
//   //// we can write above code as below single line.
//   constructor(private x: number, private y: number) {}

//   draw() {
//     console.log(`X: ${this.x}, Y: ${this.y}`);
//   }

//   getX() {
//     return this.x;
//   }

//   setX(value: number) {
//     if (value < 0) throw new Error('Value cannot be less than 0');

//     this.x = value;
//   }
// }

// // Now, we cannot access x and y outside the class as they are private i.e. point object cannot access it as point.x and point.y
// let point = new Point(1, 2);
// point.draw();
// let x = point.getX();
// console.log('x is: ' + x);
// point.setX(4);
// let newX = point.getX();
// console.log('Updated x is: ' + newX);

////////////////////// Property (Get and Set)
//// we can write above code using Get and Set properties and can access those as values despite of getX, setX methods
// class Point {
//   constructor(private x?: number, private y?: number) {}

//   draw() {
//     console.log(`X: ${this.x}, Y: ${this.y}`);
//   }

//   // we call get and set as property
//   // we can call it as getter method
//   get X() {
//     return this.x;
//   }

//   // we can call it as setter method
//   set X(value: number) {
//     if (value < 0) throw new Error('Value cannot be less than 0');

//     this.x = value;
//   }
// }

// // Now, we cannot access x and y outside the class as they are private i.e. point object cannot access it as point.x and point.y
// let point = new Point(1, 2);
// point.draw();
// let x = point.X;
// console.log('x is: ' + x);
// point.X = 4;
// let newX = point.X;
// console.log('Updated x is: ' + newX);

////////////////////// Modules

const point = new Point(1, 2);
point.draw();
