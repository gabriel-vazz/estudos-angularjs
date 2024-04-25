app.controller('editarPostController', function(
    $scope, 
    $routeParams, 
    $location, 
    authService, 
    postFactory
) {
    authService.protectRoute();

    postFactory.getPostsByUser(authService.getSessionId())
    .then((data) => {
        if(!data.find(post => post.id == $routeParams.id)) {
            $location.path('/404');
        }
        $scope.postagem = data[0];
    })

    $scope.editarPostagem = function() {
        var post = $scope.postagem.texto;

        if(!post) {
            $scope.msg = 'Escreva sua postagem!';
        } else {
            postFactory.updatePost($routeParams.id, post)
            .then(() => {
                alert('Sua postagem foi atualizada com sucesso!');
                $location.path('/perfil');
            })
        }
    }
});