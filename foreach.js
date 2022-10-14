let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});

let aNum = [99, 8, 17, 42];

aNum.sort(function(a,b) { return a-b; });
aNum.forEach(function(num){
  console.log(num);
});
