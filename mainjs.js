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

//8 kyu
//Grasshopper - Order of operations

//Solution
function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}

//8 kyu
//Template Strings

//Solution
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}

//or arrouw function
var TempleStrings = (obj, feature) => `${obj} are ${feature}`

//8 kyu
//How many stairs will Suzuki climb in 20 years?

//Solution
function stairsIn20(s){
  //your code here
  
  let reducedArr = s.map( array => array.reduce( (acc,c) => acc+c, 0) )
  let totalYear = reducedArr.reduce( (acc,c) => acc+c, 0) 
  
  return totalYear * 20
}

//7 kyu
//Spacify

//Solution
function spacify(str) {
  // return 
  return str.split('').join(' ')
}
//

//7 kyu
//max diff - easy

//Solution
function maxDiff(list) {
  let largestVal = Math.max(...list)
  let smallestVal = Math.min(...list)
  
  if(list.length <= 1){
    return 0
  }
  
  return largestVal - smallestVal
};

//8 kyu
//NBA full 48 minutes average

//Solution
function pointsPer48(ppg, mpg) {
  let totalScore = ppg / mpg * 48;
  
  if(ppg == 0 || mpg == 0){
    return 0;
  }
  
  
  return Number(totalScore.toFixed(1));
}
