app.controller('loginController', [
    '$scope', 
    'loginFactory',
    '$cookies',
    '$location',
    function(
        $scope, 
        loginFactory, 
        $cookies,
        $location
    ) {
    loginFactory.protectRoute();
    
    $scope.fazerLogin = function(email, senha) {
        loginFactory.login(email, senha, function(result) {
            if(result.error === 404) {
                $scope.msg = 'Credenciais Incorretas.';
            } else {
                $cookies.putObject('sessao', result.usuario, { expires: '' });
                $location.path('/');
            }
        }
    )};
    $scope.logout = function() {
        $cookies.remove('sessao');
    }
}]);