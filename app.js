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
            controller: 'homeController'
        })
        .when('/perfil/editar', {
            templateUrl: 'views/editar_perfil.html',
            controller: 'editarPerfilController'
        })
        .when('/perfil/:id', { 
            templateUrl: 'views/perfil.html',
            controller: 'perfilController',
        })
        .when('/perfil', {
            templateUrl: 'views/meu_perfil.html',
            controller: 'meuPerfilController'
        })
        .when('/post', {
            templateUrl: 'views/post.html',
            controller: 'postController'
        })
        .when('/post/editar/:id', {
            templateUrl: 'views/editar_post.html',
            controller: 'editarPostController'
        })
        .otherwise({ 
            templateUrl: 'views/404.html '
        })
}]);

app.config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);