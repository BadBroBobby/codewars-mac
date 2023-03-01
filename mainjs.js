//7 kyu
//Divide and Conquer

//solution
function divCon(x){
  
  let strArr = x.filter( x => typeof x == "string")
  let intArr = x.filter( x => typeof x == "number")
  
  if(strArr.length > 0){
    strArr = strArr.reduce( (a,b) => +a+ +b)
  }
  
  if(intArr.length > 0){
    intArr = intArr.reduce( (a,b) => a+b)
  }
 
  
  return intArr-strArr
}  