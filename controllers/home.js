app.controller('homeController', function($scope, authService, usuarioFactory) {

    authService.protectRoute();

    usuarioFactory.getUserById(authService.getSessionId())
    .then((data) => {
        $scope.perfil = data;
    });
    
    usuarioFactory.getAllUsers().then((data) => {
        $scope.usuarios = data;
    });
});