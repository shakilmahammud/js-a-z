//object declearation

// let obj ={} // object

// obj.value = 10; // this line add  value name and set value 10

// console.log(obj)

// let obj = {
//     a: 10,
//     b: 20,
// }
// console.log(obj.a)// this return object a value
// console.log(obj.a + obj.b) // this return object sum value

// console.log(obj['a'])// this line use array notation

//  var emp=new Object();   
// emp.id=101;  
// console.log(emp['id'])// this line use array notation
// const me = Object.create(people);  
// me.name = "Marry"; // "name" is a property set on "me", but not on "person"  

// const object1 = {};  
// Object.defineProperty(object1, 'property1', {  
//   value: 22, } );  
//   object1.property1;  
//     // throws an error in strict mode  
// console.log(object1.property1)

// const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  
// console.log(Object.entries(obj)[2]);  

// const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  
// console.log(Object.entries(obj)[2]); 
// const object1 = {  
//     property1: 22  
//   };  
//   const object2 = Object.freeze(object1);  
//   object2.property1 = 33;  
//   // Throws an error in strict mode  
//   console.log(object2.property1);  


// const object1 = {  
//     property1: 42  
//   }  
//   const object2 = {  
//     property2: 34  
//   }  
//   const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');  
//   const descriptor2 = Object.getOwnPropertyDescriptor(object2, 'property2');  
//   console.log(descriptor1.enumerable);  

// const object1 = {  
//     property1: 22  
//   };  
//   const descriptors1 = Object.getOwnPropertyDescriptors(object1);  
//   console.log(descriptors1.property1.value);  


// const object1 = {  
//     property1: 42  
//   };  
//   const object2 = {  
//     property2: 23  
//   };  
    
//   const descriptors1 = Object.getOwnPropertyDescriptors(object1);  
//   const descriptors2 = Object.getOwnPropertyDescriptors(object2);  
//   console.log(descriptors1.property1.writable);  


// const object1 = {};  
//  a = Symbol('a');  
//  b = Symbol.for('b');  
// const objectSymbols = Object.getOwnPropertySymbols(object1);  
// console.log(objectSymbols.length);  
// let animal = {  
//     eats: true  
//   };  
//      // create a new object with animal as a prototype  
//   let rabbit = Object.create(animal);  
//   alert(Object.getPrototypeOf(rabbit) === animal); // get the prototype of rabbit 
// const object1 = {};  
// console.log(Object.is(object1));  
// const object1 = {  
//     property1: 56  
//   };  
//   console.log(Object.is(object1));  
    
//   Object.seal(object1);  
//   console.log(Object.isSealed(object1));   

// Object.setPrototypeOf(obj, prototype)  
// const object1 = {  
//   a: 'string',  
//   b: 34,  
//   c: true  
// };  
// const object2 = {  
//   a: 'start',  
//   b: 33,  
//   c: false  
// };  
// console.log(Object.values(object1),  
//             Object.values(object1));

//  const obj = {};  
// Object.preventExtensions(obj);  
// obj.o = 3;  
  
// console.log(  
//     obj.hasOwnProperty("o")  
// );   
//object declearation

// let obj ={} // object

// obj.value = 10; // this line add  value name and set value 10

// console.log(obj)

// let obj = {
//     a: 10,
//     b: 20,
// }
// console.log(obj.a)// this return object a value
// console.log(obj.a + obj.b) // this return object sum value

// console.log(obj['a'])// this line use array notation

//  var emp=new Object();   
// emp.id=101;  
// console.log(emp['id'])// this line use array notation
// const me = Object.create(people);  
// me.name = "Marry"; // "name" is a property set on "me", but not on "person"  

// const object1 = {};  
// Object.defineProperty(object1, 'property1', {  
//   value: 22, } );  
//   object1.property1;  
//     // throws an error in strict mode  
// console.log(object1.property1)

// const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  
// console.log(Object.entries(obj)[2]);  

// const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  
// console.log(Object.entries(obj)[2]); 
// const object1 = {  
//     property1: 22  
//   };  
//   const object2 = Object.freeze(object1);  
//   object2.property1 = 33;  
//   // Throws an error in strict mode  
//   console.log(object2.property1);  


// const object1 = {  
//     property1: 42  
//   }  
//   const object2 = {  
//     property2: 34  
//   }  
//   const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');  
//   const descriptor2 = Object.getOwnPropertyDescriptor(object2, 'property2');  
//   console.log(descriptor1.enumerable);  

// const object1 = {  
//     property1: 22  
//   };  
//   const descriptors1 = Object.getOwnPropertyDescriptors(object1);  
//   console.log(descriptors1.property1.value);  


// const object1 = {  
//     property1: 42  
//   };  
//   const object2 = {  
//     property2: 23  
//   };  
    
//   const descriptors1 = Object.getOwnPropertyDescriptors(object1);  
//   const descriptors2 = Object.getOwnPropertyDescriptors(object2);  
//   console.log(descriptors1.property1.writable);  


// const object1 = {};  
//  a = Symbol('a');  
//  b = Symbol.for('b');  
// const objectSymbols = Object.getOwnPropertySymbols(object1);  
// console.log(objectSymbols.length);  
// let animal = {  
//     eats: true  
//   };  
//      // create a new object with animal as a prototype  
//   let rabbit = Object.create(animal);  
//   alert(Object.getPrototypeOf(rabbit) === animal); // get the prototype of rabbit 
// const object1 = {};  
// console.log(Object.is(object1));  
// const object1 = {  
//     property1: 56  
//   };  
//   console.log(Object.is(object1));  
    
//   Object.seal(object1);  
//   console.log(Object.isSealed(object1));   

// Object.setPrototypeOf(obj, prototype)  
// const object1 = {  
//   a: 'string',  
//   b: 34,  
//   c: true  
// };  
// const object2 = {  
//   a: 'start',  
//   b: 33,  
//   c: false  
// };  
// console.log(Object.values(object1),  
//             Object.values(object1));

//  const obj = {};  
// Object.preventExtensions(obj);  
// obj.o = 3;  
  
// console.log(  
//     obj.hasOwnProperty("o")  
// );   