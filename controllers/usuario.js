app.controller('usuarioController', function (
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
        usuarioFactory.getAllUsers().then((data) => {
            $scope.usuarios = data;
        });
    }

    $scope.getUsuario = function() {
        usuarioFactory.getUserById($routeParams.id).then((data) => {
            $scope.usuario = data;
        }, () => {
            $location.path('/404');
        })
    }
});