function filterList(arr) {
    var res = [];//empty array
    for (let i = 0; i < arr.length; i++) {
        var value = arr[i];
        var isNotaNumber = isNaN(value);
      
        if(!isNotaNumber){
            res.push(value);
        }
    }
    return res;
}


  module.exports =filterList