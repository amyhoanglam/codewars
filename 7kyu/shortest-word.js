// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//Mine
const findShort = str => Math.min(...str.split(' ').map(x => x.length))

//Best
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

  //Another
  function findShort(s){
	var arr = s.split(' ');
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}