app.controller('usuarioController', [
    '$scope', 
    '$routeParams',
    'usuarioFactory',
    '$location',
    '$cookies',
    'loginFactory',
    function usuarioController(
        $scope, 
        $routeParams, 
        usuarioFactory, 
        $location,
        $cookies,
        loginFactory
    ) {
    loginFactory.protectRoute();

    if($cookies.getObject('sessao').id == $routeParams.id) {
        $location.path('/perfil');
    }
    
    $scope.getUsuarios = function() {
        usuarioFactory.getAllUsers(function(result) {
            $scope.usuarios = result;
        });
    }
    
    $scope.getUsuario = function() {
        usuarioFactory.getUserById($routeParams.id, function(result) {
            if(result.error === 404) {
                $location.path('/404');
            }
            $scope.usuario = result;
        });
    }

    $scope.teste = function() {
        usuarioFactory.pegarUsuarios().then(function(data) {
            console.log(data);
        });
    }
}]);