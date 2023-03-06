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

//7 kyu
//Find the vowels
function vowelIndices(word){
  //your code here
  const vowels = ["a", "e", "i", "o", "u", "y"]
  let arrOfVowels = []
  
  word.toLowerCase().split("").forEach( (letter, index) => {
    if(vowels.includes(letter)){
      arrOfVowels.push(index +1)
    }
  })
  return arrOfVowels
}

//8 kyu
//ASCII Total

//Solution
function uniTotal (string) {
  // total up dem unicodes!
    let num = 0
    if(string.length == 0){
      return 0
    }else{
      string.split('').forEach( element => {
        num += element.charCodeAt(0)
      })
    }
    return num
  }

//8 kyu
//simple calculator

  function calculator(a,b,sign){
    if(typeof a != "number" || typeof b != "number" ){
      return "unknown value"
    }
    
    if (sign == "+"){
      return a + b
    }else if( sign == "-"){
      return a - b
    }else if( sign == "*"){
      return a * b
    }else if( sign == "/"){
      return a / b
    }else{
      return "unknown value"
    }
  }