var n = 255;

console.log(randomNumber(n))

function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
   if(n <= 0 || n > 1000000) return "Error number must be greater than 0 or less than 1000000"
   let originalBin = n.toString(2)
   let randomBin = ""

   while(!randomBin || parseInt(1 + randomBin, 2) <= parseInt(originalBin, 2)){
     randomBin = (flip() ? 1 : 0) + randomBin;
   } 
              
   return parseInt(randomBin, 2)
}
