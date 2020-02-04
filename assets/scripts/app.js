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
  $('#reset-game').hide()
  $('#game-status').hide()
  $('#total-games').hide()
  $('#menu-options').hide()
  $('#show-hide-menu').hide()

  $('#imageOne').hide()
  $('#imageTwo').hide()
  $('#imageThree').hide()
  $('#imageFour').hide()
  $('#imageFive').hide()
  $('#imageSix').hide()
  $('#imageSeven').hide()
  $('#imageEight').hide()
  $('#imageNine').hide()
  $('#gamePics').hide()

  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#reset-game').on('submit', events.onResetGame)
  $('#image-form').on('submit', events.setMarkerImage)

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
  $('#menu-button').on('click', events.showMenu)

  $('#0').on('mouseenter', events.checkValid)
  $('#0').on('mouseout', events.resetToWhite)

  $('#1').on('mouseenter', events.checkValid)
  $('#1').on('mouseout', events.resetToWhite)

  $('#2').on('mouseenter', events.checkValid)
  $('#2').on('mouseout', events.resetToWhite)

  $('#3').on('mouseenter', events.checkValid)
  $('#3').on('mouseout', events.resetToWhite)

  $('#4').on('mouseenter', events.checkValid)
  $('#4').on('mouseout', events.resetToWhite)

  $('#5').on('mouseenter', events.checkValid)
  $('#5').on('mouseout', events.resetToWhite)

  $('#6').on('mouseenter', events.checkValid)
  $('#6').on('mouseout', events.resetToWhite)

  $('#7').on('mouseenter', events.checkValid)
  $('#7').on('mouseout', events.resetToWhite)

  $('#8').on('mouseenter', events.checkValid)
  $('#8').on('mouseout', events.resetToWhite)
})
