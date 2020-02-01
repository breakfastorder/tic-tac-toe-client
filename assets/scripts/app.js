'use strict'
const events = require('./tic-tac-toe/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()

  $('#game-start').hide()
  // $('.col-4').hide()
  $('#reset-game').hide()
  $('#game-status').hide()

  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)

  $('#0').on('click', events.placeGamePieces)
  $('#1').on('click', events.placeGamePieces)
  $('#2').on('click', events.placeGamePieces)
  $('#3').on('click', events.placeGamePieces)
  $('#4').on('click', events.placeGamePieces)
  $('#5').on('click', events.placeGamePieces)
  $('#6').on('click', events.placeGamePieces)
  $('#7').on('click', events.placeGamePieces)
  $('#8').on('click', events.placeGamePieces)

  $('#game-start').on('click', events.gameStart)
  $('#game-status').on('submit', events.showBoardStatus)

  $('#reset-game').on('submit', events.onResetGame)
})
