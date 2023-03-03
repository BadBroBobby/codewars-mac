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

//8 kyu
//Power

//Solution
function numberToPower(number, power){
  console.info(Math.log2(1024));
  // Code here
  
  let num = number
    
  if(power === 0){
    return 1
  }
  
  
  for(let i = 1; i < power; i++){
    num *= number
  }
}