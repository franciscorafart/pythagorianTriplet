// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

//Find combinations of a+b+c that add 1000

let combinations = []

// TODO: Refine this algorithm. So that it doesn't include repeated arrays for a and b

//Loop that goes through the combinations of three numbers that add 1000
for(let a = 1; a<=1000;a++){
  for(let b = 1; b<=(1000-a); b++){
    for(let c = 1; c<=(1000-b); c++){

      //If a,b,c add 1000 and they are a pythagorian triplet, add to the combinations array, as a new array
      if(a+b+c == 1000 && isTriplet(a,b,c)){
        let arr = [a,b,c]
        combinations.push(arr)
      }
    }
  }
}
console.log(combinations)
//find the product of triplet
console.log(combinations[0][0]*combinations[0][1]*combinations[0][2])


//function that evaluate if combinations are pythagorian triplets
function isTriplet(x,y,z){
  let res = false
  let ls = Math.pow(x,2) + Math.pow(y,2)
  let rs = Math.pow(z,2)

  if(ls == rs){
    res = true
  }
  return res
}
