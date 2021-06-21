//Question  1
var is_array = function(incoming) {
    if (toString.call(incoming) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));

  //question 2

  var array_Clone = function(clone_Data) {
    return clone_Data.slice(0);
       };
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone([1, 2, [4, 0]]));

   
  //Question 3
  var first =  function(data, n) {
    if (data == null) {
    return void 0;
    }else 
  if (n == null) {
    return data[0];
  }else
    if (n < 0) {
    return [];
  }else {
  return data.slice(0, n);
}
  };

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


//question 4

var myColor =["Red","Green","White","Black"];
console.log(myColor.join(',')); 
console.log(myColor.join(',')); 
console.log(myColor.join('+'));

//Question 5
var data = [3,,'a','a','a','a',2,3,4,'a',5,6,9,0];
var count = null;
var constant = 1;
var word;
data.forEach((element)=> {
    data.forEach((compare)=>{
        if (element == compare) {
            count++;
        }
        if (constant < count) {
           constant = count;
           word = element;
        }
    });
  count = null;
});
console.log(word,'('+ constant +'times'+')');