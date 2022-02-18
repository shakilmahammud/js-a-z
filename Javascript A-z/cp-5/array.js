//Array 
// How to Declare A Array

// let arr = [multiple value];

// let arr = [1,2,3,4 , "hello", "hi"] // number and int array
// console.log(arr);

// let arr = new Array() //The syntax of creating array directly

// arr[0] = "coder"
// console.log(arr);

// let arr1 = [1,2,3,4,5]

// let arr2 = [6,7,8,9,10]

// let arrfinal = arr1.concat(arr2) // create a new array add broth array value in arrfinal

// console.log(arrfinal)

// var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// // place at 0th position, the element between 1st and 2nd position.  
// var result=arr.copyWithin(1,2);  
// console.log(result)

var arr=['John','Michael','Embrose','Herry','Lewis'];  
    var itr=arr.entries();  
    for (let e of itr){
        console.log(e)
    }