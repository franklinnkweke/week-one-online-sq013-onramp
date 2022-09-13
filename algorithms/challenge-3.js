function sumMix(arr) {
   
 } var result = 0;
 for(let i = 0; i < arr.length; i++){
     var value = arr[i];
     var type = typeof value;
     
     if(type != "number"){
         value = parseInt(value);
     }
     
     result = result + value;
 }
 return result;

  module.exports = sumMix