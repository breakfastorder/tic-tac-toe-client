const store = require('./../store')
// const api = require('./api')
// const ui = require('./ui')
// const events = require('./events.js')

let gameOver = false

const checkWinLoss = function () {
  // get the array
  const game = store.game.cells
  let tie = false
  let playerX = null

  const game1 = []
  const game2 = []
  const game3 = []

  for (let i = 0; i < game.length; i++) {
    if (i < 3) {
      game1.push(game[i])
    } else if (i < 6) {
      game2.push(game[i])
    } else if (i < 9) {
      game3.push(game[i])
    }
  }
  if (game1.every(element => element === 'x')) { // if every element of the array is x/o then win
    gameOver = true
    playerX = true
    console.log('every 1x')
  } else if (game2.every(element => element === 'x')) {
    console.log('every 2x')
    gameOver = true
    playerX = true
  } else if (game3.every(element => element === 'x')) {
    console.log('every 3x')
    gameOver = true
    playerX = true
  }

  if (game1.every(element => element === 'o')) { // if every element of the array is x/o then win
    gameOver = true
    console.log('every 1o')
    playerX = false
  } else if (game2.every(element => element === 'o')) {
    console.log('every 2o')
    gameOver = true
    playerX = false
  } else if (game3.every(element => element === 'o')) {
    console.log('every 3o')
    gameOver = true
    playerX = false
  }

  for (let i = 0; i < 3; i++) { // check the first index of the array all the way across
    // if the index + 3 and index + 6 are equal to the first, then three in a row
    let checkFor = null
    if (game[i] !== '') {
      checkFor = game[i]
    }

    if (game[i + 3] === checkFor && game[i + 6] === checkFor) {
      console.log('checkFor normal')
      playerX = game[i] === 'x'
      gameOver = true
    }
  }

  let checkFor1 = null
  let checkFor2 = null

  if (game[0] !== '') {
    checkFor1 = game[0]
  }

  if (game[2] !== '') {
    checkFor2 = game[2]
  }

  if (game[4] === checkFor1 && game[8] === checkFor1) {
    console.log(' in check 1')
    playerX = game[0] === 'x'
    gameOver = true
  }

  if (game[4] === checkFor2 && game[6] === checkFor2) {
    console.log(' in check 2')
    playerX = game[2] === 'x'
    gameOver = true
  }
  if (playerX === null) {
    tie = game.every(element => element !== '')
  }
  if (gameOver === true && tie === false) {
    if (playerX) {
      $('#message').html('X Won!')
    }

    if (playerX === false) {
      $('#message').html('O Won!')
    }
  } else if (gameOver === true && tie === true) {
    $('#message').html('Game over, result is a Tie')
  }
}

const getGameOver = function () {
  return gameOver
}

const setGameOver = function (value) {
  gameOver = value
}

module.exports = {
  checkWinLoss,
  getGameOver,
  setGameOver
}
