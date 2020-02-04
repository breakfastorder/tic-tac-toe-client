const store = require('./../store')
// const gameLogic = require('./gameLogic')
const resourceWatcher = require('./resourceWatcher')
const config = require('./../config')
const api = require('./api')


let gameWatcher = null
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

const startGameSuccess = function (response) {
  $('col-4').show()
  $('#message').html('Game created')
  store.game = response.game
  console.log(store.game.id + ' in success')
}

const startGameFailure = function (response) {
  $('#message').html('Game creation failed, please try again')
}

const updateBoardSuccess = function (response) {
  if (store.gameOver === false) {
    $('#message').html('Game updated')
    console.log(response.game.cells + ' game cells')
  }
  store.game = response.game

  const bothArray = [response.game, store.game]
  console.log(bothArray[0] + ' array 0 ' + bothArray[1])
  watchForChange(bothArray)
  // console.log(response)
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

const onSignOutSuccess = function (response) {
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

const onIndexSuccess = function (response) {
  // console.log(response)
  $('#display-total-games').html('')
  $('#display-total-games').html(response.games.length)
}

const onIndexFailure = function (response) {
  $('#message').html('Get total games request failed')
}

const onChangePasswordSuccess = function (response) {
  $('#message').html('Password has been changed successfully')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').html('Attempt to change password failed, please try again')
  $('#change-password').trigger('reset')
}

const createMultiplayerSuccess = function (response) {
  $('#message').html('Connected to game successfully')
  store.game.id = store.p2ID
  setGameWatcher()
}

const setGameWatcher = function () {
  gameWatcher = resourceWatcher.resourceWatcher(config.apiUrl + '/games/' + store.game.id + '/watch', {
    Authorization: 'Token token=' + store.user.token
  })
}

const createMultiplayerFailure = function (response) {
  $('#message').html('failed to connect to game')
}

const watchForChange = function () {
  gameWatcher.on('change', function (data) {
    console.log(data)
    if (data.game && data.game.cells) {
      const diff = changes => {
        const before = changes[0]
        const after = changes[1]
        for (let i = 0; i < after.length; i++) {
          if (before[i] !== after[i]) {
            return {
              index: i,
              value: after[i]
            }
          }
        }

        return { index: -1, value: '' }
      }

      const cell = diff(data.game.cells)
      $('#watch-index').val(cell.index)
      $('#watch-value').val(cell.value)
    } else if (data.timeout) { // not an error
      gameWatcher.close()
    }
  })
}

const updateMultiplayerBoardSuccess = function (response) {
  console.log(response.game + ' success')
}

const updateMultiplayerBoardFailure = function (response) {

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
  onIndexFailure,
  createMultiplayerSuccess,
  createMultiplayerFailure,
  updateMultiplayerBoardSuccess,
  updateMultiplayerBoardFailure,
  setGameWatcher
}
