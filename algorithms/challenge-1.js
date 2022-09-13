function secondLargest(arr) {
        arr.sort(function(a, b){return a - b}); //sorts array in ascending
        var index = arr.length - 2;
        return arr[index];
    }
  
module.exports = secondLargest