app.controller('editarPerfilController', function($scope, $location, authService, usuarioFactory) {
    
    authService.protectRoute();
    var sessao = authService.getSessionId();

    usuarioFactory.getUserById(sessao).then((data) => {
        $scope.perfil = data;
    });

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