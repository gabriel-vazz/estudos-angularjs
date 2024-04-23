app.controller('perfilController', [
    '$scope',
    'usuarioFactory',
    '$cookies', 
    'postFactory',
    '$location',
    'loginFactory',
    function(
        $scope, 
        usuarioFactory, 
        $cookies, 
        postFactory,
        $location,
        loginFactory
    ) {
    loginFactory.protectRoute();

    var sessao = $cookies.getObject('sessao').id;

    $scope.getUsuarioAtual = function() {
        usuarioFactory.getUserById(sessao, function(result) {
            $scope.perfil = result;
            $scope.nome = result.nome;
            $scope.email = result.email;
        })
    }

    $scope.getMyPosts = function() {
        postFactory.getPostsByUser(sessao, function(result) {
            $scope.postagens = result;
        })
    }
    
    $scope.editarPerfil = function() {
        data = { nome: $scope.nome, email: $scope.email };

        usuarioFactory.updateUser(sessao, data, function(result) {
            if(result.error) {
                $scope.msg = 'Esse endereço de e-mail já está em uso.';
            } else {
                alert('Seu perfil foi atualizado com sucesso.');
                $location.path('/perfil');
            }
        })
    }

}]);