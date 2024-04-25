app.controller('perfilController', function (
    $scope, 
    $routeParams, 
    $location,
    authService,
    usuarioFactory,
    postFactory
) {
    authService.protectRoute();
    var id = $routeParams.id;

    if(authService.getSessionId() == id) {
        $location.path('/perfil');
    }

    usuarioFactory.getUserById(id).then((data) => {
        $scope.usuario = data;
    }, () => {
        $location.path('/404');
    })

    postFactory.getPostsByUser(id).then((data) => {
        $scope.postagens = data;
    });
});