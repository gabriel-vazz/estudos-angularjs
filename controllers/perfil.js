app.controller('perfilController', [
    '$scope',
    'usuarioFactory',
    '$cookies', 
    'postFactory',
    function(
        $scope, 
        usuarioFactory, 
        $cookies, 
        postFactory) {

    var id = $cookies.getObject('sessao').id;

    $scope.getUsuarioAtual = function() {
        usuarioFactory.getUserById(id, function(result) {
            $scope.perfil = result;
        })
    }

    $scope.getMyPosts = function() {
        postFactory.getPostsByUser(id, function(result) {
            $scope.postagens = result;
        })
    }

}]);