var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/login', { 
        templateUrl: 'views/login.html', 
        controller: 'loginController'
    })
    .when('/registrar', { 
        templateUrl: 'views/registrar.html',
        controller: 'registerController'
    })
    .when('/', { 
        templateUrl: 'views/home.html',
    })
    .when('/perfil/editar', {
        templateUrl: 'views/editar_perfil.html',
        controller: 'perfilController'
    })
    .when('/perfil/:id', { 
        templateUrl: 'views/usuario.html',
        controller: 'usuarioController',
    })
    .when('/perfil', {
        templateUrl: 'views/perfil.html',
        controller: 'perfilController'
    })
    .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'postController'
    })
    .when('/post/editar/:id', {
        templateUrl: 'views/editar_post.html',
        controller: 'postController'
    })
    .otherwise({ 
        templateUrl: 'views/404.html '
    })
}]);

app.config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);