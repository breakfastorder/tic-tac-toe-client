'use strict'
const events = require('./tic-tac-toe/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)

  $('#index-0').on('click', events.placeGamePieces)
  $('#index-1').on('click', events.placeGamePieces)
  $('#index-2').on('click', events.placeGamePieces)
  $('#index-3').on('click', events.placeGamePieces)
  $('#index-4').on('click', events.placeGamePieces)
  $('#index-5').on('click', events.placeGamePieces)
  $('#index-6').on('click', events.placeGamePieces)
  $('#index-7').on('click', events.placeGamePieces)
  $('#index-8').on('click', events.placeGamePieces)

})
