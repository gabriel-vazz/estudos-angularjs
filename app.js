var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/login', { 
        templateUrl: 'views/login.html', 
        controller: 'loginController'
    })
    .when('/registrar', { 
        templateUrl: 'views/registrar.html'
    })
    .when('/', { 
        templateUrl: 'views/home.html',
    })
    .when('/perfil/:id', { 
        templateUrl: 'views/perfil.html',
        controller: 'usuarioController',
    })
    .otherwise({ 
        templateUrl: 'views/404.html '
    })
}]);

app.config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);