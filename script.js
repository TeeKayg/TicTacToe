const boxes = document.querySelectorAll('[data-cell')
const circle = 'circle'
const X = 'x'
let winMessage = document.querySelector('.winMessage')
let currentTurn = X

const reset = document.querySelector('.reset')

const WinCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
// Add event listener to each cell
boxes.forEach(box => {
    box.addEventListener('click', boxClick)
})

// Create player Factory Function
const playerFactory = (name, currentChoice) => {
    return {name, currentChoice}
}

// Create module for Game Controller
const gameControl = (() => {
})

//  Function for clicking on a box
function boxClick(e){
    const cell = e.target;
    cell.classList.add(currentTurn)
    if (checkWin(currentTurn)){
        displayWinMessage()
    } else if(isDraw()){
        winMessage.innerText = 'Tie Game'
    } else{
        changeTurns();
    };
   
}

// Switch turns
function changeTurns(){
    if (currentTurn == X){
        currentTurn = circle
    } else if (currentTurn == circle){
        currentTurn = X
    }
}

// Check for a win 
function checkWin(currentTurn) {
    return WinCombo.some(combination => {
      return combination.every(index => {
        return boxes[index].classList.contains(currentTurn)

      })
    })
  }

  // Display win message on page
  function displayWinMessage(){
    if (currentTurn == X){
        winMessage.innerText = 'X Has Won!'
    } else if (currentTurn == circle){
        winMessage.innerText = 'Circle Has Won'
    }
  }

  // Check for a draw 
  function isDraw() {
    return [...boxes].every(cell => {
      return cell.classList.contains(X) || cell.classList.contains(circle)
    })
  }

  // Reset button
  reset.addEventListener('click', (e)=> {
    boxes.forEach(box => {
        box.classList.remove(circle)
        box.classList.remove(X)
        winMessage.innerText = ''
    })
  })
  