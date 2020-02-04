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
    game,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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

//p1 token: p2 gameId - p1 into p2
const createMultiplayer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.p2ID,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateMultiplayer = function (update) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.p2ID,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: update
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
  createMultiplayer,
  updateMultiplayer
}
