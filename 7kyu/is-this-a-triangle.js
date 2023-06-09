// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//Mine
function isTriangle (a, b, c) {
    // is sum of any two sides is greater than third then it can be a triangle
    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
      return false;
    } else if ((a <= 0) || (b <= 0) || (c <= 0)) {
      return false;
    } else {
      return true;
    } 
}


//Best 
function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a;
}