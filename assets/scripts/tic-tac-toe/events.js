const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
let placeMarkerX = true

const placeGamePieces = function (event) {
  console.log(placeMarkerX)
  event.preventDefault()
  const spot = event.target
  if (placeMarkerX && $(spot).html() === '') {
    $(spot).html('X')
    placeMarkerX = !placeMarkerX
  } else if ($(spot).html() === '') {
    $(spot).html('O')
    placeMarkerX = !placeMarkerX
  }
}

const gameStart = function () {
  $('.col-4').show()
  $('#game-start').hide()
  const array = store.game
  api.startGame(array)
    .then(ui.startGameSuccess)
    .catch(console.log('error creating game'))
  console.log(store.game)
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

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
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

module.exports = {
  placeGamePieces,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  gameStart
}