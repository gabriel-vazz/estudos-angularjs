app.controller('postController', [
    '$scope',
    'postFactory',
    '$routeParams',
    '$cookies',
    '$location',
    function(
        $scope, 
        postFactory, 
        $routeParams,
        $cookies,
        $location 
    ) {

    $scope.getUserPosts = function() {
        var id = $routeParams.id
        
        postFactory.getPostsByUser(id, function(result) {
            $scope.postagens = result;
            $scope.msg = result.msg
        });
    }

    $scope.publicar = function() {
        if(!$scope.texto) {
            $scope.msg = 'Escreva sua postagem!';
        } else {
            var id = $cookies.getObject('sessao').id;
            var texto = $scope.texto;

            postFactory.insertPost(id, texto, function(result) {
                if(result.success) {
                    alert('Sua postagem foi publicada com sucesso');
                    $location.path('/perfil');
                }
            })
        }
    }
}])