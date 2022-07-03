const cells = document.querySelectorAll("td");

/* где 0 - пустая клеточка */
const gameState = [
  [2, 4, 0, 4],
  [0, 0, 0, 0],
  [0, 0, 2, 0],
  [0, 0, 0, 4],
];


function render() {
  for (let i = 0; i < gameState.length; i++) {
    for (let j = 0; j < gameState.length; j++) {
      cells[i * gameState.length + j ] = gameState[i][j];
    }
  }
}

function press(nums) {
  let array = nums.filter(Boolean);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i+1]) {
      result.push(array[i] + array[i+1]);
      i++;
    }
    else {
      result.push(array[i]);
    }
  }
  return result;
}


function calcNextState(direction) {
 if (direction === "up") {

 }
 else if (direction === "down") {

 }

 else if (direction === "right") {
   for (let i = 0; i < gameState.length; i++) {
     press(gameState[i]);
   }
 }

 else {
   for (let i = 0; i < gameState.length; i++) {
     press(gameState[i]);
   }
 }

}

calcNextState("up");
calcNextState("down");
calcNextState("right");
calcNextState("left");

