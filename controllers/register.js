app.controller('registerController', function($scope, usuarioFactory, $location) {

    $scope.registrarUsuario = function() {
        const user = {
            nome: $scope.nome,
            email: $scope.email,
            senha: $scope.senha
        }
        usuarioFactory.insertUser(user).then(() => {
            alert('Sua conta foi criada com sucesso!');
            $location.path('/login');
        }, () => {
            $scope.msg = 'Já existe uma conta com esse email.';
        })
    }
});