// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//Mine
function grow(x){
 return x.reduce((acc,c) => acc * c, 1)
}

//Best
const grow = x => x.reduce((a,b) => a * b)