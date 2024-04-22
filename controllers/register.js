app.controller('registerController', [
    '$scope', 
    'usuarioFactory', 
    '$location',
    function(
        $scope,
        usuarioFactory,
        $location
    ) {

    $scope.registrarUsuario = function() {
        const user = {
            nome: $scope.nome,
            email: $scope.email,
            senha: $scope.senha
        }
        usuarioFactory.insertUser(user, function(result) {
            if(result.error === 404) {
                $scope.msg = 'Já existe uma conta com esse email.';
            } else {
                alert('Sua conta foi criada com sucesso');
                $location.path('/login');
            }
        })
    }
}]);