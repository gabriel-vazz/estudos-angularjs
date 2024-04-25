app.controller('loginController', function($scope, authService, $location) {
    
    authService.protectRoute();
    
    $scope.fazerLogin = function(email, senha) {
        authService.login(email, senha)
        .then(() => {
            $location.path('/');
        }, () => {
            $scope.msg = 'Credenciais Incorretas.';
        })
    };

    $scope.encerrarSessao = function() {
        authService.logout();
    }
});