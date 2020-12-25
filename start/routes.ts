/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')

Route.get('/poster/:path', 'PostersController.show')

Route.group(() => {
  Route.get('/users', 'UsersController.index')
  Route.get('/users/:id', 'UsersController.show')
  Route.put('/users/:id', 'UsersController.update')
  Route.delete('/users/:id', 'UsersController.delete')

  Route.post('/genders', 'GendersController.store')
  Route.get('/genders', 'GendersController.index')
  Route.get('/genders/:id', 'GendersController.show')
  Route.put('/genders/:id', 'GendersController.update')
  Route.delete('/genders/:id', 'GendersController.delete')

  Route.post('/studios', 'StudiosController.store')
  Route.get('/studios', 'StudiosController.index')
  Route.get('/studios/:id', 'StudiosController.show')
  Route.put('/studios/:id', 'StudiosController.update')
  Route.delete('/studios/:id', 'StudiosController.delete')

  Route.post('/movies', 'MoviesController.store')
  Route.get('/movies', 'MoviesController.index')
  Route.get('/movies/:id', 'MoviesController.show')
  Route.put('/movies/:id', 'MoviesController.update')
  Route.delete('/movies/:id', 'MoviesController.delete')

  Route.post('/logout', 'AuthController.logout')
}).middleware('auth')
