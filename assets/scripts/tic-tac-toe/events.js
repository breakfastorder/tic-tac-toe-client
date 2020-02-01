const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const gameLogic = require('./gameLogic')

store.player = true

const placeGamePieces = function (event) {
  if (gameLogic.getGameOver() === false) {
    // console.log(placeMarkerX)
    event.preventDefault()
    const spot = event.target
    console.log(spot.id + ' spot id')
    if ((store.player && $(spot).text() !== 'X') && (store.player && $(spot).text() !== 'O')) { // same thing
      $(spot).text('X') //if buttons do html
      const data = {

        'game': {
          'cell': {
            'index': spot.id,
            'value': 'x'
          },
          'gameOver': gameLogic.getGameOver()
        }
      }
      api.updateBoard(data)
        .then(ui.updateBoardSuccess)
        .catch(ui.updateBoardFailure)
      store.player = !store.player
    } else if ((store.player === false && $(spot).text() !== 'X') && (store.player === false && $(spot).text() !== 'O')) { // same thing
      $(spot).text('O') // if buttons do html
      const data = {

        'game': {
          'cell': {
            'index': spot.id,
            'value': 'o'
          },
          'gameOver': gameLogic.getGameOver()
        }
      }
      api.updateBoard(data)
        .then(ui.updateBoardSuccess)
        .catch(ui.updateBoardFailure)
      store.player = !store.player
    }
  }
}

const gameStart = function () {
  $('.col-4').show()
  $('#game-start').hide()
  const game = store.game
  api.startGame(game)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
  // console.log(store.game)
}

const onSignUp = function (event) {
  console.log('inSignUp')
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) { // taking in sign in form
  event.preventDefault() // prevents refresh of page
  const form = event.target // set to where submit is being called
  const data = getFormFields(form) // gets data from form sign in
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const showBoardStatus = function () {
  event.preventDefault()
  console.log(store.game)
  api.showGame(store.game.id)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onResetGame = function () {
  event.preventDefault()
  // gameLogic.resetGame()
  store.game = null
  gameStart()
  $('#0').html('')
  $('#1').html('')
  $('#2').html('')
  $('#3').html('')
  $('#4').html('')
  $('#5').html('')
  $('#6').html('')
  $('#7').html('')
  $('#8').html('')
  gameLogic.setGameOver(false)
  store.player = true
}

const testClick = function (event) {
  event.preventDefault()
  const spot = event.target
  $(spot).text('X')
}
module.exports = {
  placeGamePieces,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  gameStart,
  showBoardStatus,
  onResetGame,
  testClick
}
