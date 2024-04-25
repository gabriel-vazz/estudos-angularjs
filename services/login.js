app.service('authService', function($http, $sce, $q, $cookies, $location) {
    
    var url = 'http://localhost:3000/login/'

    this.login = function(email, senha) {
        var q = $q.defer();

        $http.jsonp($sce.trustAsResourceUrl(url+`?email=${email}&senha=${senha}`))
        .then((response) => {
            $cookies.putObject('sessao', response.data.usuario, { expires: '' });
            q.resolve();
        }).catch((error) => {
            q.reject(error);
        });
        return q.promise;
    }
    
    this.logout = function() {
        $cookies.remove('sessao');
    }

    this.getSessionId = function() {
        return $cookies.getObject('sessao').id;
    }

    this.protectRoute = function() {
        if($cookies.getObject('sessao')) {
            if($location.absUrl() === 'http://127.0.0.1:8000/#!/login') {
                $location.path('/');
            }
        } else {
            $location.path('/login');
        }
    }
});