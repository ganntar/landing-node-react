const express = require('express');

const UsersController = require('./controllers/UsersController');
const PagesController = require('./controllers/PagesController');
const BlogController = require('./controllers/BlogController');
const SubscritionController = require('./controllers/SubscriptionController');
const CategoryController = require('./controllers/CategoryController');
const SubCategoryController = require('./controllers/SubCategoryController');
const CoursesController = require('./controllers/CoursesController');

const routes = express.Router();

//Usuarios
routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);
routes.put('/users', UsersController.update);

//Paginas
routes.get('/pages', PagesController.index);
routes.get('/pages/list/', PagesController.list);
routes.post('/pages', PagesController.create);
routes.put('/pages', PagesController.update);
routes.delete('/pages/:id', PagesController.delete);

//Blog
routes.get('/blog', BlogController.index);
routes.post('/blog', BlogController.create);
routes.put('/blog', BlogController.update);
routes.delete('/blog/:id', BlogController.delete);

//Inscrições
//Ações que o inscrito pode fazer
routes.get('/subscription', SubscritionController.index);
routes.post('/subscription', SubscritionController.create);
routes.put('/subscription', SubscritionController.update);

//Ações que o adm pode fazer no inscrito
routes.get('/subscriptionAdm', SubscritionController.indexAdm);
routes.delete('/subscriptionAdm', SubscritionController.deleteAdm);

//Categoria
routes.get('/category', CategoryController.index);
routes.post('/category', CategoryController.create);
routes.put('/category', CategoryController.update);
routes.delete('/category', CategoryController.delete);

//SubCategoria
routes.get('/subcategory', SubCategoryController.index);
routes.post('/subcategory', SubCategoryController.create);
routes.put('/subcategory', SubCategoryController.update);
routes.delete('/subcategory', SubCategoryController.delete);

//Cursos
routes.get('/courses', CoursesController.index);
routes.post('/courses', CoursesController.create);
routes.put('/courses', CoursesController.update);
routes.delete('/courses', CoursesController.delete);


module.exports = routes;