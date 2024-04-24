app.controller('loginController', function(
    $scope, 
    loginFactory, 
    $cookies,
    $location
) {
    loginFactory.protectRoute();
    
    $scope.fazerLogin = function(email, senha) {
        loginFactory.login(email, senha)
        .then((result) => {
            $cookies.putObject('sessao', result.usuario, { expires: '' });
            $location.path('/');
        }, () => {
            $scope.msg = 'Credenciais Incorretas.';
        })
    };

    $scope.logout = function() {
        $cookies.remove('sessao');
    }
});