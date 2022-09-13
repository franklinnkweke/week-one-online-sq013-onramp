function sumTwoSmallestNums(arr) {
    arr.sort(function(a, b){return a - b}); //sorts array in ascending
    var a = arr[0];
    var b = arr[1]
    return a + b;
}
 
  module.exports =sumTwoSmallestNums