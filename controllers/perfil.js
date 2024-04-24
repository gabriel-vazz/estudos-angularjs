app.controller('perfilController', function(
    $scope, 
    usuarioFactory, 
    $cookies, 
    $location,
    loginFactory
) {
    loginFactory.protectRoute();

    var sessao = $cookies.getObject('sessao').id;

    $scope.getUsuarioAtual = function() {
        usuarioFactory.getUserById(sessao).then((data) => {
            $scope.perfil = data;
        });
    }
    
    $scope.editarPerfil = function() {
        const data = { 
            nome: $scope.perfil.nome, 
            email: $scope.perfil.email
        };
        usuarioFactory.updateUser(sessao, data).then(() => {
            alert('Seu perfil foi atualizado com sucesso!');
            $location.path('/perfil');
        }, () => {
            $scope.msg = 'Esse endereço de e-mail está indisponível.';
        })
    }
});