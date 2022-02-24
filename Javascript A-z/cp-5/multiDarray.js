// multi dimensional array

// let arr = [,[[],[]],[[],[]]]; multi dimensional array


let arr = [
    [78,70,90,95],
    [50,65,89,67],
]

for(let i = 0; i<arr.length; i++){
    // console.log(arr[i])
    for(let j = 0;j<arr[i].length;j++){
        console.log(arr[i][j],+i+' '+'element')
    }
}
// console.log(arr)