// //Array 
// // How to Declare A Array

// // let arr = [multiple value];

// // let arr = [1,2,3,4 , "hello", "hi"] // number and int array
// // console.log(arr);

// // let arr = new Array() //The syntax of creating array directly

// // arr[0] = "coder"
// // console.log(arr);

// // let arr1 = [1,2,3,4,5]

// // let arr2 = [6,7,8,9,10]

// // let arrfinal = arr1.concat(arr2) // create a new array add broth array value in arrfinal

// // console.log(arrfinal)

// // var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// // // place at 0th position, the element between 1st and 2nd position.  
// // var result=arr.copyWithin(1,2);  
// // console.log(result)

// // var arr=['John','Michael','Embrose','Herry','Lewis'];  
// //     var itr=arr.entries();  entries return value aff a key value with array method
// //     for (let e of itr){
// //         console.log(e)
// //     }

// // var marks=[50,40,45,37,50];  
  
// // function check(value)  
// // {  
// //   return value>30;  //return false, as marks[4]=20  
// // }  

// // console.log(marks.every(check))

// // var arr=['a','b',['c','d']]; //given 2D array  
// // var newArr=arr.flat(); //using flat() method 
// // console.log(newArr)

// // var arr1=['a','b','c','d'];  
// // var arr2=[1,2,3,4];  
// // var newArr=arr1.flatMap((arr1,index)=>[arr1,arr2[index]]); //It will map and flatten arr1 and arr2.  

// // var arr=Array.from("You are viewivar arr=Array.from("You are viewing an example of string"); //The string will get converted to an array.  ng an example of string"); //The string will get converted to an array.  
// // var arr=["AngularJS","Node.js","JQuery"];  
// // var result=arr.fill("Bootstrap");  
// // var result=arr.fill("Bootstrap",1);  
// // var result=arr.fill("Bootstrap",0,2);  
// // var marks=[50,40,45,37,20];  
  
// // function check(value)  
// // {  
// //   return value>30;    
// // }  
  
// // console.log(marks.filter(check)); 
// // var arr=[5,22,19,25,34];  
// // var result=arr.find(x=>x>20);  
// // console.log(result)
// // var arr=[5,22,19,25,34];  
// // var result=arr.findIndex(x=>x>20);  
// // console.log(result)

// // array.forEach(callback(currentvalue,index,arr),thisArg)  
// // var arr = ["C", "C++", "Python"];  
  
// // arr.forEach(function(fetch) {  
// //   console.log(fetch);  
// // });  

// // var arr=["AngularJS","Node.js","JQuery"]  
// // var result=arr.includes("AngularJS");  
// // console.log(result);  

// // var arr=["C","C++","Python","C++","Java"];  
// // var result= arr.indexOf("C++");  
// // console.log(result);  

// Array.isArray(obj_value);  
// var arr=new Array(1,2,34,4,5);  
// console.log(Array.isArray(arr)); //It will return true.  

// var arr=["AngularJs","Node.js","JQuery"]  
// var result=arr.join()  
// console.log(result); 