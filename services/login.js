app.factory('loginFactory', function($http, $sce, $q, $cookies, $location) {
    
    var obj = {}
    var url = 'http://localhost:3000/login/';

    obj.protectRoute = function() {
        if($cookies.getObject('sessao')) {
            if($location.absUrl() === 'http://127.0.0.1:8000/#!/login') {
                $location.path('/');
            }
        } else {
            $location.path('/login');
        }
    }

    obj.login = function(email, senha) {
        var q = $q.defer();

        $http.jsonp($sce.trustAsResourceUrl(url+`?email=${email}&senha=${senha}`))
            .then((response) => {
                q.resolve(response.data);
            }).catch((error) => {
                q.reject(error);
            });
        return q.promise;
    }

    return obj;
})