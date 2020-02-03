const config = require('./../config')
const store = require('./../store')
// const resourceWatcher = require('./resourceWatcher')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const startGame = function (game) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    game
  })
}

const updateBoard = function (update) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: update
  })
}

const showGame = function (id) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    id
  })
}

const getIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const createMultiplayer = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: ``
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  startGame,
  updateBoard,
  showGame,
  getIndex,
  createMultiplayer
}
