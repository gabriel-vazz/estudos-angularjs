app.controller('meuPerfilController', function($scope, authService, usuarioFactory, postFactory) {

    authService.protectRoute();
    var sessao = authService.getSessionId();

    usuarioFactory.getUserById(sessao).then((data) => {
        $scope.perfil = data;
    });

    postFactory.getPostsByUser(sessao).then((data) => {
        $scope.postagens = data;
    });

    $scope.deleted = [];
    $scope.excluirPostagem = function(id) {
        postFactory.deletePost(id).then(() => {
            $scope.deleted.push(id);
        })
    }
});