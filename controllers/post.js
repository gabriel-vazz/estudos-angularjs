app.controller('postController', function($scope, $location, authService, postFactory) {

    authService.protectRoute();
    var sessao = authService.getSessionId();

    $scope.publicar = function() {
        if(!$scope.texto) {
            $scope.msg = 'Escreva sua postagem!';
        } else {
            postFactory.insertPost(sessao, $scope.texto).then(() => {
                alert('Sua postagem foi publicada com sucesso');
                $location.path('/perfil');
            });
        }
    }
});