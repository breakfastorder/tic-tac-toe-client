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
}

const onSignInFailure = function (response) {
  $('#message').html('Sign in failed, please try again')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#message').html('User has been signed out')
  store.user = null
  $('#sign-out').trigger('reset')
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

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure

}
