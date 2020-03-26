const express = require('express')

const LiesController = require('./controllers/LiesController')
const UsersController = require('./controllers/UsersController')
const SessionsController = require('./controllers/SessionsController')

const routes = express.Router()

/**
 *  request.query
 *  request.params
 *  request.body
 *
 */

routes.post('/sessions', SessionsController.create)

routes.get('/lies', LiesController.index)
routes.post('/lies', LiesController.create)
routes.delete('/lies/:id', LiesController.delete)

routes.get('/users', UsersController.index)
routes.post('/users', UsersController.create)

routes.get('/', (req, res) => {
  res.send('Hello World! ')
})

routes.get('/ranking-list', (request, response) => {
  return res.json([
    { resumo: 'Minha esposa é pica grossa', points: 150 },
    { resumo: 'Fui sequestrado', points: 115 },
    { resumo: 'Vendi um carro ontem também, igual ao seu', points: 45 },
  ])
})

module.exports = routes
