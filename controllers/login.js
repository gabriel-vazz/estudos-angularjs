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

    if($cookies.getObject('sessao')) {
        if($location.absUrl() === 'http://127.0.0.1:8000/#!/login') {
            $location.path('/');
        }
    } else {
        $location.path('/login');
    }
    
    $scope.fazerLogin = function(email, senha) {
        loginFactory.login(email, senha, function(result) {
            if(result.error === 404) {
                $scope.msg = 'Credenciais Incorretas';
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