//Part A
//Q1. How many total combinations are possible? Show the math along with the code!

let dice1 = [1, 2, 3, 4, 5, 6];
let dice2 = [1, 2, 3, 4, 5, 6];

let totalPossibleCombimations = dice1.length * dice2.length;

console.log(totalPossibleCombimations,"totalPossibleCombimations")

//Q2.Calculate and display the distribution of all possible combinations that can be obtained when rolling both Die A and Die B together. Show the math along with
//the code!

function allPossibleDiceCombination(dice1, dice2) {
  let output = [];
  for (let i = 0; i < dice1.length; i++) {
    for (j = 0; j < dice2.length; j++) {
      output.push([dice1[i], dice2[j]])
    }

  }
  return output
}

console.log(allPossibleDiceCombination(dice1,dice2),"allPossibleDiceCombination")
// const resultMatrix = [
//   [1,1] [1,2] [1,3] [1,4] [1,5] [1,6]
//   [2,1] [2,2] [2,3] [2,4] [2,5] [2,6]
//   [3,1] [3,2] [3,3] [3,4] [3,5] [3,6]
//   [4,1] [4,2] [4,3] [4,4] [4,5] [4,6]
//   [5,1] [5,2] [5,3] [5,4] [5,5] [5,6]
//   [6,1] [6,2] [6,3] [6,4] [6,5] [6,6]
// ]


//Q3. Calculate the Probability of all Possible Sums occurring among the number of combinations from (2).
function probabilityofPossibleSums(dice1, dice2) {

  let totalOutcomes = dice1.length*dice2.length
  let hashmap = new Map();

  for (let i = 0; i < dice1.length; i++) {
    for (let j = 0; j < dice2.length; j++) {
      let sum = dice1[i] + dice2[j]
      if (!hashmap.has(sum)) {
        hashmap.set(sum, 1)
      } else {
        hashmap.set(sum, hashmap.get(sum) + 1)
      }
    }
  }

  for(let k=2;k<=12;k++){
    let probabilitySum = hashmap.get(k)
    let result = `P(Sum=${k}) = ${probabilitySum}/${totalOutcomes}`
    console.log(result)
  }
  
}

console.log(probabilityofPossibleSums(dice1, dice2))

