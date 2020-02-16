const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').html(response.user.email + ' has been signed up successfully')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#message').html('Sign up attempt failed, please try again')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').html(response.user.email + ' has been signed in')
  store.user = response.user
  $('#sign-in').trigger('reset')

  $('#sign-up').trigger('reset')

  $('#change-password').show()
  $('#sign-out').show()

  $('#sign-up').hide()
  $('#sign-in').hide()

  $('#game-start').show()

  store.showMenu = false
  $('#menu-options').show()
}

const onSignInFailure = function (response) {
  $('#message').html('Sign in failed, please try again')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#0').html('&nbsp;')
  $('#1').html('&nbsp;')
  $('#2').html('&nbsp;')
  $('#3').html('&nbsp;')
  $('#4').html('&nbsp;')
  $('#5').html('&nbsp;')
  $('#6').html('&nbsp;')
  $('#7').html('&nbsp;')
  $('#8').html('&nbsp;')
  $('#turn-message').text('')
  $('#message').html('User has been signed out')
  store.user = null
  $('#sign-out').trigger('reset')

  $('#change-password').hide()
  $('#sign-out').hide()

  $('#sign-up').show()
  $('#sign-in').show()
}

const onSignOutFailure = function (response) {
  $('#message').html('Attempt to sign out failed, please try again')
  $('#sign-out').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').html('Password has been changed successfully')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').html('Attempt to change password failed, please try again')
  $('#change-password').trigger('reset')
}

const startGameSuccess = function (response) {
  $('col-4').show()
  $('#message').html('Game created')
  store.game = response.game
}

const startGameFailure = function (response) {
  $('#message').html('Game creation failed, please try again')
}

const updateBoardSuccess = function (response) {
  // console.log(response)
  if (store.gameOver === false) {
    $('#message').html('Game updated')
  }
  store.game = response.game
}

const updateBoardFailure = function (response) {
  $('#message').html('Update failed')
}

const onShowSuccess = function (response) {
  $('#message').html('Show sucess')
}

const onShowFailure = function (response) {
  $('#message').html('Show failed')
}

const onIndexSuccess = function (response) {
  $('#display-total-games').html('')
  $('#display-total-games').html(response.games.length)
}

const onIndexFailure = function (response) {
  $('#message').html('Get total games request failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  startGameSuccess,
  startGameFailure,
  updateBoardSuccess,
  updateBoardFailure,
  onShowSuccess,
  onShowFailure,
  onIndexSuccess,
  onIndexFailure

}
