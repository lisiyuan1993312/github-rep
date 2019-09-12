const Router = require('express').Router
const RepositoryController = require('../controllers/RepositoryController')
const routes = Router()
routes.get('/', RepositoryController.getAllRepositories)
routes.get('/:id', RepositoryController.getRepoByID)
module.exports = routes